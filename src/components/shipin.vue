<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">井场视频监控</div>
    </div>
    <div class="shipin_box">
      <div class="shipin_left"></div>
      <div class="shipin_right"></div>
      <div class="shipin_bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shipin',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
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
  .shipin_box{
    position:absolute;
    left: 100px;
    right: 100px;
    bottom: 80px;
    top: 130px;
    padding-bottom:40px;
    background: #fff;
  }
  .shipin_left{
    position:absolute;
    left:0;
    top:0;
    width: 1000px;
    bottom:40px;
  }
  .shipin_right{
    position:absolute;
    left:1000px;
    top:0;
    right:0;
    bottom:40px;
  }
  .shipin_bottom{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    height: 40px;
  }
</style>
