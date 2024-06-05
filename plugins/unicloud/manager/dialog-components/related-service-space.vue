<template>
  <q-view layout='vbox'>
    <q-radio-group layout='hbox'>
      <q-radio id='RadioButton' text="关联服务空间" :checked='currentRadio === "space"' @clicked='radioClick("space")'></q-radio>
      <q-radio id='RadioButton' text="绑定其他项目的服务空间,适用于多项目共用服务空间" :checked='currentRadio === "project"' @clicked='radioClick("project")'></q-radio>
      <q-label :openExternalLinks="true"
               text="<a style='color:#54AE6C; font-size: 12px;' href='https://ask.dcloud.net.cn/article/37949'>详见</a>"></q-label>
      <q-view horizontal-size-policy='Expanding'></q-view>
    </q-radio-group>
    <q-view layout='hbox' v-if="currentRadio === 'space'">
      <q-view horizontal-size-policy='Expanding'></q-view>
      <q-button id="UniWizard_OperateSpace_Create" text="新建" icon='@icon.folder@unicloud_add.png' @clicked="redirectUniCloudConsole"> </q-button>
      <q-button id="UniWizard_OperateSpace_Refresh" text="刷新" icon='@icon.folder@unicloud_refresh.png' @clicked='refresh'> </q-button>
    </q-view>

    <q-list-view id="QListView" v-if="currentRadio === 'space'" @currentRowChanged="currentRowChanged">
      <q-list-item layout='hbox' v-for="item in spaces">
        <q-radio id='QRadio' :enabled='false' :checked='item.selected'></q-radio>
        <q-label id="QLabel" :text="item.spaceName" :toolTip="item.spaceName" :style="{color: item.selected ? '#4EAB57': '#405E42'}"> </q-label>
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-label id="QLabel" :text="item.spaceProvider" :style="{color: item.selected ? '#4EAB57': '#405E42'}"> </q-label>
      </q-list-item>
    </q-list-view>
    <q-list-view id="QListView" v-if="currentRadio === 'project'" @currentRowChanged="currentProjectRowChanged">
      <q-list-item layout='hbox' v-for="project in projects" :key="project.name">
        <q-radio id='QRadio' :enabled='false' :checked='project.selected'></q-radio>
        <q-label id="QLabel" :text="project.name" :toolTip="project.name" :style="{color: project.selected ? '#4EAB57': '#405E42'}"> </q-label>
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-label v-if="project.space" id="QLabel" :text="'服务空间：' + project.space.name" :style="{color: project.selected ? '#4EAB57': '#405E42'}"> </q-label>
      </q-list-item>
    </q-list-view>
  </q-view>
</template>

<script>
const hx = require('hbuilderx');
const url = require('url');

const providerCNMap = {
  'aliyun': '阿里云',
  'tcb': '腾讯云',
  'alipay': '支付宝云',
}
export default {
  data() {
    return {
      currentRadio: "space",
      spaces: [],
      isLoading: true,
      projects: [],
      providerConfig: {}
    }
  },
  async mounted(){
    this.$nextTick(() => {
      this.getSpaceServices().then(() => {
        this.setDefaultSelected()
      })
    })
  },
  methods: {
    async redirectUniCloudConsole () {
      const redirectURL = url.format({
        protocol: 'https',
        hostname: 'dev.dcloud.net.cn',
        pathname: '/auth/dcloud/callback',
        search: new url.URLSearchParams({
          return_url: encodeURIComponent('https://dev.dcloud.net.cn/unicloud/auth?action=openConsole')
        }).toString()
      })

      await hx.env.openExternal(
        url.format({
          protocol: 'https',
          hostname: 'account.dcloud.net.cn',
          pathname: '/oauth2/login',
          search: 'email=${email}&deviceId=${deviceId}&sign=${askSign}&timestamp=${timestamp}&source=hbuilder.win32&client_id=DCLOUD_DEV' + `&sourceversion=${hx.env.appVersion}&redirectURL=${encodeURIComponent(redirectURL)}`,
        })
      )
    },
    async setDefaultSelected () {
      if (!this.providerConfig || Object.keys(this.providerConfig).length <= 0) return

      const {selected} = this.providerConfig

      if (selected) {
        const spaceIndex = this.spaces.findIndex(item => item.spaceId === selected)
        if (spaceIndex > -1) {
          this.spaces.forEach((item, index) => {
            item.selected = index === spaceIndex
          })
          await this.updateUi()
        }
      }
    },
    async refresh () {
      if (this.isLoading || this.currentRadio !== 'space') return

      this.spaces = []
      await this.updateUi()

      this.$nextTick(() => {
        this.getSpaceServices()
      })
    },
    async getSpaceServices(){
      this.isLoading = true
      await this.updateUi()

      const result = await hx.http.request({
        url: "http://ide.liuyingyong.cn/serverless/space/list-all",
        method: "post",
        serviceOptions: {
          serviceRequest: true,
          body: {
            provider: "",
            appid: this.workspaceFolder.appid
          }
        },
      })

      if(result && result.service && result.service.code == 1001){
        this.spaces = result.service.body.spaces.filter(item => item.status.toLowerCase() === 'normal').map(item => {
          return {
            spaceId: item.id,
            spaceName: item.name,
            spaceProvider: providerCNMap[item.provider] + (item.isActor ? '(协作)': ''),
            selected: false,
            isActor: item.isActor,
            provider: item.provider,
            providerCNName: providerCNMap[item.provider]
          }
        })
      }

      this.isLoading = false
      await this.updateUi()
    },
    async radioClick(e){
      this.currentRadio = e;
      await this.updateUi();
    },
    async currentRowChanged(e) {
      const {currentRow} = e.target

      // 单选
      this.spaces.forEach((item, index) => {
        if (index !== currentRow) {
          item.selected = false
        }
      })

      this.spaces[currentRow].selected = !this.spaces[currentRow].selected
      await this.updateUi()
    },
    async currentProjectRowChanged(e) {
      const {currentRow} = e.target

      // 单选
      this.projects.forEach((item, index) => {
        if (index !== currentRow) {
          item.selected = false
        }
      })

      this.projects[currentRow].selected = !this.projects[currentRow].selected
      await this.updateUi()
    }
  }
}

</script>

<style lang="qss">
* {
  font-family: "Microsoft YaHei UI", "Menlo", "Consolas";
  font-size: 12px;
}

#QLabel {
  color: #54AE6C;
}

#QRadio::indicator::unchecked {
  image: url("");
}

#QRadio::indicator::checked {
  image: url("@icon.folder@ProjectWizard/template_select.png");
}

#RadioButton {
  color: #54AE6C;
}

#RadioButton::indicator {
  width: 12px;
  height: 12px;
}

#RadioButton:disabled {
  color: rgb(177, 177, 177);
}

#UniWizard_OperateSpace_Create {
  border: none;
  color: #4EAB57;
  font-family: "FZLTXHK--GBK1-0", "Microsoft YaHei UI", "Consolas";
}

#UniWizard_OperateSpace_Create:disabled {
  color: #D7D7D7;
}

#UniWizard_OperateSpace_Refresh {
  border: none;
  color: #4EAB57;
  font-family: "FZLTXHK--GBK1-0", "Microsoft YaHei UI", "Consolas";
  font-size: 12px;
}

#UniWizard_OperateSpace_Refresh:disabled {
  color: #D7D7D7;
}

#QListView {
  background: #FFFEFA;
  border: 1px solid darkgray;
}
#QListView::item {
  padding: 5px 20px;
}
#QListView::item:selected, #QListView::item:hover {
  background-color: transparent;
}
</style>
