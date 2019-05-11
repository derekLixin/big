<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">单井实时监控</div>
      <div class="big_head_bottom_line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'danjingJiankong',
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
    background-image: url('~@/../static/images/big_bg.png');
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
</style>
