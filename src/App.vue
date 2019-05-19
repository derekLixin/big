<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    width:1920px;
    height:1080px;
    position:relative;
    overflow-x:hidden;
    overflow-y:auto;
  }
  .appContainer{
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:1920px;
    height:1080px;
    position:relative;
  }
  .table_conditions .el-input input{
     background-color:rgba(25,205,253,0.1)!important;
     border:1px solid rgba(25,205,253,1)!important;
     color:#fff;
     border-radius: 2px;
   }
  .table_page button,
  .table_page .el-pagination button:disabled{
    background: none;
    font-size:18px;
    color:rgba(255,255,255,0.5);
  }
  .table_page .el-pagination .btn-next,
  .table_page .el-pagination .btn-prev{
    background: none;
    color: rgba(25,205,253,1);
  }
  .table_page .table_page button, .table_page .el-pagination button:disabled{
    line-height: 48px;
  }
  .table_page .el-pagination button,
  .table_page .el-pagination span:not([class*=suffix]){
    height: 48px;
    line-height: 48px;
    font-size:18px;
  }
  .table_page .el-pagination__editor{
    margin:0 10px;
  }
  .table_page .el-pagination__jump{
    color: rgba(25,205,253,1);
    margin:0 24px;
  }
  .table_page .el-select .el-input .el-select__caret{
    color: rgba(25,205,235,1);
  }
  .table_page .el-select:hover .el-input__inner{
    border:1px solid rgba(25,205,235,1);
  }
  .table_page .el-input__inner{
    background:rgba(25,205,235,0.1);
    color:rgba(25,205,235,1);
    border:1px solid rgba(25,205,235,1);
  }
  .table_page .el-pagination{
    color:rgba(25,205,235,1);
  }
  .table_page .el-pager li{
    font-size:18px;
    height:48px;
    line-height: 48px;
    padding:0 14px;
    background: none;
  }
  .table_page .el-pager li.active{
    color:#fff;
  }
  .table_page .el-pagination__total{
    color:rgba(25,205,235,1);
  }
  .table_page .el-pagination__sizes .el-input .el-input__inner{
    font-size:16px;
  }

  .right_menu{
    width: 90px;
    position:absolute;
    right:0;
    top:170px;
  }
  .right_menu_item{
    color:rgba(35,205,253,1);
    border:1px solid rgba(35,205,253,1);
    height:44px;
    line-height: 44px;
    text-align: center;
    fonts-size:18px;
    margin-bottom:10px;
    position:relative;
    border-right:none;
    cursor: pointer;
    background:rgba(35,205,253,0.1);
  }
  .right_menu_item:hover,.right_menu_item.active{
    box-shadow: 0 0 10px rgba(35,205,253,0.5);
    color:#fff;
  }
</style>
