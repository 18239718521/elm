import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
          path: '',
          name: 'login',
          redirect: '/login'
        },
        {
          path: '/login',
          name: 'login',
          component: resolve => require(['../components/backLogin/Login.vue'],resolve)
        },
        {
          path: '/manage',
          name: 'manage',
          component: resolve => require(['../components/backData/Manage.vue'],resolve),
          children:[
            {
              path: '/food',
              name: 'food',
              component: resolve => require(['../components/dataManage/FoodList.vue'],resolve)
            },
            {
              path: '/home',
              name: 'home',
              component: resolve => require(['../components/backData/Home.vue'],resolve)
            },
            {
              path: '/user',
              name: 'user',
              component: resolve => require(['../components/backData/UserList.vue'],resolve)
            },
            {
              path: '/shop',
              name: 'shop',
              component: resolve => require(['../components/backData/ShopList.vue'],resolve)
            },
            {
              path: '/order',
              name: 'order',
              component: resolve => require(['../components/backData/OrderList.vue'],resolve)
            },
            {
              path: '/anmin',
              name: 'anmin',
              component: resolve => require(['../components/backData/AnminList.vue'],resolve)
            },
            {
              path: '/addShop',
              name: 'addShop',
              component: resolve => require(['../components/addData/AddShop.vue'],resolve)
            },
            {
              path: '/addGoods',
              name: 'addGoods',
              component: resolve => require(['../components/addData/AddGoods.vue'],resolve)
            },
            {
              path: '/adminSet',
              name: 'adminSet',
              component: resolve => require(['../components/adminSet/AdminSet.vue'],resolve)
            },
          ]
        },
        {
          path: '/nav',
          name: 'nav',
          component: resolve => require(['../components/backNav/Nav.vue'],resolve)
        },
      ]
    }
  ]
})
