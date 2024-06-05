<template>
  <q-view layout="vbox">
    <q-view layout="hbox" v-if="!openedHosting" style="min-height: 50px;">
      <q-view horizontal-size-policy='Expanding'></q-view>
      <q-label
        :openExternalLinks="true"
        text="当前云服务空间还没有开通【前端网页托管】，请先前往<a href='https://unicloud.dcloud.net.cn/pages/web-host/web-host?pageid=mp-7922d6e6-2831-456c-95d8-27c697e93c15' style='color:#54AE6C; font-size: 12px;'>web控制台</a>开通，完成开通后可"
      ></q-label>
      <q-label @clicked="refresh" style="color:#54AE6C; font-size: 12px; cursor: pointer" text="点此刷新"></q-label>
      <q-view horizontal-size-policy='Expanding'></q-view>
    </q-view>
    <q-view layout="hbox" v-else>
      <q-view layout="vbox" style="min-width: 260px;">
        <q-list-view id="spaceList" @currentRowChanged="currentRowChanged">
          <q-list-item v-for="space in spaces">
            <q-label id="text" :text="`[${space.spaceProvider}] ${space.spaceName}`" :style="{color: space.selected ? '#4EAB57': '#333333'}"></q-label>
          </q-list-item>
        </q-list-view>
      </q-view>
      <q-view layout='hbox' layout-spacing="0">
        <q-scroll-view id="navigationScrollView" layout="vbox">
          <q-table id='WebDeployTableView' gridStyle='NoPen' sortingEnabled='true'>
            <q-th>
              <q-td text='名称'></q-td>
              <q-td text='修改日期'></q-td>
              <q-td text='类型'></q-td>
              <q-td text='大小'></q-td>
            </q-th>
            <q-tr v-for="file in files" :key="file.name">
              <q-td :sort='file.name'>
                <q-label :text="file.name"></q-label>
              </q-td>
              <q-td :sort="file.isFile ? file.date: 'x'">
                <q-label :text="file.date"></q-label>
              </q-td>
              <q-td :sort='file.type'>
                <q-label :text="file.type"></q-label>
              </q-td>
              <q-td :sort="file.isFile ? file.size: 'x'">
                <q-label :text="file.size"></q-label>
              </q-td>
            </q-tr>
          </q-table>
        </q-scroll-view>
      </q-view>
    </q-view>
    <q-view vertical-size-policy='Expanding'></q-view>
  </q-view>
</template>

<script>
const hx = require('hbuilderx')
const path = require('path')

const providerMap = {
  tcb: '腾讯云',
  aliyun: '阿里云',
  alipay: '支付宝云'
}
  export default {
    data () {
      return {
        spaceServiceLoading: false,
        openedHosting: true,
        spaces: [],
        files: []
      }
    },
    mounted () {
      console.log('mounted')
      this.$nextTick(() => {
        this.getSpaceServices()
        this.getWebHostFiles('aliyun', 'mp-f1955e21-4858-495a-8284-c476b04ceb03', '/')
      })
    },
    methods: {
      async getSpaceServices () {
        this.spaceServiceLoading = true
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
              spaceProvider: providerMap[item.provider] + (item.isActor ? '(协作)': ''),
              openedHosting: item.haveHostingService,
              selected: false,
              provider: item.provider
            }
          })
        }

        this.spaceServiceLoading = false
        this.updateUi()
      },
      async currentRowChanged (e) {
        const {currentRow} = e.target

        // 单选
        this.spaces.forEach((item, index) => {
          if (index !== currentRow) {
            item.selected = false
          }
        })

        this.spaces[currentRow].selected = !this.spaces[currentRow].selected
        await this.updateUi()

        console.log('loadSpaceWebHost', this.spaces[currentRow])
      },
      async refresh () {
        if (this.spaceServiceLoading) return

        this.spaces = []
        await this.updateUi()

        this.$nextTick(() => {
          this.getSpaceServices()
        })
      },
      async getWebHostFiles (provider, spaceId, prefix = '') {
        const params = {
          provider,
          spaceId,
          path: prefix
        }

        // 进入文件夹查询第一页时此字段需要与path一致，当翻页时，该参数为上一页结尾的文件（此时文件列表有返回，字段为：nextMarker）
        if (provider === 'tcb') {
          prefix = prefix.replace(/^\//, '')
          params.path = prefix
          params.marker = prefix
        }

        const res = await hx.http.request({
          url: 'https://ide.liuyingyong.cn/serverless/host/file-list',
          method: 'post',
          connectionTimeout: 10000,
          readTimeout: 30000,
          serviceOptions: {
            serviceRequest: true,
            body: params
          }
        })
        console.log(res, 'res')

        if (res.service && res.service.code !== 1001) {
          return hx.window.showErrorMessage(res.service.description || '获取文件列表失败')
        }

        const {directories, files} = res.service.body
        const list = []

        directories.forEach(item => {
          list.push({
            name: path.relative(prefix.replace(/^\//, ''), item.prefix),
            type: '文件夹',
            size: null,
            date: null,
            isFile: false
          })
        })

        files.forEach(item => {
          const extname = path.extname(item.name)?.substring(1)
          list.push({
            name: item.name,
            type: extname ? extname.toLowerCase() + '文件' : '文件',
            size: item.size,
            date: item.updated_at,
            isFile: true
          })
        })

        console.log(list)
        this.files = list
        this.$nextTick(() => {
          this.updateUi()
        })
      }
    }
  }
</script>

<style lang="qss">
#spaceList {
  border: 0;
  background-color: @editor.background@;
}

#spaceList::item {
  padding: 5px;
}

#spaceList::item #text {
  color: #333;
  font-size: 12px;
}

#spaceList::item:selected, #spaceList::item:hover {
  background-color: @list.hoverBackground@;
}

#WebDeployTableView {
  border: none;
}
</style>
