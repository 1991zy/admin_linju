<template>
  <div class="naver" :style='"width:" + (isCollapse? "64" : "200") +"px;"'>
    <div class="bg" :style='"width:" + (isCollapse? "64" : "200") +"px;"'></div>
    <div class="tac"  >

      <div class="logo" @click="changeisCollapse">
        客来云
      </div>
      <el-menu
        :unique-opened=true
        :default-active="navselected"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#3f3f3f"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
        <el-menu-item index="main">
          <i class="icon iconfont icon-31shouye"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="Demo">
          <!--<i class="el-icon-sold-out"></i>-->
          <i class="icon iconfont icon-prompt_fill"></i>
          <span slot="title">Demo</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="icon iconfont icon-dianpu"></i>
            <span>门店</span>
          </template>
          <el-menu-item index="1-1">门店配置</el-menu-item>
          <el-menu-item index="1-2">门店</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="icon iconfont icon-canting"></i>
          <span slot="title">餐桌</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="icon iconfont icon-tuikuantuihuo"></i>
          <span slot="title">财务</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="icon iconfont icon-rankfill"></i>
          <span slot="title">数据</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="icon iconfont icon-wangfandijia"></i>
          <span slot="title">对接</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="icon iconfont icon-presentfill"></i>
          <span slot="title">营销</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navselected: 'main'
      }
    },
    computed: {
      isCollapse () {
        return this.$store.state.isCollapse
      }
    },
    created() {
      console.log(document.URL)
    },
    mounted() {},
    methods: {
      getNavType () {
        this.navselected = this.$store.state.adminleftnavnum
      },
      changeisCollapse () {
        this.$store.commit('changeCollapse')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    },
    watch: {
      // 监测store.state
      '$store.state.adminleftnavnum': 'getNavType'
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    transition: width 0.3s;
  }
  .naver{
    width: 200px;
    transition: width 0.3s;
    position: fixed;
    left: 0;
    z-index: 1000;
    .logo{
      cursor: pointer;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      height: 60px;
      z-index: 1000;
    }
  }
  .naver .tac{
    z-index: 1000;
  }

  .naver .bg{
    z-index: -1;
    width: 200px;
    display: block;
    transition: width 0.3s;
    height: 10000px;
    position: fixed;
    background-color: #3f3f3f;
    left: 0;
    top: 0;
  }
</style>
