<template>
  <q-view layout="vbox">
    <q-view layout="hbox">
      <q-label :openExternalLinks="true"
               text="更优惠的服务器，更快访问速度。<a style='color:#54AE6C; font-size: 12px;' href='https://uniapp.dcloud.io/uniCloud/hosting'>[了解更多]</a>"
               id="label--secondary"></q-label>
    </q-view>
    <q-view layout="hbox">
      <q-label :text="`选择上传的目录：${uploadDirPath}`" id="label"></q-label>
    </q-view>
    <q-view layout="hbox">
      <q-checkbox text="重新编译uni-app" id="HXCheckBox" :enabled="enableBuildApp" :checked='buildUniApp'
                  @clicked="onBuildAppCheckBoxChange"></q-checkbox>
    </q-view>
    <q-view layout="hbox">
      <q-label text="云服务空间列表" id="label"></q-label>
      <q-view horizontal-size-policy='Expanding'></q-view>
      <q-view layout="hbox">
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-button id="btn" text="新增" icon='@icon.folder@unicloud_add.png'
                  @clicked="redirectUniCloudConsole"></q-button>
        <q-button id="btn" text="刷新" icon='@icon.folder@unicloud_refresh.png' @clicked="refresh"></q-button>
      </q-view>
    </q-view>
    <q-list-view id="list" @currentRowChanged="currentRowChanged">
      <q-list-item layout="hbox" v-for="space in spaces">
        <q-radio id='checkBox' :enabled='false' :checked='space.selected'></q-radio>
        <q-label :text="space.spaceName" id="list__label" :toolTip="space.spaceName"
                 :style="{color: space.selected ? '#4EAB57': '#405E42'}"></q-label>
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-label :text="space.openedHosting ? '已开通前端网页托管': '未开通前端网页托管'" id="list__label"
                 :style="{color: space.selected ? '#4EAB57': '#405E42'}"></q-label>
        <q-view layout="hbox" style="min-width: 50px">
          <q-label v-if="!space.openedHosting" :openExternalLinks="true" style="text-align: right;"
                   :text="`<a style='color:#54AE6C; font-size: 12px;' href='https://unicloud.dcloud.net.cn/pages/web-host/web-host?pageid=${space.spaceId}'>去开通</a>`"
                   id="label--secondary"></q-label>
        </q-view>
        <q-view layout="hbox" style="min-width: 100px">
          <q-label :text="space.spaceProvider" id="list__label"
                   :style="{color: space.selected ? '#4EAB57': '#405E42'}"></q-label>
        </q-view>
      </q-list-item>
    </q-list-view>
  </q-view>
</template>

<script>
const hx = require('hbuilderx')
const path = require('path')
const url = require('url')

const providerMap = {
  tcb: '腾讯云',
  aliyun: '阿里云',
  alipay: '支付宝云'
}
export default {
  data () {
    return {
      uploadDirPath: '',
      spaces: [],
      isLoading: true,
      buildUniApp: false,
      enableBuildApp: false,
      allBindSpaces: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getSpaceServices().then(() => {
        this.setDefaultSelected()
      })
    })
  },
  methods: {
    async setDefaultSelected () {
      if (!this.allBindSpaces || this.allBindSpaces.length <= 0) return

      const [space] = this.allBindSpaces

      const spaceIndex = this.spaces.findIndex(item => item.spaceId === space.spaceId)
      if (spaceIndex > -1) {
        this.spaces.forEach((item, index) => {
          item.selected = index === spaceIndex
        })
        await this.updateUi()
      }
    },
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
    async refresh () {
      if (this.isLoading) return

      this.spaces = []
      await this.updateUi()

      this.$nextTick(() => {
        this.getSpaceServices()
      })
    },
    async getSpaceServices () {
      this.isLoading = true
      await this.updateUi()

      const res = await hx.http.request({
        url: 'https://ide.liuyingyong.cn/serverless/space/list-all',
        method: 'post',
        connectionTimeout: 10000,
        readTimeout: 30000,
        serviceOptions: {
          serviceRequest: true,
          body: {
            provider: '',
            appid: this.appid
          }
        }
      })

      if (res.service && res.service.code === 1001 && res.service.body.spaces) {
        this.spaces = res.service.body.spaces.filter(item => item.status.toLowerCase() === 'normal').map(item => {
          return {
            spaceId: item.id,
            spaceName: item.name,
            spaceProvider: providerMap[item.provider] + (item.isActor ? '(协作)' : ''),
            openedHosting: item.haveHostingService,
            selected: false,
            provider: item.provider
          }
        })
      }

      this.isLoading = false
      this.updateUi()
    },
    currentRowChanged (e) {
      const { currentRow } = e.target

      // 单选
      this.spaces.forEach((item, index) => {
        if (index !== currentRow) {
          item.selected = false
        }
      })

      this.spaces[currentRow].selected = !this.spaces[currentRow].selected
      this.updateUi()
    },
    onBuildAppCheckBoxChange (e) {
      this.buildUniApp = e.target.checked
      this.updateUi()
    }
  }
}
</script>

<style lang="qss">
#btn {
  border: none;
  color: #4EAB57;
}

#label {
  font-size: 13px;
  color: #405E42;
}

#label--secondary {
  font-size: 12px;
  color: #cccccc;
}

#list {
  background: #FFFEFA;
  border: 1px solid darkgray;
}

#list::item {
  padding: 5px 20px;
}

#list::item:selected, #list::item:hover {
  background-color: transparent;
}

#list::item #list__label {
  font-size: 14px;
}

#checkBox::indicator::unchecked {
  image: url("");
}

#checkBox::indicator::checked {
  image: url("@icon.folder@ProjectWizard/template_select.png");
}


#HXCheckBox {
  font-size: 12px;
  color: #cccccc;
}
#HXCheckBox::indicator::unchecked{
  image:url(:/hxui/resource/chbx.png);
}

#HXCheckBox::indicator::unchecked:hover{
  image:url(:/hxui/resource/chbx-hover.png);
}

#HXCheckBox::indicator::checked{
  image:url(:/hxui/resource/chbx-checked.png);
}

#HXCheckBox::indicator::checked:disabled{
  image:url(:/hxui/resource/chbx-checked-disable.png);
}

#HXCheckBox::indicator::unchecked:pressed,
#HXCheckBox::indicator::checked:pressed{
  image:url(:/hxui/resource/chbx-pressed.png);
}

#HXCheckBox::indicator:disabled{
  image:url(:/hxui/resource/chbx.png);
}
</style>
