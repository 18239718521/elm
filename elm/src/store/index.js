import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

//本地存储
import VuePersist from 'vuex-persist'
const vuexLocal=new  VuePersist({
  storage:window.localStorage
})

export default new vuex.Store({
    plugins:[vuexLocal.plugin],//安装插件
    state: { //储存变量

    },
    mutations: { //声明改变数据的方法

    },
  
    getters: { //相当于 state里面数据的 计算属性
 
    },
    actions: {

    },
    modules:{
     
    }
    
  
  })