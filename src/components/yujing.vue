<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">预警确认</div>
      <div class="big_head_bottom_line"></div>
    </div>
    <div class="yujing_box">
      <div class="yujing_shipin"></div>
      <div class="yujing_date">2019-12-12 22:22:22</div>
      <div class="yujing_result">
        预警结果预警结果预警结果<br/>预警结果预警结果预警结果预警结果预警结果预警结果预警结果
        预警结果预警结果预警结果<br/>预警结果预警结果预警结果预警结果预警结果预警
        预警结果预警结果预警结果<br/>预警结果预警结果预警结果预警结果预警结果预警
        预警结果预警结果预警结果<br/>预警结果预警结果预警结果预警结果预警结果预警
        预警结果预警结果预警结果<br/>预警结果预警结果预警结果预警结果预警结果预警
      </div>
    </div>
    <div class="right_menu">
      <div class="right_menu_item" @click="go2Page('/')">首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yujing',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    go2Page (link) {
      this.$router.push({
        path: link
      })
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
  .yujing_box{
    position:absolute;
    left: 100px;
    right: 100px;
    bottom: 70px;
    top: 140px;
  }
  .yujing_shipin{
    position:absolute;
    left:0;
    height:840px;
    width:1120px;
    border:5px solid #ff0000;
    background:rgba(255,255,255,0.2);
  }
  .yujing_date{
    left:1160px;
    position:absolute;
    line-height:40px;
    font-size:20px;
    color:#fff;
    font-weight:bold;
  }
  .yujing_result{
    position:absolute;
    line-height:40px;
    font-size:18px;
    color:#fff;
    left:1160px;
    top:60px;
    right:0;
  }
</style>
