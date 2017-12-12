<template>
  <div class="addStore">

    <div class="addStore-title">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple position-height">添加门店</div>
        </el-col>
      </el-row>
    </div>

    <div class="addStore-from">

      <el-row :gutter="20">
        <el-col :xl="10" :lg="16" :sm="24" :xs="24"><div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="门店名称">
              <el-input v-model="form.name" placeholder="输入门店名称，15个汉字或30个英文字符内"></el-input>
              <p>(仅为商户名，如：国美、麦当劳，不应包含地区、地址、分店名等信息，错误示例：北京国美)</p>
            </el-form-item>
            <el-form-item label="分店名称">
              <el-input v-model="form.name" placeholder="输入分店名称，20个字以内"></el-input>
              <p>(不应包含地区信息，不应与门店名有重复，错误示例：北京王府井店)</p>
            </el-form-item>

            <el-form-item label="餐饮行业">
              <el-select v-model="form.region" placeholder="选择菜系">
                <el-option label="粤菜" value="shanghai"></el-option>
                <el-option label="湘菜" value="beijing"></el-option>
                <el-option label="海南菜" value="nanchang"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在地区">
              <el-cascader
                :options="options2"
                @active-item-change="handleItemChange"
                :props="props"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="form.name" placeholder="输入详细地址"></el-input>
              <p>(不要填写省市信息)</p>
            </el-form-item>

            <el-form-item label="详细地址">
              <el-input placeholder="请输入内容"  class="input-with-select">
                <el-button slot="append" plain>搜索</el-button>
              </el-input>
            </el-form-item>


            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>

          </el-form>


        </div></el-col>
      </el-row>










    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {

        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }

      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handleItemChange (val) {
        console.log('active item:', val)
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }]
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }]
          }
        }, 300)
      }
    },
    components: {}
  }
</script>


<style lang="scss">
  .addStore-title {
    padding-left: 20px;
    border-bottom: 1px solid #dedfe0;
  }

  .position-height {
    display: flex;
    min-height: 36px !important;
    justify-content: left;
    font-size: 14px;
    align-items: center;
  }

  .addStore-from {
    padding: 20px;
    overflow: hidden;
  }
  .addStore-from p{
    font-size:14px;
    color: #999999;
  }
</style>
