<template>
  <q-view layout="vbox">
    <q-list-view id="list" currentIndex="-1" @currentRowChanged="currentRowChanged">
      <q-list-item layout='hbox' v-for="(item, i) in collections" :key="item.collectionName">
        <q-checkbox
          id='QCheckBox'
          :checked="item.selected"
          :text="item.collectionName"
          :style="{color: item.selected ? '#4EAB57': '#405E42'}"
          @clicked="currentRowChanged(i, 'clicked')"
        ></q-checkbox>
        <q-view horizontal-size-policy='Expanding'></q-view>
      </q-list-item>
    </q-list-view>

    <q-checkbox id="selectAll" :checked="selectAllRadio" @clicked="selectAll" text="全选" style="color: #405E42;"></q-checkbox>
  </q-view>
</template>

<script>
export default {
  data () {
    return {
      workspaceFolder: {},
      collections: [],
      selectAllRadio: false
    }
  },
  methods: {
    async currentRowChanged (e, type) {
      let currentRow = type === 'clicked' ? e: e.target.currentRow

      this.collections[currentRow].selected = !this.collections[currentRow].selected

      const noSelectedList = this.collections.filter(item => !item.selected)

      this.selectAllRadio = !noSelectedList.length

      await this.updateUi()
    },
    async selectAll () {
      this.selectAllRadio = !this.selectAllRadio
      this.collections = this.collections.map(item => {
        item.selected = this.selectAllRadio
        return item
      })
      await this.updateUi()
    }
  }
}
</script>

<style lang="qss">
* {
  font-size: 12px;
  color: #54AE6C;
}

#QCheckBox::indicator::unchecked {
  image: url("");
}

#QCheckBox::indicator::checked {
  image: url("@icon.folder@ProjectWizard/template_select.png");
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
</style>
