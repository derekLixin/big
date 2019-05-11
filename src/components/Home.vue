<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">吉林油田生产物联网监控指挥中心</div>
      <!--<div class="big_head_bottom_line"></div>-->
      <div class="big_head_date">2018.12.14 10: 52: 26</div>
    </div>
    <div class="map_box">
      <div class="sanjiao_l_t"></div>
      <div class="sanjiao_r_t"></div>
      <div class="sanjiao_l_b"></div>
      <div class="sanjiao_r_b"></div>
      <div class="map_card1">
        <div class="map_card_title1">设备预警数</div>
        <div class="map_card_count1">1142</div>
        <div class="map_card_count2">开井数:10544</div>
        <div class="map_card_count3">停井数:2158</div>
      </div>
      <div class="map_card2">
        <div class="map_card_title2">今日电机异常</div>
        <div class="map_card_num1">102</div>
        <div class="map_card_num2">154</div>
        <div class="map_card_num3">189</div>
      </div>
      <div class="map_card3">
        <div class="map_card_title3">电参诊断总数</div>
        <div class="map_card_sum">5410</div>
      </div>
      <div class="map_center_title">吉林各厂井位分布图</div>
      <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
    </div>
    <div class="big_left_chart1">
      <div class="big_left_chart1_title">
        各厂开井率
        <div class="big_heng_line"></div>
      </div>
      <div class="big_left_chart1_box">
        <div id="myChart1" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
    <div class="big_left_chart2">
      <div class="big_left_chart2_title">
        各厂电能展示
      </div>
      <div class="big_left_chart2_box">
        <div id="myChart2" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
    <div class="big_right_chart1">
      <div class="big_right_chart1_title">
        各厂设备上线率
        <div class="big_heng_line"></div>
      </div>
      <div class="big_right_chart1_title1">
        吉林油田油井总数<span>15941</span>口
      </div>
      <div class="big_right_chart1_tab">
        <div class="big_right_chart1_tab_l active">安装率</div>
        <div class="big_right_chart1_tab_c">上线率</div>
        <div class="big_right_chart1_tab_r">预警</div>
      </div>
      <div class="big_right_chart1_progress">
        <div class="big_progress_item">
          <div class="big_progress_item_label">新木采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:4.7%;"></div>
          </div>
          <div class="big_progress_item_count">95.3%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">红岗采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:12.1%;"></div>
          </div>
          <div class="big_progress_item_count">87.9%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">乾安采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:24.9%;"></div>
          </div>
          <div class="big_progress_item_count">75.1%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">新立采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:13.5%;"></div>
          </div>
          <div class="big_progress_item_count">86.5%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">英台采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:11.2%;"></div>
          </div>
          <div class="big_progress_item_count">88.8%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">扶余采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:34。8%;"></div>
          </div>
          <div class="big_progress_item_count">65.2%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">长春采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:4.5%;"></div>
          </div>
          <div class="big_progress_item_count">95.5%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">新民采油厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:8%;"></div>
          </div>
          <div class="big_progress_item_count">92.0%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">二氧化碳</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:5.5%;"></div>
          </div>
          <div class="big_progress_item_count">94.5%</div>
        </div>
        <div class="big_progress_item">
          <div class="big_progress_item_label">松原采气厂</div>
          <div class="big_progress_item_bg">
            <div class="big_progress_item_gray" style="width:13.6%;"></div>
          </div>
          <div class="big_progress_item_count">86.4%</div>
        </div>
      </div>
      <!--<div class="big_right_chart1_box">-->
        <!--<div id="myChart3" :style="{width: '100%', height: '100%'}"></div>-->
      <!--</div>-->
    </div>
    <div class="big_right_chart2">
      <div class="big_right_chart2_title">
        采油方式
      </div>
      <div class="big_right_chart2_box">
        <div id="myChart4" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
    <div class="big_bottom_left">
      <div class="big_bottom_left_title">
        日度电机异常
        <div class="big_shu_line"></div>
      </div>
      <div class="big_bottom_left_box">
        <div id="myChart5" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
    <div class="big_bottom_center">
      <div class="big_bottom_left_title">
        井场视频预警
        <div class="big_shu_line"></div>
      </div>
      <div class="big_bottom_center_box">
        <div id="myChart6" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
    <div class="big_bottom_right">
      <div class="big_bottom_left_title">
        电参诊断故障井
        <div class="big_shu_line"></div>
      </div>
      <div class="big_bottom_right_box">
        <div id="myChart7" :style="{width: '100%', height: '100%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import jilin from '../data/jilin.json'
// import shandong from '../data/shandong.json'

let echarts = require('echarts/lib/echarts')

// require('echarts/lib/chart/map')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/line')

require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/geo')
require('echarts/lib/component/visualMap')
require('echarts/lib/component/grid')
require('echarts/lib/component/radar')
require('echarts/lib/component/legend')

export default {
  name: 'Home',
  data () {
    return {
      myChart: undefined,
      myChart1: undefined,
      myChart2: undefined,
      myChart3: undefined,
      myChart4: undefined,
      myChart5: undefined,
      myChart6: undefined,
      myChart7: undefined
    }
  },
  components: {
  },
  mounted () {
    this.initChart()
    this.drawMap(jilin, 'jilin')
    this.drawMap1()
    this.drawMap2()
    this.drawMap3()
    this.drawMap4()
    this.drawMap5()
    this.drawMap6()
    this.drawMap7()
  },
  methods: {
    initChart () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('myChart'))
      this.myChart1 = echarts.init(document.getElementById('myChart1'))
      this.myChart2 = echarts.init(document.getElementById('myChart2'))
      // this.myChart3 = echarts.init(document.getElementById('myChart3'))
      this.myChart4 = echarts.init(document.getElementById('myChart4'))
      this.myChart5 = echarts.init(document.getElementById('myChart5'))
      this.myChart6 = echarts.init(document.getElementById('myChart6'))
      this.myChart7 = echarts.init(document.getElementById('myChart7'))
    },
    drawMap1 () {
      const dataAxis = ['新木', '红岗', '乾安', '新立', '英台', '扶余', '长春', '新民', '二氧', '松原']
      const data = [85, 82, 91, 34, 90, 30, 10, 73, 62, 32]

      const option = {
        grid: {
          top: '40px',
          bottom: '40px',
          left: '65px',
          right: '25px'
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          z: 10
        },
        yAxis: {
          max: 100,
          min: 0,
          splitNumber: 10,
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
              type: 'dotted'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          name: '单位：%',
          nameTextStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(45,145,244,1)'},
                    {offset: 0.5, color: 'rgba(76,114,240,1)'},
                    {offset: 1, color: 'rgba(104,87,237,1)'}
                  ]
                )
              },
              emphasis: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(45,145,244,1)'},
                    {offset: 0.7, color: 'rgba(76,114,240,1)'},
                    {offset: 1, color: 'rgba(104,87,237,1)'}
                  ]
                )
              }
            },
            data: data
          }
        ]
      }
      this.myChart1.setOption(option)
    },
    drawMap2 () {
      const option = {
        grid: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '0'
        },
        radar: [
          {
            indicator: [
              { text: '松原采气厂\n15084', max: 160000, color: '#fff' },
              { text: '新木采油厂\n63916', max: 160000, color: '#fff' },
              { text: '红岗采油厂\n87917', max: 160000, color: '#fff' },
              { text: '乾安采油厂\n148803', max: 160000, color: '#fff' },
              { text: '新立采油厂\n24976', max: 160000, color: '#fff' },
              { text: '英台采油厂\n31665', max: 160000, color: '#fff' },
              { text: '扶余采油厂\n95338', max: 160000, color: '#fff' },
              { text: '长春采油厂\n15214', max: 160000, color: '#fff' },
              { text: '新民采油厂\n25980', max: 160000, color: '#fff' },
              { text: '二氧化碳\n27460', max: 160000, color: '#fff' }
            ],
            axisLine: {
              lineStyle: {
                color: 'rgba(47,121,243)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(47,121,243)'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(16,9,40,1)', 'rgba(26,48,92,0.5)']
              }
            },
            center: ['50%', '50%'],
            radius: '50%'
          }
        ],
        series: [
          {
            name: '成绩单',
            type: 'radar',
            data: [
              {
                value: [15084, 63916, 87917, 148803, 24976, 31665, 95338, 15214, 25980, 27460],
                name: '李四',
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        color: 'rgba(145,168,68,0.5)',
                        offset: 0
                      },
                      {
                        color: 'rgba(145,168,68,0.5)',
                        offset: 1
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      }
      this.myChart2.setOption(option)
    },
    drawMap3 () {
    },
    drawMap4 () {
      const option = {
        grid: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '0'
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, '50%'],
            center: ['50%', '50%'],
            // roseType: 'area',
            // roseType: 'radius',
            label: {
              color: '#fff',
              fontSize: 18
            },
            data: [
              {
                value: 80,
                name: '电泵\n80%',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(235,101,47,1)'},
                      {offset: 1, color: 'rgba(247,153,58,1)'}
                    ]
                  )
                }
              },
              {
                value: 5,
                name: '有杆泵\n5%',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(231,231,50,1)'},
                      {offset: 1, color: 'rgba(231,231,50,0.8)'}
                    ]
                  )
                }
              },
              {
                value: 15,
                name: '螺杆泵\n15%',
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(58,171,249,1)'},
                      {offset: 1, color: 'rgba(57,171,250,1)'}
                    ]
                  )
                }
              }
            ]
          }
        ]
      }
      this.myChart4.setOption(option)
    },
    drawMap5 () {
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
      this.myChart5.setOption(option)
    },
    drawMap6 () {
      const dataAxis = ['新木', '红岗', '乾安', '新立', '英台', '扶余', '长春', '新民', '二氧', '松原']
      const data = [85, 82, 91, 34, 90, 30, 10, 73, 62, 32]

      const option = {
        grid: {
          top: '40px',
          bottom: '40px',
          left: '65px',
          right: '25px'
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff'
            },
            interval: 0,
            rotate: 40
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          z: 10
        },
        yAxis: {
          max: 100,
          min: 0,
          splitNumber: 10,
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
              type: 'dotted'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          name: '单位：口',
          nameTextStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(251,202,47,1)'},
                    {offset: 1, color: 'rgba(243,129,83,1)'}
                  ]
                )
              },
              emphasis: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(251,202,47,1)'},
                    {offset: 1, color: 'rgba(243,129,83,1)'}
                  ]
                )
              }
            },
            data: data
          }
        ]
      }
      this.myChart6.setOption(option)
    },
    drawMap7 () {
      const dataAxis = ['新木', '红岗', '乾安', '新立', '英台', '扶余', '长春', '新民', '二氧', '松原']
      const data = [85, 82, 91, 34, 90, 30, 10, 73, 62, 32]

      const option = {
        grid: {
          top: '40px',
          bottom: '40px',
          left: '65px',
          right: '25px'
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff'
            },
            interval: 0,
            rotate: 40
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          z: 10
        },
        yAxis: {
          max: 100,
          min: 0,
          splitNumber: 10,
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
              type: 'dotted'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.5)'
            }
          },
          name: '单位：口',
          nameTextStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(251,202,47,1)'},
                    {offset: 1, color: 'rgba(243,129,83,1)'}
                  ]
                )
              },
              emphasis: {
                barBorderRadius: 6,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(251,202,47,1)'},
                    {offset: 1, color: 'rgba(243,129,83,1)'}
                  ]
                )
              }
            },
            data: data
          }
        ]
      }
      this.myChart7.setOption(option)
    },
    drawMap (_d, _name) {
      echarts.registerMap(_name, _d)
      const mapData = []
      const scatterColor = ['rgba(44,236,129,1)', 'rgba(224,224,51,1)', 'rgba(205,204,48,1)']
      _d.features.forEach((item, i) => {
        mapData.push({
          name: item.properties.name,
          value: item.properties.cp.concat([Math.round(Math.random() * 10000)]),
          label: {
            show: false,
            normal: {
              position: 'top'
            }
          },
          itemStyle: {
            color: '#fff',
            normal: {
              color: scatterColor[i % 3]
            }
          }
        })
      })
      const color = ['rgba(255,255,255,0.8)', 'rgba(205,204,48,1)', 'rgba(255,255,255,0.8)']
      const series = []
      series.push({
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: false,
            position: 'left',
            formatter: '{b}',
            color: color[2]
          }
        },
        symbolSize: (val) => {
          return val[2] / 200 < 10 ? 10 : val[2] / 200
        },
        itemStyle: {
          color: '#fff',
          normal: {
            color: color[0]
          }
        },
        data: mapData
      })
      // series.push({
      //   type: 'map',
      //   mapType: _name,
      //   label: {
      //     normal: {
      //       show: true,
      //       position: 'left',
      //       formatter: '{b}',
      //       color: '#fff'
      //     }
      //   },
      //   itemStyle: {
      //     normal: {
      //       label: {
      //         show: false
      //       },
      //       areaColor: 'rgba(56,177,237,0.5)',
      //       // shadowColor: 'rgba(255, 255, 255, 0.5)',
      //       // shadowBlur: 150,
      //       borderColor: '#1BECE4', // 边框颜色
      //       borderWidth: 1, // 柱条的描边宽度，默认不描边。
      //       borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
      //       opacity: 0.8
      //     }
      //   },
      //   emphasis: {
      //     label: {
      //       show: false
      //     },
      //     itemStyle: {
      //       // areaColor: 'rgba(56,177,237,0.7)',
      //       borderColor: '#1BECE4', // 边框颜色
      //       borderWidth: 1, // 柱条的描边宽度，默认不描边。
      //       borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
      //       opacity: 1
      //     }
      //   },
      //   data: mapData
      // })
      // 绘制图表
      this.myChart.setOption({
        // title: {
        //   text: 'demo',
        //   textStyle: {
        //     color: '#fff',
        //     fontSize: 40
        //   },
        //   top: '10px',
        //   left: '10px'
        // },
        tooltip: {
          show: true,
          trigger: 'item',
          position: 'top'
        },
        // visualMap: {
        //   min: 0,
        //   max: 10000,
        //   text: ['High', 'Low'],
        //   realtime: false,
        //   calculable: true,
        //   inRange: {
        //     color: ['lightskyblue', 'yellow', 'orangered']
        //   }
        // },
        // backgroundColor: '#070b14',
        geo: {
          map: _name,
          roam: false,
          // showLegendSymbol: true,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              areaColor: 'rgba(9,33,110,0.8)',
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 2,
              borderColor: 'rgba(87,255,255,1)', // 边框颜色
              borderWidth: 2, // 柱条的描边宽度，默认不描边。
              borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
              opacity: 1
            }
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              // areaColor: 'rgba(56,177,237,0.7)',
              // borderColor: '#1BECE4', // 边框颜色
              // borderWidth: 1, // 柱条的描边宽度，默认不描边。
              // borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
              // opacity: 1
              areaColor: 'rgba(9,33,110,0.8)',
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 2,
              borderColor: 'rgba(87,255,255,1)', // 边框颜色
              borderWidth: 2, // 柱条的描边宽度，默认不描边。
              borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
              opacity: 1
            }
          }
        },
        series: series,
        textStyle: {
          fontSize: 12
        }
      })
      // this.myChart.on('click', 'series.effectScatter', (params) => {
      //   console.log(params)
      //   this.drawLine(shandong, 'shandong')
      // })
    }
  }
}
</script>

<style scoped>
  .map_box{
    /*background:rgba(0,0,0,0.4);*/
    position: absolute;
    left: 465px;
    top: 125px;
    width: 1024px;
    height: 660px;
  }
  .container{
    width:100%;
    height:100%;
    background-image: url('~@/../static/images/big_bg2.png');
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
  .big_head_bottom_line{
    width:1920px;
    height:144px;
    position:absolute;
    left:50%;
    margin-left:-960px;
    bottom:-44px;
    background-image: url('~@/../static/images/big_head_line.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .big_head_date{
    position:absolute;
    right:40px;
    bottom:1px;
    border-bottom:3px solid rgba(35,205,253,1);
    color:rgba(35,205,253,1);
    font-size:18px;
    line-height: 22px;
  }
  .sanjiao_l_t{
    position:absolute;
    left: 3px;
    top: 3px;
    width: 13px;
    height: 13px;
    background-image: url('~@/../static/images/sanjiao_l_t.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .sanjiao_r_t{
    position:absolute;
    right:3px;
    top:3px;
    width: 13px;
    height: 13px;
    background-image: url('~@/../static/images/sanjiao_r_t.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .sanjiao_l_b{
    position:absolute;
    left:3px;
    bottom:3px;
    width: 13px;
    height: 13px;
    background-image: url('~@/../static/images/sanjiao_l_b.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .sanjiao_r_b{
    position:absolute;
    right:3px;
    bottom:3px;
    width: 13px;
    height: 13px;
    background-image: url('~@/../static/images/sanjiao_r_b.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .map_card1{
    position: absolute;
    right: 32px;
    top: 21px;
    width: 177px;
    height: 95px;
    background-image: url('~@/../static/images/card_bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .map_card_title1{
    color: rgba(243,232,68,1);
    font-size: 14px;
    position: absolute;
    top: 9px;
    left: 17px;
    line-height: 30px;
  }
  .map_card_count1{
    color: rgba(243,232,68,1);
    font-size: 32px;
    position: absolute;
    top: 48px;
    right: 88px;
    line-height:30px;
    text-align: right;
  }
  .map_card_count2{
    color: rgba(57,250,177,1);
    font-size: 10px;
    position: absolute;
    top: 38px;
    left: 92px;
    line-height: 30px;
    text-align: left;
  }
  .map_card_count3{
    color:rgba(236,102,34,1);
    font-size: 10px;
    position: absolute;
    top: 54px;
    left: 92px;
    line-height: 30px;
    text-align: left;
  }
  .map_card2{
    position: absolute;
    left: 23px;
    bottom: 25px;
    width: 195px;
    height: 95px;
    background-image: url('~@/../static/images/card_bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .map_card_title2{
    color: rgba(255,255,255,1);
    font-size: 14px;
    position: absolute;
    top: 9px;
    left: 0;
    right:0;
    text-align: center;
    line-height: 30px;
  }
  .map_card_num1{
    color: rgba(243,232,68,1);
    font-size: 28px;
    position: absolute;
    top: 48px;
    left: 3%;
    width:31%;
    line-height:30px;
    text-align: center;
  }
  .map_card_num2{
    color: rgba(244,72,75,1);
    font-size: 28px;
    position: absolute;
    top: 48px;
    left: 34%;
    width:31%;
    line-height:30px;
    text-align: center;
  }
  .map_card_num3{
    color:rgba(118,243,246,1);
    font-size: 28px;
    position: absolute;
    top: 48px;
    left:65%;
    width:31%;
    line-height:30px;
    text-align: center;
  }
  .map_card3{
    position: absolute;
    right: 32px;
    bottom: 25px;
    width: 187px;
    height: 95px;
    background-image: url('~@/../static/images/card_bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
  }
  .map_card_title3{
    color: rgba(255,255,255,1);
    font-size: 14px;
    position: absolute;
    top: 9px;
    left: 0;
    right:0;
    text-align: center;
    line-height: 30px;
  }
  .map_card_sum{
    color:rgba(51,219,251,1);
    font-size: 30px;
    position: absolute;
    top: 48px;
    left:0;
    right:0;
    line-height:30px;
    text-align: center;
  }
  .map_center_title{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    line-height: 48px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    text-align: center;
  }
  .big_left_chart1{
    position:absolute;
    left: 35px;
    top: 105px;
    width: 420px;
    height: 330px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
  }
  .big_left_chart2{
    position:absolute;
    left: 35px;
    top: 445px;
    width: 420px;
    height: 360px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
  }
  .big_right_chart1{
     position:absolute;
     left: 1535px;
     top: 105px;
     width: 350px;
     height: 420px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
   }
  .big_right_chart2{
    position:absolute;
    left: 1535px;
    top: 535px;
    width: 350px;
    height: 270px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
  }
  .big_bottom_left{
    position:absolute;
    left: 35px;
    top: 815px;
    width: 845px;
    height: 255px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
  }
  .big_bottom_center{
     position:absolute;
     left: 890px;
     top: 815px;
     width: 425px;
     height: 255px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
   }
  .big_bottom_right{
    position:absolute;
    left: 1325px;
    top: 815px;
    width: 560px;
    height: 255px;
    border: 1px solid rgba(255,255,255,0.5);
    background:rgba(0,0,0,0.4);
  }
  .big_left_chart1_title{
    position: absolute;
    left: 0px;
    right: 0;
    top: 30px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    text-align: center;
  }
  .big_left_chart2_title{
    position: absolute;
    left: 0px;
    right: 0;
    top: 2px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    text-align: center;
  }
  .big_right_chart1_title{
    position: absolute;
    left: 0px;
    right: 0;
    top: 35px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    text-align: center;
  }
  .big_right_chart2_title{
    position: absolute;
    left: 0px;
    right: 0;
    top: 15px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    text-align: center;
  }
  .big_bottom_left_title{
    position: absolute;
    left: 30px;
    top: 37px;
    width: 30px;
    line-height: 28px;
    font-size: 28px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    padding-right:20px;
  }

  .big_bottom_center_title{
    position: absolute;
    left: 30px;
    top: 37px;
    width: 30px;
    line-height: 28px;
    font-size: 28px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    padding-right:20px;
  }

  .big_bottom_right_title{
    position: absolute;
    left: 30px;
    top: 37px;
    width: 30px;
    line-height: 28px;
    font-size: 28px;
    font-weight: bold;
    color: rgba(35,205,253,1);
    padding-right:20px;
  }
  .big_heng_line{
    position:absolute;
    bottom:0;
    width:300px;
    height:4px;
    left:50%;
    margin-left:-150px;
    background:-webkit-radial-gradient(ellipse,rgba(35,205,253,1),rgba(35,205,253,0),rgba(35,205,253,0));
  }
  .big_shu_line{
    position:absolute;
    right:0;
    width:6px;
    height:340px;
    top:50%;
    margin-top:-170px;
    background:-webkit-radial-gradient(ellipse,rgba(35,205,253,1),rgba(35,205,253,0),rgba(35,205,253,0));
  }
  .big_left_chart1_box{
    position:absolute;
    left:0;
    top:60px;
    bottom:0;
    right:0;
  }

  .big_left_chart2_box{
    position:absolute;
    left:0;
    top:0;
    width:420px;
    height:400px;
  }
  .big_right_chart1_title1{
    position:absolute;
    left:0;
    top:88px;
    line-height:30px;
    right:0;
    text-align: center;
    font-size:16px;
    color:rgba(57,253,179,1);
  }
  .big_right_chart1_title1 span{
    font-size:26px;
  }
  .big_right_chart1_tab_l{
    width:33%;
    text-align: center;
    float:left;
    box-shadow:inset 0px 0px 5px 1px rgba(255,255,255,0.2);
  }
  .big_right_chart1_tab_c{
    width:34%;
    text-align: center;
    float:left;
    border-left:1px solid rgba(31,71,166,1);
    border-right:1px solid rgba(31,71,166,1);
    margin:0 -1px;
    box-shadow:inset 0px 0px 5px 1px rgba(255,255,255,0.2);
  }
  .big_right_chart1_tab_r{
    width:33%;
    text-align: center;
    float:left;
    box-shadow:inset 0px 0px 5px 1px rgba(255,255,255,0.2);
  }
  .big_right_chart1_tab{
    height: 30px;
    line-height: 30px;
    font-size:16px;
    width: 264px;
    position: absolute;
    top: 122px;
    left: 50%;
    margin-left: -130px;
    border-radius: 5px;
    border: 1px solid rgba(31,71,166,1);
    color: rgba(33,193,239,1);
    overflow: hidden;
  }
  .big_right_chart1_tab .active{
    color:rgba(240,228,63,1);
  }
  .big_right_chart1_progress{
    position: absolute;
    left: 0;
    top: 160px;
    right: 0;
  }
  .big_progress_item{
    height:25px;
    line-height: 25px;
    font-size:14px;
    overflow: hidden;
    position:relative;
  }
  .big_progress_item_label{
    position:absolute;
    left:0;
    width:110px;
    text-align: right;
    color:rgba(52,231,165,1);
  }
  .big_progress_item_bg{
    position:absolute;
    top: 10px;
    left: 128px;
    height: 6px;
    border-radius: 6px;
    overflow: hidden;
    right: 84px;
    background: -webkit-linear-gradient(right,rgba(137,210,118,1),rgba(34,188,182,1));
    background: -o-linear-gradient(right,rgba(137,210,118,1),rgba(34,188,182,1));
    background: -moz-linear-gradient(right,rgba(137,210,118,1),rgba(34,188,182,1));
    background: linear-gradient(right,rgba(137,210,118,1),rgba(34,188,182,1));
  }
  .big_progress_item_gray{
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    background:rgba(25,77,107,1);
  }
  .big_progress_item_count{
    position:absolute;
    right:0;
    width:66px;
    text-align: left;
    font-size:14px;
    color:rgba(241,229,63,1);
  }
  .big_right_chart2_box{
    position:absolute;
    left:0;
    top:20px;
    height:300px;
    width:350px;
  }
  .big_bottom_left_box{
    position:absolute;
    left:60px;
    top:0;
    right:0;
    bottom:0;
  }

  .big_bottom_center_box{
    position:absolute;
    left:55px;
    top:0;
    right:0;
    bottom:0;
  }
  .big_bottom_right_box{
    position:absolute;
    left:55px;
    top:0;
    right:0;
    bottom:0;
  }
</style>
