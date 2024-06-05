const hx = require("hbuilderx")
const path = require("path")
const fs = require("fs")
async function runOrDebugLocalCloudFunctionOrObject() {
  let tipText1 = "当前操作依赖插件【unicloud】，请安装后再试"
  let msgBoxBtnInstall = "安装(&O)"
  let msgBoxBtnCancel = "取消(&C)"

  let res = await hx.extensions.existsPlugin("unicloud")
  if (res.code === 0) {
    // console.log("unicloud exists",res)
    // 判断插件是否存在
    if (!res.exists) {
      // 弹出提示框
      let result = await hx.window.showMessageBox({
        type: "warning",
        title: "",
        text: tipText1,
        buttons: [msgBoxBtnInstall, msgBoxBtnCancel],
      })
      // 安装插件
      if (result == msgBoxBtnInstall) {
        await hx.extensions.installPlugin("unicloud")
      }
    }

    return res.exists
  }
}

class FileEventEmitter {
  constructor() {
    this.fireMap = new Map()
    this.eventEmitter = new hx.EventEmitter()
    this.registerFileDecorationProvider()
  }

  registerFileDecorationProvider() {
    hx.window.registerFileDecorationProvider({
      provideFileDecoration: (uri) => {
        return this.fireMap.get(uri.fsPath)
      },
      onDidChangeFileDecorations: this.eventEmitter,
    })
  }

  fire(uri, data) {
    uri = process.platform === 'win32' ? `file:///${uri}`: `file://${uri}`
    const uriParse = hx.Uri.parse(uri)

    this.fireMap.set(uriParse.fsPath, undefined)
    this.eventEmitter.fire(uriParse)

    this.fireMap.set(uriParse.fsPath, data)
    this.eventEmitter.fire(uriParse)
  }

 async refreshUniCloudProjectAlias() {
   const { email: userAccount, isLogin } = await hx.authorize.requestUserInfo()
   const workspaceFolders = await hx.workspace.getWorkspaceFolders()
   if (!workspaceFolders.length) return

   const providerNameMap = {
     tcb: "腾讯云",
     aliyun: "阿里云",
     alipay: "支付宝云",
   }

   for (const workspaceFolder of workspaceFolders) {
     fs.readdir(workspaceFolder.uri.fsPath, async (err, files) => {
       if (err) return

       const uniCloudProjectFileNameList = files.filter(filename => !!providerNameMap[filename.replace(/^uniCloud-/, '')])
       if (uniCloudProjectFileNameList.length <= 0) return

       if (!isLogin) {
         return uniCloudProjectFileNameList.forEach(uniCloudProjectFileName => {
           const provider = uniCloudProjectFileName.replace(/^uniCloud-/, '')
           const uniCloudProjectPath = path.resolve(workspaceFolder.uri.fsPath, uniCloudProjectFileName)
           const aliasName = `${providerNameMap[provider]}:未关联云服务空间`

           this.fire(uniCloudProjectPath, {
             aliasName,
             tooltip: `uniCloud-${aliasName}`
           })
         })
       }

       const config = await hx.workspace.getConfiguration("", workspaceFolder)
       const unicloud = config.get("uniCloud") || {}
       const currentUserUniCloudConfig = unicloud[userAccount] || {}

       uniCloudProjectFileNameList.forEach(uniCloudProjectFileName => {
         const uniCloudProjectPath = path.resolve(workspaceFolder.uri.fsPath, uniCloudProjectFileName)
         const provider = uniCloudProjectFileName.replace(/^uniCloud-/, '')
         const providerConfig = currentUserUniCloudConfig[provider]
         if (!providerConfig) {
           const aliasName = `${providerNameMap[provider]}:未关联云服务空间`
           return this.fire(uniCloudProjectPath, {
             aliasName,
             tooltip: `uniCloud-${aliasName}`
           })
         }

         const isRelatedProject = Boolean(providerConfig.related && providerConfig.related.projectid)
         const selectSpace = providerConfig.spaces.find(item => item.spaceid === providerConfig.selected)

         let aliasName
         if (isRelatedProject) {
           const relatedWorkspaceFolder = workspaceFolders.find(
             (item) => item.id === providerConfig.related.projectid
           )
           aliasName = relatedWorkspaceFolder
             ? `已关联项目${relatedWorkspaceFolder.name}`
             : `${selectSpace?.name ?? '未关联云服务空间'}`
         } else {
           aliasName = `${selectSpace?.name ?? '未关联云服务空间'}`
         }
         aliasName = `${providerNameMap[provider]}:${aliasName}`
         this.fire(uniCloudProjectPath, {
           aliasName,
           tooltip: `uniCloud-${aliasName}`,
           collapsable: isRelatedProject,
           preventDefaultContextMenu: isRelatedProject,
           customMenuContext: isRelatedProject ? 'explorer/unicloud.related.project': '',
           corners: isRelatedProject ? [{
             position:"bottomleft",
             icon:"hxtheme://explorer/relate_project.png",
             size:[10,10],
             margin:[0,0,0,-2]
           }]: []
         })
       })
     })
   }
 }
}

async function createUniCloudEnv (workspaceFolder, provider) {
  const uniCloudExist = await runOrDebugLocalCloudFunctionOrObject()
  if (!uniCloudExist) return

  const unicloud = await hx.extensions.getExtension("unicloud")
  if (!unicloud) return

  const preResult = await unicloud.preprocessBeforeCreateUniCloudEnvironment({
    workspaceFolder,
    provider,
    isCreateProject: false
  })

  if (preResult.code !== 0) {
    return hx.window.showErrorMessage(preResult.message)
  }

  try {
    await unicloud.createUniCloudEnvironment({
      workspaceFolder,
      provider
    })
  } catch (e) {
    return hx.window.showErrorMessage(preResult.message)
  }
}
// 该方法将在插件激活的时候调用
function activate(context) {
  // unicloud项目别名监听刷新
  const fileEventEmitter = new FileEventEmitter()
  fileEventEmitter.refreshUniCloudProjectAlias()
  hx.authorize.onUserLogin(function () {
    fileEventEmitter.refreshUniCloudProjectAlias()
  })
  hx.authorize.onUserLogout(function () {
    fileEventEmitter.refreshUniCloudProjectAlias()
  })
  hx.workspace.onDidChangeWorkspaceFolders(function(){
    setTimeout(() => {
      fileEventEmitter.refreshUniCloudProjectAlias()
    }, 1000)
  })

  const uniCloudFolderChangedWatcher = hx.workspace.createFileSystemWatcher("**/uniCloud-*")
  uniCloudFolderChangedWatcher.onDidChange(uri => {
    fileEventEmitter.refreshUniCloudProjectAlias()
  })
  uniCloudFolderChangedWatcher.onDidCreate(uri => {
    fileEventEmitter.refreshUniCloudProjectAlias()
  })

  // proxy
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.runLocalCloudObject.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.debugLocalCloudObject.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.runLocalCloudFunction.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.debugLocalCloudFunction.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  // 上传并运行云函数(cmd+r触发)
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.uploadAndExecFunction.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  // 上传并运行云对象(cmd+r触发)
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.uploadAndExecObject.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  // 配置运行测试参数
  hx.workspace.registerWorkspaceFolderLauncher(
    "unicloud.launcher.configureRunTestParam.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  // 云服务空间初始化向导
  hx.commands.registerCommand(
    "unicloud.command.initUniCloudSpaceWizard.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )
  // 打开uniCloud Web控制台
  hx.commands.registerCommand(
    "unicloud.command.openUniCloudWebConsole.proxy",
    async function (session) {
      runOrDebugLocalCloudFunctionOrObject(session)
    }
  )

  // 创建腾讯云云环境
  hx.commands.registerCommand(
    "unicloud.createUniCloudEnv.tcb",
    async function (session) {
      createUniCloudEnv(session.workspaceFolder, 'tcb')
    }
  )

  // 创建阿里云云环境
  hx.commands.registerCommand(
    "unicloud.createUniCloudEnv.aliyun",
    async function (session) {
      createUniCloudEnv(session.workspaceFolder, 'aliyun')
    }
  )

  // 创建支付宝云云环境
  hx.commands.registerCommand(
    "unicloud.createUniCloudEnv.alipay",
    async function (session) {
      createUniCloudEnv(session.workspaceFolder, 'alipay')
    }
  )

  return {
    fileEventEmitter,
  }
}
// 该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {}
module.exports = {
  activate,
  deactivate,
}



