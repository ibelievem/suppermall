<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";

import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      // 变量接收响应的数据
      banners:[],
      recommends:[],
    }
  },
  // 组件创建完发送网络请求
  created() {
    // 1、请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res)
      // 将响应的数据保存在变量中
      this.banners = res.data.banner.list;
      // console.log(res.data.banner.list)
      // console.log(res.data.banner)
      // console.log(res.data)
      // console.log(res)
      // console.log(res.data.banner.list)
      // this.recommends = res.data.recommend.list;
      // console.log(res.data.recommend.list)
    })
  }
}
</script>

<style scoped>
  .home-nav {
    /* 使用变量 */
    background-color: var(--color-tint);
    color: white;
  }

</style>
