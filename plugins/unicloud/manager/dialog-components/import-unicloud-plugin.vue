<template>
  <q-view layout="vbox">
    <q-view layout="hbox">
      <q-label :text="`插件名称：${pluginInfo.name}`"></q-label>
      <q-label :text="`插件版本：${pluginInfo.version}`"></q-label>
    </q-view>
    <q-view layout="hbox">
      <q-label :text="`插件大小：${pluginInfo.size}`"></q-label>
    </q-view>
    <q-group-box layout="vbox" title="项目列表">
    <q-list-view id="QListView" :currentIndex="currentIndex" @currentRowChanged="currentRowChanged">
      <q-list-item layout="hbox" v-for="workspaceFolder in workspaceFolders">
        <q-radio id='QRadio' :enabled='false' :checked='workspaceFolder.selected'></q-radio>
        <q-label :text="workspaceFolder.name" id="list__label" :toolTip="workspaceFolder.name"
                 :style="{color: workspaceFolder.selected ? '#4EAB57': '#405E42'}"></q-label>
        <q-view horizontal-size-policy='Expanding'></q-view>
        <q-view layout="hbox">
          <q-label
            :text="workspaceFolder[selectedProvider] ? `${workspaceFolder[selectedProvider].spaceName}(${workspaceFolder[selectedProvider].providerName})`: ''"
            id="list__label"
            :style="{color: workspaceFolder.selected ? '#4EAB57': '#405E42'}"></q-label>
        </q-view>
      </q-list-item>
    </q-list-view>
    </q-group-box>
    <q-radio-group layout="hbox">
      <q-radio
        text="支付宝云"
        id="HXRadioButton"
        v-if="pluginInfo.platforms.includes('alipay')"
        :checked="selectedProvider === 'alipay'"
        @clicked="switchSpaceProvider('alipay')"
      ></q-radio>
      <q-radio
        text="阿里云"
        id="HXRadioButton"
        v-if="pluginInfo.platforms.includes('aliyun')"
        :checked="selectedProvider === 'aliyun'"
        @clicked="switchSpaceProvider('aliyun')"
      ></q-radio>
      <q-radio
        text="腾讯云"
        id="HXRadioButton"
        v-if="pluginInfo.platforms.includes('tcb')"
        :checked="selectedProvider === 'tcb'"
        @clicked="switchSpaceProvider('tcb')"
      ></q-radio>
      <q-view horizontal-size-policy='Expanding'></q-view>
    </q-radio-group>
  </q-view>
</template>

<script>
const hx = require('hbuilderx')
const fs = require('fs')
const path = require('path')

export default {
  data () {
    return {
      currentIndex: -1,
      pluginInfo: {},
      selectedProvider: null,
      workspaceFolders: []
    }
  },
  mounted () {
    this.selectedProvider = this.pluginInfo.platforms[0]

    this.switchSpaceProvider(this.selectedProvider)

    this.updateUi()
  },
  methods: {
    async switchSpaceProvider (provider) {
      if (!provider) return

      this.selectedProvider = provider
      this.currentIndex = -1

      this.workspaceFolders.forEach((item) => {
        if (item.selected) {
          item.selected = false
        }
      })

      await this.updateUi()
    },
    async currentRowChanged (e) {
      const {currentRow} = e.target

      // 单选
      this.workspaceFolders.forEach((item, index) => {
        if (index !== currentRow) {
          item.selected = false
        }
      })

      this.workspaceFolders[currentRow].selected = !this.workspaceFolders[currentRow].selected
      await this.updateUi()
    }
  }
}
</script>

<style scoped lang="qss">
* {
  font-family: "Microsoft YaHei UI", "Menlo", "Consolas";
  font-size: 12px;
  color: #405E42;
}

#QListView {
  background: #FFFEFA;
  border: none;
  margin-bottom: 1px;
}
#QListView::item {
  padding: 5px 20px;
}
#QListView::item:selected, #QListView::item:hover {
  background-color: transparent;
}

#QRadio::indicator::unchecked {
  image: url("");
}

#QRadio::indicator::checked {
  image: url("@icon.folder@ProjectWizard/template_select.png");
}

#HXRadioButton{
  font-size: 12px;
  color: #405E42;
}
#HXRadioButton::indicator::unchecked{
  image:url(:/hxui/resource/rdbt.png);
}

#HXRadioButton::indicator::unchecked:hover{
  image:url(:/hxui/resource/rdbt-hover.png);
}

#HXRadioButton::indicator::checked{
  image:url(:/hxui/resource/rdbt-checked.png);
}

#HXRadioButton::indicator::unchecked:pressed,
#HXRadioButton::indicator::checked:pressed{
  image:url(:/hxui/resource/rdbt-pressed.png);
}

#HXRadioButton::indicator:disabled{
  image:url(:/hxui/resource/rdbt.png);
}
#HXRadioButton::indicator:checked:disabled{
  image:url(:/hxui/resource/rdbt-check-disabled.png);
}
</style>
