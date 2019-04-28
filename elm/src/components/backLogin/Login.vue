<template>
    <div id="longin">
        <div class="animated fadeInDown">
            <p>elm后台管理系统</p>
            <div>
                <p><el-input v-model="inp" placeholder="请输入内容"></el-input></p>
                <p><el-input placeholder="请输入密码" v-model="psw" show-password></el-input></p>
                <p><el-button type="primary" @click="login">登录</el-button></p>
                <p><span>温馨提示</span><span>未登陆过的新用户，自动注册</span><span>注册过的用户可凭账号密码登录</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      inp:'',
      psw:''
    }
  },
  methods: {
      login(){
          this.$router.push({path:'/home'})
      }
  }
}
</script>

<style lang="scss" scoped>
#longin{
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: #324057;
    padding-top: 250px;
    &>div:nth-of-type(1){
        width: 400px;
        height: 500px;
        margin: 0 auto;
        &>p{
            color: white;
            font-size: 35px;
            text-align: center;
        }
        div{
            margin-top:50px; 
            width: 400px;
            height: 280px;
            background: white;
            border-radius:5px; 
            P{
                width: 90%;
                height: 50px;
                margin: 0 auto;
            }
            p:nth-of-type(4){
                width: 100%;
                font-size: 10px;
                color: red;
                margin-top:65px; 
                transform: scale(0.8);
                span{
                    display: block;
                    text-align: center;
                }
            }
            .el-input{
                margin-top:30px; 
                height: 45px;
                width: 100%;
            }
            .el-input--suffix{
                padding-top:18px; 
                height: 83px;
            }
            .el-button--primary{
                margin-top:66px; 
                width: 100%;
            }
        }
    }
}
</style>