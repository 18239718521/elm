<template>
    <div id="manage">
        <el-container>
            <el-aside width="16.5%"><Nav></Nav></el-aside>
            <el-container>
                <el-header height="70px"><Header></Header></el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Nav from '../backNav/Nav'
import Header from '../header/Header'
export default {
  components: {
    Nav,
    Header
  }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #EFF2F7;
  }
  
  .el-aside {
    background-color: #324057;
  }
  
  .el-main {
    background-color: #FFFFFF;
    text-align: center;
  }
  #manage{
      width: 100%;
      height: 100%;
      .el-container{
          width: 100%;
          height: 100%;
      }
  }
</style>
