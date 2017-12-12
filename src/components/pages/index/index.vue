<template>
  <div>
    <div class="index-top-box">
      <div class="stores-quick-data-tables">
        <div class="stores-information-all">
          <router-link to="/storeInformation">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>门店信息</span>
                </div>
                <el-row :gutter="16">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <a href="" style="width: 68px; height: 68px;border-radius:50%;display: block">
                        <img src="../../../../src/assets/img/shop-logo.png" alt="">
                      </a>
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="grid-content bg-purple message-text">
                      <strong>隆江猪脚饭(<span>龙华店</span>)</strong>
                      <p><span>状态:</span><span>营业中</span></p>
                      <p><span>模式:</span><span>台桌模式</span></p>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </router-link>
          <!-- 门店信息 -->
        </div>
        <div class="quick-function-all">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>快捷功能</span>
              </div>
              <el-row :gutter="16">
                <el-col :span="8">
                  <div class="grid-content bg-purple call-out quick-function-list">
                    <i><img src="../../../../src/assets/img/jiaohao.png" alt=""></i>
                    <span>叫号</span>
                  </div>
                </el-col>
                <el-col :span="8">

                  <div class="grid-content bg-purple reservation-kiss quick-function-list">
                    <i><img src="../../../../src/assets/img/kaiguan.png" alt=""></i>
                    <span>预订</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple switch-stores quick-function-list">
                    <i><img src="../../../../src/assets/img/yuding.png" alt=""></i>
                    <span>开关店</span>
                  </div>
                </el-col>
              </el-row>
            </el-card>

          </div>
        </div>
        <div class="data-tables-all">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>桌台数据</span>
              </div>
              <el-row :gutter="16">
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">18</i>
                    <p>开桌数</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">10</i>
                    <p>空闲数</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">8</i>
                    <p>点餐桌数</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">10</i>
                    <p>待点餐桌数</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">10</i>
                    <p>待结账</p>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple call-out-border quick-function-list">
                    <i class="settle-accounts">120</i>
                    <p>已结账</p>
                  </div>
                </el-col>

              </el-row>
            </el-card>
          </div>
        </div>
      </div>
    </div>


    <div class="index-list-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>桌台模式</span>
          <el-button style="float: right; padding: 3px 0" type="text">全屏显示</el-button>
        </div>
        <div class="text item">

          <div class="location-left">
            <div class="grid-content bg-purple">
              <div class="index-location-type location-margin">
                <span>所在位置：</span>
                <span>全部</span>
                <span><i>大堂</i><i>雅香阁</i><i>南海阁</i></span>
              </div>
              <div class="index-location-type location-margin">
                <span>桌台类型：</span>
                <span>全部</span>
                <span><i>2人桌</i><i>4人桌</i><i>8人桌</i></span>
              </div>
              <div class="index-location-type">
                <span>所在位置：</span>
                <span>全部(<small>36</small>)</span>
                <span><i>空闲(<small>10</small>)</i><i>开桌(<small>18</small>)</i><i>预订</i></span>
              </div>
            </div>
          </div>
          <div class="location-right">
            <div class="grid-content bg-purple">
              <el-input placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>

          <div class="index-lists-content">

            <div class="index-lists-content-box " v-for="item in 22" :key="item.id" @click="outerVisible = true">
              <div class="reservation-bg">
                <div class="content-box">
                  <h2>101桌</h2>
                </div>
                <div class="content-span">
                  <span>大堂</span>
                  <span><i>4</i>人桌</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </el-card>
    </div>

    <!--  1 开桌状态   -->
    <el-dialog title="105桌" :visible.sync="outerVisible" width="350px">


      <!--  2 查看进度  -->
      <el-dialog
        width="60%"
        title="点餐进度"
        :visible.sync="innerVisible"
        append-to-body>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="已点菜(10)" name="first">
            <el-table :data="gridData" style="width: 100%">
              <el-table-column align="center" property="date" label="菜品名称" :min-width="150"></el-table-column>
              <el-table-column align="center" property="name" label="数量" :min-width="150"></el-table-column>
              <el-table-column align="center" property="specification" label="规格" :min-width="150"></el-table-column>
              <el-table-column align="center" property="count" label="售价(元)" :min-width="150"></el-table-column>
              <el-table-column align="center" property="tableNumber" label="餐桌编号" :min-width="150"></el-table-column>
              <el-table-column align="center" property="operatingPersonnel" label="操作人员"
                               :min-width="150"></el-table-column>
              <el-table-column align="center" label="操作" :min-width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">赠菜
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
              <el-button size="small" type="primary">加菜</el-button>
              <el-button size="small">结账</el-button>
            </div>

          </el-tab-pane>
          <el-tab-pane label="已赠菜(2)" name="second">
            <el-table :data="gridData" style="width: 100%">
              <el-table-column align="center" property="date" label="菜品名称" :min-width="150"></el-table-column>
              <el-table-column align="center" property="name" label="数量" :min-width="150"></el-table-column>
              <el-table-column align="center" property="specification" label="规格" :min-width="150"></el-table-column>
              <el-table-column align="center" property="count" label="售价(元)" :min-width="150"></el-table-column>
              <el-table-column align="center" property="tableNumber" label="餐桌编号" :min-width="150"></el-table-column>
              <el-table-column align="center" property="operatingPersonnel" label="操作人员"
                               :min-width="150"></el-table-column>
              <el-table-column align="center" label="操作" :min-width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">取消赠菜
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
              <el-button size="small" type="primary">加菜</el-button>
              <el-button size="small">结账</el-button>
            </div>
          </el-tab-pane>

        </el-tabs>
      </el-dialog>
      <!--  2 查看进度 end -->


      <!--  3 点餐  -->
      <el-dialog
        width="77%"
        title="点菜详情"
        :visible.sync="orderDishes"
        append-to-body>
        <div class="orderDishes-all">
          <div class="orderDishes-all-top">
            <el-row :gutter="10">
              <el-col :xs="24" :sm="16" :xl="18" :lg="16">
                <div class="grid-content bg-purple">
                  <el-row :gutter="10">
                    <el-col :xs="14" :sm="14" :md="16" :lg="16" :xl="16">
                      <div class="grid-content bg-purple">
                        <el-col>
                          <div class="grid-content bg-purple">
                            <el-row :gutter="10">
                              <el-col :xs="8" :sm="6" :md="5" :lg="4" :xl="3">
                                <div class="grid-content bg-purple list-ul-title">
                                  <el-button class="button-color">全部</el-button>
                                </div>
                              </el-col>
                              <el-col :xs="8" :sm="6" :md="5" :lg="4" :xl="3" v-for="item in 19" :key="item.id">
                                <div class="grid-content bg-purple list-ul-title">
                                  <el-button>套餐</el-button>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                        </el-col>

                      </div>
                    </el-col>
                    <el-col :xs="10" :sm="10" :md="8" :lg="8" :xl="8" >
                      <div class="grid-content bg-purple">

                        <el-col>
                          <div class="grid-content bg-purple look-for-food" style="padding:0 !important; margin:0 !important;">
                            <el-input placeholder="请输入内容">
                              <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                          </div>
                        </el-col>

                      </div>
                    </el-col>

                  </el-row>
                </div>
                <div class="orderDishes-all-list">
                  <el-row :gutter="20">
                    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" v-for="item in 10" :key="item.id"
                    >
                      <div class="grid-content bg-purple orderDishes-all-list-box select" @click="innerListBox = true">
                        <div class="list-box-card">
                          <p>炭火干锅清江龙利鱼</p>
                          <p>¥ <i>149</i> / 份</p>
                          <p>套餐</p>
                          <i class="select-num">6</i>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="12">
                    <div class="grid-content bg-purple">
                      <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                      </el-pagination>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :xs="24" :sm="8" :xl="6" :lg="8" >
                <div class="grid-content bg-purple">
                  <div class="orderDishes-all-right">
                    <h2>已点菜</h2>
                    <div class="orderDishes-all-right-list">
                      <el-row class="right-list-title">
                        <el-col :span="8">
                          <div class="grid-content bg-purple">菜品</div>
                        </el-col>
                        <el-col :span="8">
                          <div class="grid-content bg-purple">数量</div>
                        </el-col>
                        <el-col :span="8">
                          <div class="grid-content bg-purple">售价</div>
                        </el-col>
                      </el-row>
                      <div class="orderDishes-all-right-list-content">
                        <div class="orderDishes-all-right-list-content-box" v-for="item in 6">
                          <el-col :span="8">
                            <div class="grid-content bg-purple">
                              土炉烧饼
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content bg-purple">
                              <template>
                                <el-input-number size="mini" style="width:80px;" v-model="num1" @change="handleChange"
                                                 :min="1" :max="10" label="描述文字"></el-input-number>
                              </template>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content bg-purple">¥159.00</div>
                          </el-col>

                          <el-row :gutter="20">
                            <el-col :span="24">
                              <div class="grid-content bg-purple">
                                <div class="remark-text">
                                  备注：大份,微辣,加多点肥肉
                                </div>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </div>
                      <div class="orderDishes-all-right-fixed">
                        <el-col :span="8">
                          <div class="grid-content bg-purple bold-total">总计</div>
                        </el-col>
                        <el-col :span="8">
                          <div class="grid-content bg-purple bold-total">3</div>
                        </el-col>
                        <el-col :span="8">
                          <div class="grid-content bg-purple bold-money">¥159.00</div>
                        </el-col>
                        <el-row :gutter="20">
                          <el-col :span="24">
                            <div class="grid-content bg-purple">
                              <el-button type="warning" class="fixed-btn">下单</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>

          </div>

        </div>

      </el-dialog>


      <!--4 菜品备注 -->
      <el-dialog
        width="25%"
        title="菜品备注"
        :visible.sync="innerListBox"
        append-to-body>
        <div class="food-note">
          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>菜品名称：</i></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple"><i>卤水猪脚</i></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>销售价格：</i></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple"><i>
                <small>¥</small>
                22.00</i></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>菜品规格：</i></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple">
                <el-button size="mini" class="button-color">大份</el-button>
                <el-button size="mini">中份</el-button>
                <el-button size="mini">小份</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>菜品规格：</i></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple">
                <el-button size="mini" class="button-color">微辣</el-button>
                <el-button size="mini">中辣</el-button>
                <el-button size="mini">加辣</el-button>
                <el-button size="mini">不辣</el-button>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>下单数量：</i></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple">
                <el-input-number size="mini" v-model="num7"></el-input-number>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="6" :sm="6" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"><i>其他备注：</i></div>
            </el-col>
            <el-col :xs="18" :sm="18" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" style="width:60%;float:left;">
                </el-input>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="20">
              <div class="grid-content bg-purple">
                <el-button size="medium" class="button-color">确定</el-button>
                <el-button size="medium">取消</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-dialog>

      <!--4 菜品备注 end-->


      <!-- 5  结账-->


      <el-dialog
        width="60%"
        title="105桌"
        :visible.sync="checkOut"
        append-to-body>
        <div class="check-out">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">

                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="菜品"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="数量"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="售价">
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-collapse accordion>
                  <el-collapse-item>
                    <template slot="title">
                      优惠方式
                    </template>

                    <div class="check-out-right">
                      <div class="check-out-right-box">
                        <p>折扣菜品类型：</p>
                        <template>
                          <el-row :gutter="20">
                            <el-col :span="24">
                              <div class="grid-content bg-purple">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                                             @change="handleCheckAllChange">
                                  全选
                                </el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                                </el-checkbox-group>
                              </div>
                            </el-col>
                          </el-row>
                        </template>
                      </div>
                      <div class="check-out-right-box">
                        <el-row>
                          <el-col :xs="8" :sm="4" :md="4" :lg="3" :xl="4">
                            <div class="grid-content bg-purple">折扣：</div>
                          </el-col>
                          <el-col :xs="8" :sm="16" :md="18" :lg="19" :xl="18">
                            <div class="grid-content bg-purple">
                              <el-input placeholder="请输入内容"></el-input>
                            </div>
                          </el-col>
                          <el-col :xs="8" :sm="4" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple">&nbsp;&nbsp;折</div>
                          </el-col>
                        </el-row>
                      </div>

                      <div class="check-out-right-box">
                        <el-row>
                          <el-col :xs="8" :sm="4" :md="4" :lg="3" :xl="4">
                            <div class="grid-content bg-purple">减免：</div>
                          </el-col>
                          <el-col :xs="8" :sm="16" :md="18" :lg="19" :xl="18">
                            <div class="grid-content bg-purple">
                              <el-input placeholder="请输入内容"></el-input>
                            </div>
                          </el-col>
                          <el-col :xs="8" :sm="4" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple">&nbsp;&nbsp;元</div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="check-out-right-box">
                        <i class="have-discount">已优惠</i>
                        <i class="have-money">
                          <small>¥</small>
                          20.00</i>
                      </div>
                      <div class="check-out-right-box">
                        <b class="have-discount">实付款</b>
                        <b class="have-money">
                          <small>¥</small>
                          185.00</b>
                      </div>

                    </div>


                  </el-collapse-item>
                </el-collapse>
                <div class="check-out-right-box" style="border-bottom:0;">
                  <p>支付方式</p>
                  <div class="check-out-payment">
                    <el-row :gutter="20">
                      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                        <div class="grid-content bg-purple">
                          <div class="payment-list payment-list-ico">
                            <img src="../../../../src/assets/img/xianzjin.png" alt="">
                            现金支付
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                        <div class="grid-content bg-purple">
                          <div class="payment-list">
                            <img src="../../../../src/assets/img/shaoma.png" alt="">
                            扫码支付
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                        <div class="grid-content bg-purple">
                          <div class="payment-list">
                            <img src="../../../../src/assets/img/weixin.png" alt="">
                            微信支付
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                        <div class="grid-content bg-purple">
                          <div class="payment-list">
                            <img src="../../../../src/assets/img/zhifbao.png" alt="">
                            支付宝支付
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
                        <div class="grid-content bg-purple">
                          <div class="payment-list">
                            <img src="../../../../src/assets/img/yinlian.png" alt="">
                            银联支付
                          </div>
                        </div>
                      </el-col>
                    </el-row>

                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <div class="check-out-footer">
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        总计
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        7
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        ¥205.00
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple check-out-click">结账</div>
              </el-col>
            </el-row>

          </div>

        </div>
      </el-dialog>

      <!-- 5  结账 end-->


      <!--  3 点餐 end -->
      <div class="popup-window-state">
        <div class="popup-window-state-title">
          <p>所在位置：（<i>大堂</i>）</p>
          <p>桌台类型：<i>4</i>人桌</p>
          <p>顾客人数：<i>3</i>人</p>
          <p>已点菜<i>5</i>个/已赠菜<i>2</i>个 <i>
            <img src="../../../../src/assets/img/caipu.png"
                 alt=""
                 @click="innerVisible = true">
          </i>
          </p>
          <p>售价：¥<i> 298.00</i>人</p>
        </div>
        <div class="popup-window-state-btn">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple ">
                <el-button type="warning" class="state-btn" @click="orderDishes = true">点菜</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button type="danger" class="state-btn">换桌</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button type="success" class="state-btn">打单</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button type="primary" class="state-btn" @click="checkOut = true">结账</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

    </el-dialog>
    <!--  1 开桌状态 end   -->

  </div>
</template>
<script>
  const cityOptions = ['主菜', '冷菜', '点心', '小吃', '酒水']
  export default {

    data () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        activeNames: [1],
        num1: 1,
        outerVisible: false,
        ListBox: false,
        innerListBox: false,
        innerVisible: false,
        checkOut: false,
        orderDishes: false,
        activeName: 'first',
        gridData: [{
          date: '2016-05-06',
          name: '张小虎',
          specification: '份',
          count: 3,
          tableNumber: 10,
          operatingPersonnel: '王二'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          specification: '份',
          count: 1,
          tableNumber: 20,
          operatingPersonnel: '貂蝉'
        }, {
          date: '2016-05-11',
          name: '李小虎',
          specification: '份',
          count: 9,
          tableNumber: 16,
          operatingPersonnel: '老K'
        }, {
          date: '2016-05-16',
          name: '江小二',
          specification: '份',
          count: 9,
          tableNumber: 16,
          operatingPersonnel: '在压降'
        }],
        tableData: [{
          date: '炭火干锅清江龙利鱼',
          name: 1,
          address: 159.00
        }, {
          date: '双色米糕',
          name: 1,
          address: 159.00
        }, {
          date: '口水鸡',
          name: 1,
          address: 159.00
        }, {
          date: '茶位费',
          name: 1,
          address: 159.00
        }],
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
    created () {
      this.$store.commit('changeAdminleftnavnum', 'main')
    },
    mounted () {
    },
    methods: {
      handleEdit (index, row) {

      },
      handleDelete (index, row) {

      },
      handleClick (tab, event) {
        console.log(tab, event)
      },
      handleChange (value) {

      },
      //   折扣菜品类型  handleCheckAllChange   handleCheckedCitiesChange
      handleCheckAllChange (val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>

  /*     弹窗    */
  .popup-window-state {
    width: 100%;
    min-height: 40px;
  }

  .popup-window-state-btn {
    padding-top: 20px;
    position: relative;
    z-index: 2;
  }

  .popup-window-state::after {
    content: '';
    width: calc(100%);
    height: calc(100%);
    z-index: 1;
    border-top: 1px solid #eeefef;
    position: absolute;
    top: 50px;
    left: 0;
  }

  .popup-window-state-title p {
    font-size: 14px;
    color: #333333;
    position: relative;
    z-index: 2;
    line-height: 30px;
  }

  .popup-window-state-title p img {
    vertical-align: middle;
    cursor: pointer;
  }

  .list-ul-title {
    margin-bottom: 10%;
  }

  .look-for-food {
    margin-top: 3%;
  }

  .list-box-card p:first-child {
    color: #333333;
  }

  .list-box-card p:nth-child(2) {
    color: #999999;
  }

  .list-box-card p:last-child {
    color: #999999;
  }

  .state-btn {
    width: 100%;
    cursor: pointer;
    margin-bottom: 12px
  }

  .orderDishes-all-list {
    background-color: #f5f5f6;
    padding: 16px 8px;
  }

  .orderDishes-all-list-box {
    margin-bottom: 10px;
    background-color: #ffffff !important;
    width: 110px;
    padding: 10px;
    height: 92px;
  }

  .orderDishes-all-right {
    height: 100%;
    border-left: 1px solid #dedfe0;

    overflow: hidden;
  }

  .orderDishes-all-right h2 {
    color: #333333;
    padding-left: 20px;
    border-bottom: 1px solid #eeefef;
    line-height: 40px;
    font-size: 14px;
  }

  .orderDishes-all {

  }

  .orderDishes-all-right-list {
    text-align: center;
    padding-bottom: 76px;
    position: relative;
  }

  .orderDishes-all-right-fixed {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .orderDishes-all-right-list-content {
    font-size: 12px;
    color: #333333;
    overflow: hidden;
  }

  .fixed-btn {
    width: 90% !important;
    margin: auto;
  }

  .select {
    border: 1px solid #ffb566;
    position: relative;
  }

  .select-num {
    width: 26px;
    height: 26px;
    position: absolute;
    right: -10px;
    top: -10px;
    background-color: #ff8502;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 26px;
  }

  .remark-text {
    width: 94%;
    height: 30px;
    border-radius: 4px;
    line-height: 30px;
    margin: auto;
    border: 1px solid #ffa6ab;
    background-color: #fff0f0;
    text-align: left;
    color: #fd6870;
    text-indent: 10px;
  }

  .orderDishes-all-right-list-content-box {
    border-bottom: 1px solid #f5f5f6;
    padding: 10px 0;
  }

  .right-list-title {
    margin-bottom: 0 !important;
    line-height: 34px;
    border-bottom: 1px solid #f5f5f6;
  }

  .orderDishes-all-right-fixed .bold-total {
    font-weight: bolder;
    font-size: 14px;
  }

  .orderDishes-all-right-fixed .bold-money {
    font-weight: bolder;
    color: #ff8502;
  }
.food-note{
  padding-top:20px;
}
  .food-note .food-note-right {
    width: 306px;
    float: left;
  }
  .food-note .el-row{
    margin-bottom:10px !important;
  }
  .food-note .food-note-right i {
    width: 90px;
    border: 1px solid #dedfe0;
    height: 36px;
    line-height: 36px;
    text-align: center;
    display: inline-block;
    margin-right: 14px;
    border-radius: 4px;
    cursor: pointer;
  }

  .check-out {
    position: relative;
    padding-bottom: 48px;
  }

  .check-out-footer {
    position: absolute;
    height: 48px;
    z-index: 666;
    box-sizing: border-box;
    border-top: 1px solid #dedfe0;
    left: 0;
    bottom: -9px;
    font-size: 16px;

    width: 100%;
  }

  .check-out p {
    font-size: 12px;
    color: #333333;
  }

  .check-out-right-box {
    border-bottom: 1px solid #f5f5f6;
    width: 100%;
    overflow: hidden;
    padding: 10px 0;
    line-height: 38px;
  }

  .check-out-right-box .have-discount {
    float: left;
  }

  .check-out-right-box .have-money {
    float: right;
  }

  .check-out-footer {
    font-weight: bold;
    line-height: 48px;
  }

  .check-out-click {
    width: 100%;
    background-color: #ff8502 !important;
    text-align: center !important;
    display: block;
    border-radius: 0 !important;
    color: #ffffff;
  }

  .check-out .el-dialog__body {
    padding: 0 20px !important;
  }

  .check-out-payment {
    letter-spacing: 2px;
  }

  .check-out-payment img {
    vertical-align: middle;
  }

  .payment-list {
    border: 1px solid #eeefef;
    border-radius: 4px;
    margin-bottom: 10px;
    text-indent: 10px;
    width: 160px;
    box-sizing: border-box;
  }

  .payment-list-ico {
    background: url("../../../../src/assets/img/xuanzhong.png") no-repeat right top;
    border: 1px solid #ff8400;
  }

  /*     弹窗end    */

  .grid-content {
    cursor: pointer;
  }

  .index-top-box {
    width: 100%;
    overflow: hidden;
  }

  .iconfont {
    color: #ffffff;
    font-size: 34px;
    display: block;
  }

  .settle-accounts {
    font-style: normal;
    display: block;
    font-size: 20px;
    width: 100%;
  }

  .message-text strong {
    font-size: 15px;

    line-height: 34px;
  }

  .location-left {
    width: 80%;
    float: left;
  }

  .location-right {
    width: 20%;
    float: right;
  }

  .message-text p {
    line-height: 28px;
  }

  .quick-function-list {
    padding: 14px 0;
    cursor: pointer;
    text-align: center;
  }

  .quick-function-list span {
    font-size: 16px;
    color: #ffffff;
    display: block;
    line-height: 38px;
  }

  .quick-function-list p {
    font-size: 16px;
    color: #949494;
    line-height: 34px;
  }

  .call-out-border {
    border-right: 1px solid #f2f2f2;
    background-color: #fff !important;
    text-align: center;
  }

  .call-out {
    text-align: center;
    background-color: #f3b136 !important;
    margin: auto;

  }

  .reservation-kiss {
    background-color: #89c13a !important;
    margin: auto;
  }

  .switch-stores {
    background-color: #fe6770 !important;
    margin: auto;
  }

  .index-location-type {
    line-height: 36px;
  }

  .index-location-type span:nth-child(2) {
    color: #ec9158;
  }

  .location-margin span:nth-child(2) {
    margin-right: 40px !important;
  }

  .index-location-type span:nth-child(2) small {
    color: #ec9158;
    margin-right: 0;
  }

  .index-location-type span {
    margin-right: 10px;
    color: #959595;
  }

  .index-location-type span i {
    margin-right: 20px;
    cursor: pointer;
  }

  .index-lists-content {
    width: 100%;
    text-align: center;
    overflow: hidden;
    // display: flex;
    border-radius: 8px;
    cursor: pointer;
    flex-wrap: wrap;

  }
.orderDishes-all-top{
  padding-top:10px;
}
  .food-note .el-button + .el-button {
    margin-bottom: 10px;
  }

  .index-lists-content-box {
    min-width: 16.666666666666666666%;
    float: left;
    box-sizing: border-box;
    padding: 10px;
  }
  @media screen and (max-width: 1600px) {

    .index-lists-content-box {
      min-width: 20%;
    }
    .food-note .el-button + .el-button:nth-child(4n) {
      margin-left: 0;
    }
    .food-note .el-textarea {
      width: 100% !important;
    }
    .check-out-right .el-checkbox + .el-checkbox {
      margin-left: 0 !important;
    }
  }

  @media screen and (max-width: 1400px) {

    .index-lists-content-box {
      min-width: 25%;
    }

  }

  @media screen and (max-width: 1300px) {

    .orderDishes-all-top .el-button {
      padding: 5px 10px !important;
    }

  }

  @media screen and (max-width: 1200px) {

    .index-lists-content-box {
      min-width: 33.3333333333333333%;
    }

  }

  @media screen and (max-width: 800px) {

    .index-lists-content-box {
      min-width: 50%;
    }

  }

  .stores-quick-data-tables {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #e0e3e8 !important;
    justify-content: flex-start;

  }

  .data-tables-all {
    width: 40%;
    float: right;
    margin-bottom: 20px !important;
  }

  .stores-information-all, .quick-function-all {
    width: 28%;
    float: left;
  }

  .quick-function-all {
    margin: 0 2%;
  }

  .reservation-bg {
    background-color: #626262;
    border-radius: 8px;
  }

  .lobby-bg {
    background-color: #ff9724;
    border-radius: 8px;
  }

  /*.index-lists-content-box:nth-child(6n) {*/
  /*margin-right: 0 !important;*/
  /*}*/

  .index-lists-content-box .content-box {
    padding: 22px;
  }

  .index-lists-content-box .content-box h2 {
    color: #fff;
    font-size: 20px;
  }

  .index-lists-content-box .content-span {
    background-color: #fff;
    height: 36px;
    border: 1px solid #d4d4d4;
    border-radius: 0 0 8px 8px;
    padding: 0 10px;
    line-height: 36px;
  }

  .index-lists-content-box .content-span span:first-child {
    float: left;
  }

  .index-lists-content-box .content-span span:last-child {

    float: right;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.button-color{
  background-color: #ff8502 !important;
  color: #fff !important;
  border:none;
}
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  @media screen and (max-width: 1910px) {
    .data-tables-all {
      width: 100%;
      float: left;
    }
    .stores-information-all, .quick-function-all {
      width: 50%;
      margin-bottom: 20px;
    }
    .quick-function-all {
      float: right !important;
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 1200px) {
    .food-note .el-button--mini {
      padding: 7px 5px;
    }
    .food-note .el-button + .el-button:nth-child(4n) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1024px) {

  }
</style>
