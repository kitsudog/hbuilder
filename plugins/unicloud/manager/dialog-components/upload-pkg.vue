<template>
  <q-view layout="vbox">
    <q-view layout="hbox">
      <q-label text="注：目前仅支持阿里云云服务空间" id="label"></q-label>
      <q-view horizontal-size-policy='Expanding'></q-view>
      <q-view layout="hbox">
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-button id="btn" text="新增" icon='@icon.folder@unicloud_add.png' @clicked="redirectUniCloudConsole"></q-button>
        <q-button id="btn" text="刷新" icon='@icon.folder@unicloud_refresh.png' @clicked="refresh"></q-button>
      </q-view>
    </q-view>
    <q-list-view id="list" @currentRowChanged="currentRowChanged">
      <q-list-item layout="hbox" v-for="space in spaces">
        <q-radio id='checkBox' :enabled='false' :checked='space.selected'></q-radio>
        <q-label :text="space.spaceName" :toolTip="space.spaceName" id="list__label" :style="{color: space.selected ? '#4EAB57': '#405E42'}"></q-label>
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-label :text="space.spaceProvider" id="list__label" :style="{color: space.selected ? '#4EAB57': '#405E42'}"></q-label>
      </q-list-item>
    </q-list-view>
  </q-view>
</template>

<script>
const hx = require('hbuilderx')
const url = require('url')

export default {
  data () {
    return {
      appid: "",
      spaces: [],
      isLoading: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getSpaceServices()
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
        url: 'https://ide.liuyingyong.cn/serverless/space/list',
        method: 'post',
        connectionTimeout: 10000,
        readTimeout: 30000,
        serviceOptions: {
          serviceRequest: true,
          body: {
            provider: 'aliyun',
            appid: this.appid
          }
        }
      })

      if (res.service && res.service.code === 1001 && res.service.body.spaces) {
        this.spaces = res.service.body.spaces.filter(item => item.status.toLowerCase() === 'normal').map(item => {
          return {
            spaceId: item.id,
            spaceName: item.name,
            spaceProvider: '阿里云' + (item.isActor ? '(协作)': ''),
            selected: false
          }
        })
      }

      this.isLoading = false
      this.updateUi()
    },
    currentRowChanged (e) {
      const {currentRow} = e.target

      // 单选
      this.spaces.forEach((item, index) => {
        if (index !== currentRow) {
          item.selected = false
        }
      })

      this.spaces[currentRow].selected = !this.spaces[currentRow].selected
      this.updateUi()
    }
  }
}
</script>

<style lang="qss">
* {
  font-size: 12px;
}
#btn {
  border: none;
  color: #4EAB57;
}
#label {
  color: #405E42;
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

#checkBox::indicator::unchecked {
  image: url("");
}

#checkBox::indicator::checked {
  image: url("@icon.folder@ProjectWizard/template_select.png");
}
</style>
