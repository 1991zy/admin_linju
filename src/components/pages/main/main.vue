<template>
  <div>

    <Naver></Naver>
    <keep-alive>
      <div class="content" :style='"margin-left:" + (isCollapse? "64" : "200") +"px;"'>
        <Top :isCollapse='isCollapse' ></Top>
        <div class="main" :style='"min-height:" + screenHeight +"px;"'>
          <router-view></router-view>
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
  import Naver from '@/components/common/naver/naver.vue'
  import Top from '@/components/common/top/top.vue'
  export default {
    data () {
      return {
        screenHeight: ''
      }
    },
    computed: {
      isCollapse () {
        return this.$store.state.isCollapse
      }
    },
    created () {
      let that = this
      this.screenHeight = document.body.offsetHeight - 100
      if (document.body.offsetWidth < 1200) {
        if (that.isCollapse === false) {
          that.$store.commit('changeCollapse', true)
        }
      }
      if (document.body.offsetWidth > 1200) {
        if (that.isCollapse === true) {
          that.$store.commit('changeCollapse', false)
        }
      }
    },
    mounted () {
      let that = this
      window.onresize = () => {
        that.screenHeight = document.body.offsetHeight - 100
        if (document.body.offsetWidth < 1200) {
          if (that.isCollapse === false) {
            that.$store.commit('changeCollapse', true)
          }
        }
        if (document.body.offsetWidth > 1200) {
          if (that.isCollapse === true) {
            that.$store.commit('changeCollapse', false)
          }
        }
      }
    },
    methods: {
    },
    components: {
      Naver,
      Top
    }
  }
</script>

<style lang="scss" scoped>
.content{
  transition: all 0.3s;
  position: relative;
  margin-left: 200px;
  padding-top: 60px;
  background-color: #e0e3ea;
  overflow: hidden;
  .main{
    margin: 20px;
    background-color: #fff;
  }
}

</style>
