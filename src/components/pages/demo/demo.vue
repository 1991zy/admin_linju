<template>
  <div>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="餐桌详细" :visible.sync="dialogTableVisible">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-table :data="gridData"
                    style="width: 100%"
          >
            <el-table-column align="center" property="date" label="日期" :min-width="150"></el-table-column>
            <el-table-column align="center" property="name" label="姓名" :min-width="140"></el-table-column>
            <el-table-column align="center" property="address" label="地址" :min-width="160"></el-table-column>
            <el-table-column align="center" label="操作" :min-width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
          <div class="btn">

            <el-button size="small" type="primary">主要按钮</el-button>
            <el-button size="small">默认按钮</el-button>


          </div>

        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>


    </el-dialog>

    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="300px">
      <div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    props: ['isCollapse'],
    created () {
      this.$store.commit('changeAdminleftnavnum', 'Demo')
    },
    mounted () {},
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleClick (tab, event) {
        console.log(tab, event)
      },
      onSubmit () {
        console.log('submit!')
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>


</style>
