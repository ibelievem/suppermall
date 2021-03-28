<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";


  export default {
    name: 'App',
    components: {
      MainTabBar

    }
  }
</script>

<style>
/*没有使用别名*/
/*@import './assets/css/base.css';*/

/*使用别名导入，文件的路径方便查找*/
@import 'assets/css/base.css';

</style>
