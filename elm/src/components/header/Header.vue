<template>
    <div id="header">
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <span><img src="https://elm.cangdu.org/img/default.jpg" alt=""></span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      //账户信息
      userList:[],
    }
  },
  beforeMount () {
    //管理员账户
    this.axios.get("https://elm.cangdu.org/admin/info")
    .then(res=>{
      if(res.data){
        this.userLlist=res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#header{
    display: flex;
    justify-content: space-between;
    line-height: 70px;
    width: 100%;
    .el-breadcrumb{
      line-height: 67px;
    }
    &>span{
      display: inline-block;
      margin-top:16px; 
      margin-right:14px; 
      border-radius:50%;
      overflow: hidden; 
      width: 42px;
      height: 42px;
      img{
        width: 100%
      }
    }
}
</style>
