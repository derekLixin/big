<template>
  <div class="container">
    <div class="big_head">
      <div class="big_head_title">视频监控报警信息</div>
    </div>
    <div class="right_menu">
      <div class="right_menu_item" @click="go2Page('/')">首页</div>
      <div class="right_menu_item" >漏油统计</div>
    </div>
    <div class="table_box">
      <div class="table_date">2019.05.13 11:11:11</div>
      <div class="table_box_body">
        <div class="table_conditions">
          <div class="search_label">
            报警时间
          </div>
          <el-date-picker
            v-model="rq"
            type="date"
            style="width:160px;margin-right:20px;"
            placeholder="选择日期">
          </el-date-picker>
          <div class="search_label">
            处理时间
          </div>
          <el-date-picker
            v-model="rq2"
            type="date"
            style="width:160px;margin-right:20px;"
            placeholder="选择日期">
          </el-date-picker>

          <div class="search_label">
            确认问题
          </div>
          <el-input style="width:160px;margin-right:20px;" v-model="wt" placeholder="请输入问题描述"></el-input>
          <div class="search_label">
            处理措施
          </div>
          <el-input style="width:160px;margin-right:20px;" v-model="clcs" placeholder="请输入处理措施"></el-input>
          <div class="search_label">
            处理人
          </div>
          <el-input style="width:160px;margin-right:40px;" v-model="clr" placeholder="请输入处理人"></el-input>
          <div class="search_btn" @click="searchData">查询</div>
        </div>
        <div class="table_list">
          <div class="table_head">
            <div class="table_col" :style="'width:'+wids[0]+'%;'">井场</div>
            <div class="table_col" :style="'width:'+wids[1]+'%;'">确认问题</div>
            <div class="table_col" :style="'width:'+wids[2]+'%;'">报警时间</div>
            <div class="table_col" :style="'width:'+wids[3]+'%;'">处理措施</div>
            <div class="table_col" :style="'width:'+wids[4]+'%;'">处理人</div>
            <div class="table_col" :style="'width:'+wids[5]+'%;'">处理时间</div>
            <div class="table_col" :style="'width:'+wids[6]+'%;'">备注</div>
            <div class="table_col" :style="'width:'+wids[7]+'%;'">视频</div>
          </div>
          <div class="table_item" v-for="(item, index) in listData" :key="index">
            <div class="table_col" :style="'width:'+wids[0]+'%;'">{{item.jc}}</div>
            <div class="table_col" :style="'width:'+wids[1]+'%;'">{{item.qrwt}}</div>
            <div class="table_col" :style="'width:'+wids[2]+'%;'">{{item.bjsj}}</div>
            <div class="table_col" :style="'width:'+wids[3]+'%;'">{{item.clcs}}</div>
            <div class="table_col" :style="'width:'+wids[4]+'%;'">{{item.clr}}</div>
            <div class="table_col" :style="'width:'+wids[5]+'%;'">{{item.clsj}}</div>
            <div class="table_col" :style="'width:'+wids[6]+'%;'">{{item.bz}}</div>
            <div class="table_col" :style="'width:'+wids[7]+'%;'">
              <div class="table_btn">存档</div>
              <div class="table_btn">实时</div>
            </div>
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
      rq2: '',
      wt: '',
      clcs: '',
      clr: '',
      wids: [10, 20, 15, 10, 10, 15, 10, 10],
      pageSize: 11,
      total: 24,
      currentPage: 1,
      allData: {
        total: 24,
        rows: [
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '1'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '2'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '3'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '4'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '5'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '6'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '7'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '8'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '9'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '10'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '11'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '12'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '13'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '14'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '15'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '16'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '17'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '18'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '19'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '20'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '21'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '22'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '23'},
          {jc: 'wj87-9', qrwt: '动物闯入', bjsj: '2019.11.11 08:22:22', clcs: '待处理', clr: '张志龙', clsj: '2019.11.11 22:22:22', bz: '24'}
        ]
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
