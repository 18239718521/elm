<template>
    <div id="home">
        <h1 class="shu">数据统计</h1>
        <div>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple ye">当日数据：</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{newUser}}</span><span>新增用户</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{newOrders}}</span><span>新增订单</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{newAdmin}}</span><span>新增管理员</span></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple bl">总数据：</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{user}}</span><span>注册用户</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{orders}}</span><span>订单</span></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><span>{{admin}}</span><span>管理员</span></div></el-col>
            </el-row>
        </div>
        <div id="myChart" :style="{width: '90%', height: '500px'}"></div>
    </div>
</template>

<script>

export default {
    name: "asset",
    data () {
        return {
            //订单
            orders:'',
            //新增订单
            newOrders:'',
            //管理员
            admin:'',
            //注册用户
            user:'',
            //新增用户
            newUser:'',
            //新增管理员
            newAdmin:'',
            year:'',
            month:'',
            date:'',
            //近7天新增订单用户数据
            newOrders6:'',
            newOrders5:'',
            newOrders4:'',
            newOrders3:'',
            newOrders2:'',
            newOrders1:'',
            //近7天新增用户信息数据
            newUser6:'',
            newUser5:'',
            newUser4:'',
            newUser3:'',
            newUser2:'',
            newUser1:'',
            //近7天新增管理员数据
            newAdmin6:'',
            newAdmin5:'',
            newAdmin4:'',
            newAdmin3:'',
            newAdmin2:'',
            newAdmin1:'',
        }
    },
    mounted(){
        this.drawLine();
    },
    beforeMount () {
        var time= new Date();
        this.year=time.getFullYear()
        this.month=time.getMonth()+1
        this.date=time.getDate()
        let ti=this.year+'-0'+this.month+'-'+this.date
        let ti1=(this.year)+'-0'+(this.month)+'-'+(this.date-1)
        let ti2=(this.year)+'-0'+(this.month)+'-'+(this.date-2)
        let ti3=(this.year)+'-0'+(this.month)+'-'+(this.date-3)
        let ti4=(this.year)+'-0'+(this.month)+'-'+(this.date-4)
        let ti5=(this.year)+'-0'+(this.month)+'-'+(this.date-5)
        let ti6=(this.year)+'-0'+(this.month)+'-'+(this.date-6)
        //订单
        this.axios.get("https://elm.cangdu.org/bos/orders/count")
        .then(res=>{
            if(res.data){
                this.orders=res.data.count
            }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders=res.data.count
                if(this.newOrders!=""){
                    this.drawLine();
                }
            }
        })
        //管理员
        this.axios.get("https://elm.cangdu.org/admin/count")
        .then(res=>{
            if(res.data){
                this.admin=res.data.count
            }
        })
        //注册用户
        this.axios.get("https://elm.cangdu.org/v1/users/count")
        .then(res=>{
            if(res.data){
                this.user=res.data.count
            }
        })
        //新增用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti+"/count")
        .then(res=>{
            if(res.data){
                this.newUser=res.data.count
                if(this.newUser!=""){
                    this.drawLine();
                }
            }
        })
        //新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin=res.data.count
            }
        })
        //近7天新增订单用户数据
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti6+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders6=res.data.count
                if(this.newOrders6!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti5+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders5=res.data.count
                if(this.newOrders5!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti4+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders4=res.data.count
                if(this.newOrders4!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti3+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders3=res.data.count
                if(this.newOrders3!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti2+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders2=res.data.count
                if(this.newOrders2!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/order/"+ti1+"/count")
        .then(res=>{
            if(res.data){
                this.newOrders1=res.data.count
                if(this.newOrders1!=""){
                    this.drawLine();
                }
            }
        })
        ////近7天新增用户信息数据
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti6+"/count")
        .then(res=>{
            if(res.data){
                this.newUser6=res.data.count
                if(this.newUser6!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti5+"/count")
        .then(res=>{
            if(res.data){
                this.newUser5=res.data.count
                if(this.newUser5!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti4+"/count")
        .then(res=>{
            if(res.data){
                this.newUser4=res.data.count
                if(this.newUser4!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti3+"/count")
        .then(res=>{
            if(res.data){
                this.newUser3=res.data.count
                if(this.newUser3!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti2+"/count")
        .then(res=>{
            if(res.data){
                this.newUser2=res.data.count
                if(this.newUser2!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/user/"+ti1+"/count")
        .then(res=>{
            if(res.data){
                this.newUser1=res.data.count
                if(this.newUser1!=""){
                    this.drawLine();
                }
            }
        })

        ////近7天新增管理员数据
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti6+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin6=res.data.count
                if(this.newAdmin6!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti5+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin5=res.data.count
                if(this.newAdmin5!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti4+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin4=res.data.count
                if(this.newAdmin4!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti3+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin3=res.data.count
                if(this.newAdmin3!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti2+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin2=res.data.count
                if(this.newAdmin2!=""){
                    this.drawLine();
                }
            }
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+ti1+"/count")
        .then(res=>{
            if(res.data){
                this.newAdmin1=res.data.count
                if(this.newAdmin1!=""){
                    this.drawLine();
                }
            }
        })
    },
    methods: {
        drawLine() {
            let time=this.year+'-0'+this.month+'-'+this.date
            let time1=(this.year)+'-0'+(this.month)+'-'+(this.date-1)
            let time2=(this.year)+'-0'+(this.month)+'-'+(this.date-2)
            let time3=(this.year)+'-0'+(this.month)+'-'+(this.date-3)
            let time4=(this.year)+'-0'+(this.month)+'-'+(this.date-4)
            let time5=(this.year)+'-0'+(this.month)+'-'+(this.date-5)
            let time6=(this.year)+'-0'+(this.month)+'-'+(this.date-6)
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '走势图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['新注册用户','新增订单','新增管理员']
                },
                toolbox: {
                    show: true,  //是否显示工具栏组件
                    feature: {
                        dataZoom: {//数据区域缩放。目前只支持直角坐标系的缩放
                            yAxisIndex:false //指定哪些 yAxis 被控制。如果缺省则控制所有的y轴。如果设置为 false 则不控制任何y轴。如果设置成 3 则控制 axisIndex 为 3 的y轴。如果设置为 [0, 3] 则控制 axisIndex 为 0 和 3 的y轴
                        },
                        dataView: {//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
                            readOnly: false//是否不可编辑（只读）
                        },
                        magicType: {//动态类型切换
                            type: ['line', 'bar']//启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',//坐标轴类型。'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                    boundaryGap: false,//类目轴中 boundaryGap 可以配置为 true 和 false。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
                    data: [time6,time5,time4,time3,time2,time1,time]//类目数据，在类目轴（type: 'category'）中有效。
                },
                yAxis:[{
                    type: 'value',
                    min:0,//坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
                    max:200,//坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
                    name:'用户',//坐标轴名称
                    axisLabel : {//修改Y轴坐标字体颜色
                        formatter: '{value}',
                        textStyle: {
                            color: '#A2A2A2'
                        }
                    }
                },
                {
                    type:'value',
                    min:0,
                    max:200,
                    name:'订单',
                    axisLabel : {
                        formatter: '{value}',
                        textStyle: {
                            color: '#A2A2A2'
                        }
                    }
                }],
                series: [
                    {
                        name:'新注册用户',//系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                        type:'line',//线图
                        itemStyle : {
                            normal : {
                            color:'#5793F3',//折点颜色
                            lineStyle:{
                                color:'#5793F3'//折线颜色
                            }
                            }
                        },
                        data:[this.newUser6, this.newUser5, this.newUser4, this.newUser3, this.newUser2, this.newUser1, this.newUser],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'新增订单',
                        type:'line',
                        itemStyle : {
                            normal : {
                            color:'#675BBA',
                            lineStyle:{
                                color:'#675BBA'
                            }
                            }
                        },
                        data:[this.newOrders6, this.newOrders5, this.newOrders4, this.newOrders3, this.newOrders2, this.newOrders1, this.newOrders],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name:'新增管理员',
                        type:'line',
                        itemStyle : {
                            normal : {
                            color:'#D14A61',
                            lineStyle:{
                                color:'#D14A61'
                            }
                            }
                        },
                        data:[this.newAdmin6, this.newAdmin5, this.newAdmin4, this.newAdmin3, this.newAdmin2, this.newAdmin1, this.newAdmin],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    }
                ]
            })
        }
    },
}
</script>

<style lang="scss" scoped>
#home{
    &>div:nth-of-type(1){
        padding-left:20px; 
    }
}
#myChart{
    margin: 70px auto;
}
.shu{
    text-align: center;
    font-size: 34px;
    padding: 15px 0 20px 0;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 5px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
    text-align: center;
    span:nth-of-type(1){
        font-size: 22px;
        display: inline-block;
    }
    span:nth-of-type(2){
        font-size: 12px;
        display: inline-block;
        padding-top:13px; 
        color: #666666;
        padding-left:5px; 
    }
  }
  .ye{
      background: #FF9800;
  }
  .bl{
      background: #20A0FF;
  }
  .ye,.bl{
      color: white;
      text-align: center;
      line-height: 36px;
      font-size: 18px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
