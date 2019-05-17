<template>
  <div id="NavMenu">
    <div :class="'menu_list ' + menuListClass" v-if="menuFlag === '1'">
      <div class="menu_item" @click="go2Page('/')">
        首页
      </div>
      <div class="menu_item">
        单井报警
      </div>
      <div class="menu_item">
        漏油报警统计
      </div>
      <div class="menu_item" @click="go2Page('/shipin')">
        监控指挥中心
      </div>
      <div class="menu_item" @click="go2Page('/diancan')">
        电参诊断统计
      </div>
      <div class="menu_item">
        电工图诊断
      </div>
      <div class="menu_item">
        其他
      </div>
    </div>
    <div class="menu_btn" @click="showMenuSelf" v-if="menuFlag === '0'"></div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navWidth: 0,
      menuListClass: '',
      defaultWidth: 300
    }
  },
  props: {
    menuFlag: {
      type: String,
      default: '0'
    },
    showMenu: {
      type: Function,
      default: () => {
        this.menuFlag = '1'
      }
    },
    hideMenu: {
      type: Function,
      default: () => {
        this.menuFlag = '0'
      }
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    go2Page (link) {
      this.hideMenuSelf()
      this.$router.push({
        path: link
      })
    },
    showMenuSelf () {
      this.showMenu()
      this.menuListClass = 'showMenuList'
    },
    hideMenuSelf () {
      this.menuListClass = ''
      this.hideMenu()
    }
  }
}
</script>

<style scoped>
  #NavMenu{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    z-index: 100;
    height:auto;
  }
  .menu_list{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    overflow: auto;
    width:300px;
    background-image: url("~@/../static/images/nav_bg.png");
    background-size: 300px 1080px;
    background-position: 0 0;
    background-repeat: no-repeat no-repeat;
    padding-top:120px;
  }
  .menu_btn{
    position:absolute;
    top:50%;
    left:0;
    background-image: url("~@/../static/images/nav_icon.png");
    width:70px;
    height:102px;
    background-size: 100% 100%;
    background-position: 0 0;
    background-repeat: no-repeat no-repeat;
    margin-top:-51px;
    cursor: pointer;
  }
  .menu_item{
    width:180px;
    height:58px;
    line-height: 58px;
    font-size:22px;
    padding-left:46px;
    background-image: url("~@/../static/images/menu_default_bg.png");
    background-size: 226px 58px;
    background-position: 0 0;
    background-repeat: no-repeat no-repeat;
    margin-bottom:30px;
    color:#fff;
    cursor: pointer;
  }
  .menu_item:hover{
    background-image: url("~@/../static/images/menu_hover_bg.png");
    background-size: 226px 58px;
    background-position: 0 0;
    background-repeat: no-repeat no-repeat;
  }
  .showMenuList{
    animation:show 1s;
    -webkit-animation:show 1s; /*Safari and Chrome*/
  }
  @keyframes show
  {
    from {width:0px;}
    to {width:300px;}
  }

  @-webkit-keyframes show /*Safari and Chrome*/
  {
    from {width:0px;}
    to {width:300px;}
  }
</style>
