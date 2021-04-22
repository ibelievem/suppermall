<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>

    <!--  填充内容，使得界面可以向下滚动  -->
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>

// 导入公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

// 导入子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 导入方法
import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  components:{
    // 注册公共组件
    NavBar,
    TabControl,

    // 注册子组件
    HomeSwiper,
    RecommendView,
    FeatureView,

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
      this.recommends = res.data.recommend.list;
      // console.log(res.data.recommend.list);
      // console.log(res.data.banner.list);
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

  /* 原生解决滚动的问题 */
  #home {
    padding-top: 44px;
  }

</style>
