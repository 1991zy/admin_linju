<template>
  <div class="top" :style='"padding-left:" + (isCollapse? "64" : "200") +"px;"'>
    <div @click="changeisCollapse" :class='"refresh el-icon-menu"+(isCollapse?" active":"")'></div>
    <div class="user">
      用户中心
      <i class="el-icon-more"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['isCollapse'],
  created() {},
  mounted() {},
  methods: {
    changeisCollapse () {
      this.$store.commit('changeCollapse')
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  .top{
    transition: all 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 3px 8px rgba(0,0,0,0.1);
    z-index: 999;
    .refresh{
      cursor: pointer;
      height: 60px;
      width: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 30px;
      float: left;
      transition: 0.5s all;
      &.active{
        transform: rotate(180deg);
      }
    }
    .user{
      cursor: pointer;
      padding-right: 20px;
      float: right;
      height: 60px;
      line-height: 60px;
    }
  }
    
</style>
