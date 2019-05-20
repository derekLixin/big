<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">单井实时监控</div>
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
          <el-input style="width:220px;margin-right:50px;" v-model="jh" placeholder="请输入井号"></el-input>
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
        </div>
        <div class="shipin_box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'diancan',
  data () {
    return {
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
    height:471px;
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
