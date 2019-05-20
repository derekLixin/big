<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">漏油报警统计</div>
    </div>
    <div class="right_menu">
      <div class="right_menu_item" @click="go2Page('/')">首页</div>
      <div class="right_menu_item active" >日度</div>
      <div class="right_menu_item">月度</div>
      <div class="right_menu_item">季度</div>
    </div>
    <div class="table_box">
      <div class="table_date">2019.05.13 11:11:11</div>
      <div class="table_box_body">
        <div class="table_conditions">
          <div class="search_label">
            采油厂
          </div>
          <el-input style="width:220px;margin-right:35px;" v-model="cyc" placeholder="请输入采油厂名称"></el-input>
          <div class="search_label">
            采油矿
          </div>
          <el-input style="width:220px;margin-right:35px;" v-model="cyk" placeholder="请输入采油矿名称"></el-input>
          <div class="search_label">
            日期
          </div>
          <el-date-picker
            v-model="rq"
            type="date"
            style="width:220px;margin-right:50px;"
            placeholder="选择日期">
          </el-date-picker>
          <div class="search_btn" @click="searchData">查询</div>
          <div class="search_btn">曲线查询</div>
        </div>
        <div class="table_list">
          <div class="table_head">
            <div class="table_col" :style="'width:'+wids[0]+'%;'">井号</div>
            <div class="table_col" :style="'width:'+wids[1]+'%;'">报警时间</div>
            <div class="table_col" :style="'width:'+wids[2]+'%;'">报警原因</div>
            <div class="table_col" :style="'width:'+wids[3]+'%;'">处理时间</div>
            <div class="table_col" :style="'width:'+wids[4]+'%;'">处理情况</div>
            <div class="table_col" :style="'width:'+wids[5]+'%;'">处理人</div>
            <div class="table_col" :style="'width:'+wids[6]+'%;'">备注</div>
          </div>
          <div class="table_item" v-for="(item, index) in listData" :key="index">
            <div class="table_col" :style="'width:'+wids[0]+'%;'">{{item.jh}}</div>
            <div class="table_col" :style="'width:'+wids[1]+'%;'">{{item.zdsj}}</div>
            <div class="table_col" :style="'width:'+wids[2]+'%;'">{{item.zdyy}}</div>
            <div class="table_col" :style="'width:'+wids[3]+'%;'">{{item.clsj}}</div>
            <div class="table_col" :style="'width:'+wids[4]+'%;'">{{item.clqk}}</div>
            <div class="table_col" :style="'width:'+wids[5]+'%;'">{{item.clr}}</div>
            <div class="table_col" :style="'width:'+wids[6]+'%;'">{{item.bz}}</div>
          </div>
          <div class="table_page">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-sizes="[11]"
              :page-size="pageSize"
              layout="->, prev, pager, next, jumper, sizes, total"
              :total="total">
            </el-pagination>
          </div>
        </div>
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
      cyk: '',
      cyc: '',
      wids: [10, 15, 20, 15, 20, 10, 10],
      pageSize: 11,
      total: 24,
      currentPage: 1,
      allData: {
        total: 24,
        rows: [
          {jh: '老1-121', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油1', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-122', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油2', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-123', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油3', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-124', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油4', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-125', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油5', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-126', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油6', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-127', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油7', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-128', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油8', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-129', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油9', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-130', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油10', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-131', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油11', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-132', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油12', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-133', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油13', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-134', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油14', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-135', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油15', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-136', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油16', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-137', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油17', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-138', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油18', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-139', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油19', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-140', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油20', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-141', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油21', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-142', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油22', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-143', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油23', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
          {jh: '老1-144', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油24', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'}
        ]
      },
      listData: [
        {jh: '老1-121', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油1', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-122', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油2', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-123', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油3', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-124', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油4', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-125', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油5', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-126', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油6', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-127', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油7', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-128', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油8', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-129', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油9', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-130', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油10', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'},
        {jh: '老1-131', zdsj: '2018.11.11 22:22:22', zdyy: '井口漏油11', clsj: '2018.11.12 09:09:00', clqk: '紧盘根，清理落地油', clr: '林燕兰', bz: '备注'}
      ]
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
    margin-right:50px;
    border-radius: 2px;
    cursor: pointer;
  }
  .table_list{
    position:absolute;
    top:74px;
    bottom:0;
    left:0;
    right:0;
    height: auto;
    width: auto;
  }
  .table_head{
    height:53px;
    line-height: 53px;
    position: relative;
    border:1px solid rgba(35,205,253,1);
    background:rgba(35,205,253,0.1);
    color:rgba(35,205,253,1);
    text-align: center;
  }
  .table_item{
    height:53px;
    line-height: 53px;
    border-bottom:1px solid rgba(35,205,253,1);
    text-align: center;
    color:rgba(35,205,235,1);
  }
  .table_item:hover{
    color:#fff;
  }
  .table_page{
    height:48px;
    line-height: 48px;
  }
  .table_col{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height:53px;
    float:left;
  }
</style>
