<template>
  <div>
    <el-button @click="login">{{msg}}</el-button>
  </div>
</template>

<script>
  import api from '@/store/api/http'

  export default {
    name: 'login',
    data () {
      return {
        msg: 'login'
      }
    },
    methods: {
      login () {
        // api.tologin((res) => {
        //   console.log(res)
        // }, {'app': '6666666'})
        // this.$store.dispatch('alert', {'app': '6666666'})
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped>

</style>
