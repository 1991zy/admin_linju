<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss'; //初始化css默认样式
@import './assets/scss/const.scss'; //定义全局css变量
@import './assets/scss/base.scss'; //覆盖默认样式
@import './assets/scss/table.scss'; //覆盖表格默认样式
</style>
