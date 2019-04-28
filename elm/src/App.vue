<template>
  <div id="app">
    <transition name='fade' mode='out-in'>
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './style/common';
.fade-enter-active, .fade-leave-active {  //进入和离开的过程
	  	transition: opacity .5s;
	}
	.fade-enter, .fade-leave{          //完全进入 完全离开
	  	opacity: 0;
	}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
}
</style>
