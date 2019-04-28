<template>
    <div id="nav">
        <el-col :span="12">
            <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            background-color="#324057"
            text-color="#BFCBD9"
            active-text-color="#20A0FF">
             <el-menu-item index="1" :index="'/home'">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>数据管理</span>
                </template>
                <el-menu-item index="2-1" :index="'/user'">用户列表</el-menu-item>
                <el-menu-item index="2-2" :index="'/shop'">商家列表</el-menu-item>
                <el-menu-item index="2-3" :index="'/food'">食品列表</el-menu-item>
                <el-menu-item index="2-4" :index="'/order'">订单列表</el-menu-item>
                <el-menu-item index="2-5" :index="'/anmin'">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-plus"></i>
                <span>添加数据</span>
                </template>
                <el-menu-item index="3-1" :index="'/addShop'">添加商铺</el-menu-item>
                <el-menu-item index="3-2" :index="'/addGoods'">添加商品</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>图表</span>
                </template>
                <el-menu-item index="4-1">用户分布</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                <i class="el-icon-edit"></i>
                <span>编辑</span>
                </template>
                <el-menu-item index="4-1">文本编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>设置</span>
                </template>
                <el-menu-item index="6-1" :index="'/adminSet'">管理员设置</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                <i class="el-icon-warning"></i>
                <span>说明</span>
                </template>
                <el-menu-item index="7-1">说明</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
    data () {
        return {
           
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
.el-col-12{
    width: 100%;
    height: 100%;
}
.el-menu-vertical-demo{
    height: 100%;
}
.el-menu--inline{
    li{
        background: #1F2D3D !important;
    }
}
.el-submenu__title i{
    color: #BFCBD9;
}
#nav{
    width: 100%;
    height: 100%;
}
</style>
