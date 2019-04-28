// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/rem.js'
import FastClick from 'fastclick'
// import store from './store/index.js'

//浏览器兼容
if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',function(){
    FastClick.attach(document.body)
  },false)
}
//axios 插件
import axios from 'axios'
Vue.prototype.axios=axios
//element样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//animate动画
import animated from 'animate.css'
Vue.use(animated)
//ECharts图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//font文件
// import 'font-awesome/css/font-awesome.css'

//mint ui 样式
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'	
// Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  // store,
}).$mount('#app')
