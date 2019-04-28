<template>
<div id="list">
    <div>
        <el-table
            :header-cell-style="tab"
            :cell-style="tabs"
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="食品名称">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="餐馆名称">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="食品ID">
                    <span>{{ props.row.item_id }}</span>
                </el-form-item>
                <el-form-item label="餐馆ID">
                    <span>{{ props.row.restaurant_id }}</span>
                </el-form-item>
                <el-form-item label="食品介绍">
                    <span>{{ props.row.description }}</span>
                </el-form-item>
                <el-form-item label="餐馆地址">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="食品评分">
                    <span>{{ props.row.rating }}</span>
                </el-form-item>
                <el-form-item label="食品分类">
                    <span>{{ props.row.rating }}</span>
                </el-form-item>
                <el-form-item label="月销量">
                    <span>{{ props.row.month_sales }}</span>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="食品名称"
            prop="name">
            </el-table-column>
            <el-table-column
            label="食品介绍"
            prop="description">
            </el-table-column>
            <el-table-column
            label="评分"
            prop="rating">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="20"
            layout="total, prev, pager, next"
            background
            :total="1086">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
          tableData:[]
      }
    },
    beforeMount () {
        this.axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined")
        .then(res=>{
            if(res.data){
                this.tableData=res.data
            }
        })
    },
    methods: {
        tab(){
            return 'background:#eef1f6;color:black;font-weight:bold;text-align:center;'
        },
        tabs(){
            return 'text-align:center;'
        },
        //分页跳转
        handleCurrentChange(page){
            this.axios.get("https://elm.cangdu.org/shopping/v2/foods?offset="+page*20+"&limit=20&restaurant_id=undefined")
            .then(res=>{
                if(res.data){
                    this.tableData=res.data
                }
            })
        },
        //删除提示
        handleDelete(){
            this.$message.error('亲，你没有权限哦')
        }
    }
  }
</script>
<style lang="scss" scoped>
#list{
    width: 100%;
    height: 100%;
    &>div{
        width: 100%;
        margin: 0 auto;
    }
    .page{
        text-align: left;
        padding-top:15px; 
    }
}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf; 
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table{
      border: 1px solid #DFE6EC;
  }
</style>