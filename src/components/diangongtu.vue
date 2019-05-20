<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">电功图诊断记录</div>
    </div>
    <div class="right_menu">
      <div class="right_menu_item" @click="go2Page('/')">首页</div>
      <div class="right_menu_item" >上一个</div>
      <div class="right_menu_item" >下一个</div>
      <div class="right_menu_item" >返回</div>
    </div>
    <div class="table_box">
      <div class="table_date">2019.05.13 11:11:11</div>
      <div class="table_box_body">
        <div class="table_conditions">
          <div class="search_label">
            采油厂
          </div>
          <el-input style="width:220px;margin-right:30px;" v-model="cyc" placeholder="请输入采油厂"></el-input>
          <div class="search_label">
            采油矿
          </div>
          <el-input style="width:220px;margin-right:30px;" v-model="cyk" placeholder="请输入采油矿"></el-input>
          <div class="search_label">
            井号
          </div>
          <el-input style="width:220px;margin-right:30px;" v-model="jh" placeholder="请输入井号"></el-input>
          <div class="search_label">
            发现时间
          </div>
          <el-date-picker
            v-model="rq"
            type="datetime"
            style="width:220px;margin-right:50px;"
            placeholder="选择日期">
          </el-date-picker>
          <div class="search_btn" @click="searchData">查询</div>
        </div>
        <div class="info_form_box">
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="font_white">井号</el-col>
                <el-col :span="8" class="font_white">采油方式</el-col>
                <el-col :span="8" class="font_white">抽油机型号</el-col>
              </el-row>
            </div>
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_blue">老1-12</el-col>
                <el-col :span="8" class="right_border font_blue">有杆泵</el-col>
                <el-col :span="8" class="font_blue">8型</el-col>
              </el-row>
            </div>
          </div>
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">地理位置</el-col>
                <el-col :span="16" class="font_blue">吉林市松原市***</el-col>
              </el-row>
            </div>
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">归属单位</el-col>
                <el-col :span="16" class="font_blue">新民采油厂</el-col>
              </el-row>
            </div>
          </div>
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">日液（t/d）</el-col>
                <el-col :span="8" class="right_border font_white">日油（t/d）</el-col>
                <el-col :span="8" class="font_white">含水（%）</el-col>
              </el-row>
            </div>
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_blue">10</el-col>
                <el-col :span="8" class="right_border font_blue">3</el-col>
                <el-col :span="8" class="font_blue">70</el-col>
              </el-row>
            </div>
          </div>
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">冲程（米）</el-col>
                <el-col :span="8" class="right_border font_white">冲次（次/分）</el-col>
                <el-col :span="8" class="font_white">泵径（mm）</el-col>
              </el-row>
            </div>
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_blue">1.4</el-col>
                <el-col :span="8" class="right_border font_blue">4</el-col>
                <el-col :span="8" class="font_blue">44</el-col>
              </el-row>
            </div>
          </div>
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">报警原因</el-col>
                <el-col :span="8" class="right_border font_white">发现时间</el-col>
                <el-col :span="8" class="font_white">记录人</el-col>
              </el-row>
            </div>
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_blue">井口漏油</el-col>
                <el-col :span="8" class="right_border font_blue">2018.11.11 22:22:22</el-col>
                <el-col :span="8" class="font_blue">郭大力</el-col>
              </el-row>
            </div>
          </div>
          <div class="info_form_group">
            <div class="info_form_item">
              <el-row>
                <el-col :span="8" class="right_border font_white">处理状况</el-col>
                <el-col :span="8" class="right_border font_white">处理时间</el-col>
                <el-col :span="8" class="font_white">处理人</el-col>
              </el-row>
            </div>
            <div class="info_form_item" style="border-bottom:none;">
              <el-row>
                <el-col :span="8" class="right_border font_blue">紧盘根，清理落地油</el-col>
                <el-col :span="8" class="right_border font_blue">2018.11.11 22:22:22</el-col>
                <el-col :span="8" class="font_blue">林燕兰</el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="shipin_box">
          <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')

// require('echarts/lib/chart/map')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/line')

require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/legend')

export default {
  name: 'diancan',
  data () {
    return {
      myChart: undefined,
      rq: '',
      cyc: '',
      cyk: '',
      jh: '',
      wids: [10, 20, 15, 10, 10, 15, 10, 10],
      pageSize: 11,
      total: 24,
      currentPage: 1,
      allData: {
        total: 24,
        rows: []
      },
      listData: []
    }
  },
  components: {
  },
  mounted () {
    this.searchData()
    this.initChart()
    this.drawMap()
  },
  methods: {
    go2Page (link) {
      this.$router.push({
        path: link
      })
    },
    handleCurrentChange (page) {
      console.log(page)
      this.currentPage = page
      this.listData = this.allData.rows.slice((page - 1) * this.pageSize, page * this.pageSize)
    },
    searchData () {
      this.handleCurrentChange(1)
    },
    initChart () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('myChart'))
    },
    drawMap () {
      const option = {
        legend: {
          // orient: 'vertical',
          // right: 0,
          top: 20,
          itemWidth: 40,
          textStyle: {
            color: '#fff'
          },
          data: [
            {name: 'a项电压异常', icon: 'rect'},
            {name: 'b项电压异常', icon: 'rect'},
            {name: 'c项电压异常', icon: 'rect'}
          ]
        },
        dataset: {
          source: [
            ['product', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日', '1月10日'],
            ['a项电压异常', 11.1, 30.4, 165.1, 523.3, 83.8, 1198.7, 615.1, 3.3, 83.8, 9822.7],
            ['b项电压异常', 15.5, 33.4, 111.1, 423.3, 23.8, 198.7, 6215.1, 13.3, 1.8, 9112.7],
            ['c项电压异常', 111.1, 130.4, 161.1, 123.3, 813.8, 198.7, 65.1, 13.3, 823.8, 2822.7]
          ]
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)'
            }
          },
          axisPointer: {
            show: true
          },
          axisLabel: {
            color: 'rgba(48,252,254,1)'
          }
        },
        yAxis: {
          type: 'log',
          gridIndex: 0,
          axisLabel: {
            color: 'rgba(124,147,200,1)'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)'
            }
          }
        },
        grid: {
          top: '60'
        },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: {
              color: 'rgba(187,55,63,1)'
            },
            lineStyle: {
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 10
            }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: {
              color: 'rgba(66,125,138,1)'
            },
            lineStyle: {
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 10
            }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: {
              color: 'rgba(223,220,49,1)'
            },
            lineStyle: {
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 10
            }
          }
          // {
          //     type: 'pie',
          //     id: 'pie',
          //     radius: '30%',
          //     center: ['50%', '25%'],
          //     label: {
          //         formatter: '{b}: {@2012} ({d}%)'
          //     },
          //     encode: {
          //         itemName: 'product',
          //         value: '2012',
          //         tooltip: '2012'
          //     }
          // }
        ]
      }
      this.myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
  .container{
    width:100%;
    height:100%;
    background-image: url('~@/../static/images/table_bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
    background-color: rgba(10,2,24,1);
    position:relative;
  }
  .big_head{
    position:relative;
    padding-top:40px;
    height:60px;
  }
  .big_head_title{
    line-height: 60px;
    font-size:44px;
    text-align: center;
    color:rgba(220,250,250,1);
  }
  .table_box{
    position:absolute;
    left: 100px;
    right: 100px;
    bottom: 80px;
    top: 120px;
    padding-top:70px;
    padding-left:90px;
    padding-right:90px;
    padding-bottom:40px;
  }
  .table_date{
    position:absolute;
    top:0;
    right:40px;
    height:46px;
    line-height: 46px;
    color:rgba(35,205,253,1);
    font-size:16px;
  }
  .table_box_body{
    position:relative;
    height: 100%;
  }
  .table_conditions{
    height:44px;
    line-height: 44px;
    font-size:18px;
    position:absolute;
    top:0px;
  }
  .search_label{
    color:rgba(35,205,253,1);
    display: inline-block;
    padding-right:10px;
  }
  .search_btn{
    display: inline-block;
    width:140px;
    text-align: center;
    color:#000;
    background:rgba(35,205,253,1);
    border-radius: 2px;
    cursor: pointer;
  }
  .shipin_box{
    position:absolute;
    top:60px;
    height:710px;
    right:0;
    width:948px;
    border:1px solid #3588a9;
    background:rgba(25,205,253,0.1)!important;
  }
  .info_form_box{
    position:absolute;
    left:0;
    top:60px;
    bottom:-2px;
    right:968px;
    border:1px solid #3588a9;
    background:rgba(25,205,253,0.1)!important;
  }
  .info_form_group{
    margin-bottom:8px;
  }
  .info_form_item{
    position:relative;
    border-bottom:1px solid #3588a9;
    line-height:55px;
    border-top:1px solid #3588a9;
    height:55px;
    margin-top:-1px;
  }
  .right_border{
    border-right:1px solid #3588a9;
  }
  .font_white{
    color:#fff;
    text-align:center;
  }
  .font_blue{
    color:#00cdff;
    text-align:center;
  }
</style>
