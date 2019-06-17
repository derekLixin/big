<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">井场视频监控</div>
    </div>
    <div class="shipin_box">
      <div class="shipin_left">
        <el-row>
          <el-col v-for="(item, index) in shipinData" :key="index" :span="12" class="shipin_item">
            <video :id="'video'+index" class="video-js vjs-default-skin vjs-big-play-centered flex-grid" style="width:100%;height:100%;object-fit: fill" muted controls autoplay loop>
              抱歉, 你的浏览器不支持
            </video>
          </el-col>
        </el-row>
      </div>
      <div class="shipin_right">
        <div class="shipin_right_condition">
          <div class="shipin_right_label">热点视频选择</div>
          <div class="shipin_right_select">
            <el-select v-model="videoSelect" placeholder="请选择">
              <el-option
                v-for="item in videos"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="shipin_info_list">
          <div class="shipin_info_item head_tb">
            <div class="shipin_info_tip">风险提示</div>
            <div class="shipin_info_count">总数</div>
            <div class="shipin_info_status">状态</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
          <div class="shipin_info_item">
            <div class="shipin_info_tip">井场漏油</div>
            <div class="shipin_info_count">21</div>
            <div class="shipin_info_status">22</div>
          </div>
        </div>
      </div>
      <div class="shipin_bottom">
        <div class="table_page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="->, prev, pager, next, jumper, total"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="right_menu">
      <div class="right_menu_item" @click="go2Page('/')">首页</div>
      <div class="right_menu_item active" >预警列表</div>
    </div>
  </div>
</template>

<script>
import videojs from 'video'

export default {
  name: 'shipin',
  data () {
    return {
      shipinData: [{
        url: 'rtmp://127.0.0.1:1935/live/home?t=1'
      }, {
        url: 'rtmp://127.0.0.1:1935/live/home?t=2'
      }, {
        url: 'rtmp://127.0.0.1:1935/live/home?t=3'
      }, {
        url: 'rtmp://127.0.0.1:1935/live/home?t=4'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=5'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=6'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=7'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=8'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=9'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=10'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=11'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=12'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=13'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=14'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=15'
      // }, {
      //   url: 'rtmp://127.0.0.1:1935/live/home?t=16'
      }],
      listData: [],
      videoSelect: '',
      videos: [{
        value: '选项1',
        label: '视频1'
      }, {
        value: '选项2',
        label: '视频2'
      }, {
        value: '选项3',
        label: '视频3'
      }, {
        value: '选项4',
        label: '视频4'
      }],
      pageSize: 11,
      total: 24,
      currentPage: 1
    }
  },
  components: {
  },
  mounted () {
    this.shipinData.forEach((item, index) => {
      this.playVideo(item.url, 'video' + index)
    })
  },
  methods: {
    exitFullscreen () {
      const de = document
      if (de.exitFullscreen) {
        de.exitFullscreen()
      } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen()
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen()
      }
    },
    enterFullScreen (ele) {
      if (ele.requestFullscreen) {
        ele.requestFullscreen()
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen()
      } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen()
      }
    },
    playVideo (url, id) {
      const player = this.CreatePlayer(id)
      player.src({
        src: url,
        type: 'rtmp/flv',
        autoplay: false,
        isFullscreen: false
      })
    },
    CreatePlayer (id) {
      const options = {
        autoplay: false,
        preload: true,
        flash: {
          swf: './lib/video-js.swf'
        }
      }
      return videojs(id, options, function onPlayerReady () {})
    },
    go2Page (link) {
      this.$router.push({
        path: link
      })
    },
    handleCurrentChange (page) {
      console.log(page)
      this.currentPage = page
      this.listData = this.allData.rows.slice((page - 1) * this.pageSize, page * this.pageSize)
    }
  }
}
</script>

<style scoped>
  .container{
    width:100%;
    height:100%;
    background-image: url('~@/../static/images/big_bg2.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:1920px 1080px;
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
  .shipin_box{
    position:absolute;
    left: 100px;
    right: 100px;
    bottom: 70px;
    top: 130px;
    padding-bottom:40px;
  }
  .shipin_left{
    position:absolute;
    left:0;
    top:0;
    width: 1120px;
    height:840px;
  }
  .shipin_right{
    position:absolute;
    left:1200px;
    top:0;
    right:20px;
    bottom:0px;
  }
  .shipin_bottom{
    position:absolute;
    left:0;
    width:1120px;
    right:0;
    bottom:0;
    height: 40px;
  }
  .shipin_item{
    background:rgba(255,255,255,0.2);
    /*height:210px;*/
    /*width:280px;*/
    height:420px;
    width:560px;
    border:1px solid #ccc;
    margin-right:-1px;
    margin-top:-1px;
  }
  .shipin_item1{
    background:rgba(255,255,255,0.2);
    height:628px;
    width:838px;
    border:1px solid #ccc;
    margin-left:-1px;
    margin-top:-1px;
  }
  .shipin_right_label{
    line-height:40px;
    color:#fff;
    font-size:18px;
  }
  .shipin_info_list{
    position:relative;
    padding-top:20px;
  }
  .shipin_info_item{
    height:40px;
    color:#fff;
    font-size:16px;
    line-height:40px;
    border:1px solid #006699;
    text-align:center;
    margin-top:-1px;
    position:relative;
    z-index:1;
  }
  .shipin_info_item.head_tb{
    background:#006699;
    border:1px solid #ccc;
    z-index:2;
  }
  .shipin_info_tip{
    position:absolute;
    left:0;
    top:0;
    width:218px;
    border-right:1px solid #006699;
    height:40px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .shipin_info_count{
    position:absolute;
    left:218px;
    top:0;
    width:150px;
    border-right:1px solid #006699;
    height:40px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .shipin_info_status{
    position:absolute;
    left:368px;
    right:0px;
    top:0;
    height:40px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

</style>
