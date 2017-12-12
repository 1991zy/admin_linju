<template>
  <div class="storeInformation">

    <div class="storeInformation-tab">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-row :gutter="20">
            <el-col :lg="6" style="padding-left:0 !important;">
              <div class="grid-content bg-purple">
                <router-link to="/addStore">
                  <div class="storeInformation-tab-add">
                    <p><img src="../../../../assets/img/iconjia.png" alt="">添加门店</p>
                  </div>
                </router-link>
              </div>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6" v-for="item in 9" :key="item.id">
              <div class="grid-content bg-purple">
                <el-row :gutter="20">
                  <div class="storeInformation-list-box">
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <div class="storeInformation-img">
                          <img src="../../../../assets/img/shop-logo.png" alt="">
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="19">
                      <div class="grid-content bg-purple">
                        <div class="storeInformation-list">
                          <p>隆江猪脚饭  （<i>龙华店</i>）</p>
                          <p>状态：<i>营业中</i></p>
                          <p>模式：<i>桌台模式</i></p>
                          <el-button size="mini">编辑</el-button>
                          <el-button size="mini">删除</el-button>
                        </div>
                      </div>
                    </el-col>
                  </div>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {},
    components: {}
  }
</script>

<style lang="scss">
  .storeInformation {
    padding: 20px;
  }

  .compile {
    border: 1px solid #ff8400 !important;
  }

  .compile span {
    color: #ff9740 !important;
  }

  .storeInformation-tab-add {
    min-height: 134px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    border: 1px solid #dedfe0;
  }

  .storeInformation-img {
    width: 68px;
    margin-top: 20px;
    height: 68px;
  }

  .storeInformation-img img {
    width: 100%;
  }

  .storeInformation-tab-add p {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    color: #999999;
    left: 50%;

  }

  .storeInformation-tab-add p img {
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;

    /*display: block;*/
  }

  .storeInformation-list-box {
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dedfe0;
    width: 97%;
    padding: 4% 0;
    margin-bottom: 10px;
    min-height: 134px;
    overflow: hidden;
  }

  .storeInformation-list {
    padding-left: 20px;
  }

  .storeInformation-list p:first-child {
    color: #333333;
    font-size: 14px;

  }

  .storeInformation-list p {
    color: #999999;
    display: block;
    line-height: 26px;
    font-size: 14px;
  }

</style>
