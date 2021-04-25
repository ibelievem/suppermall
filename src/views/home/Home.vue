<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control"></tab-control>

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
      titles:["流行","新款","精选"],

      // js中的json数据格式中的key最好都带上引号
      // 设计商品的数据结构模型
      goods:{
        "pop":{"page":0,"list":[]},
        "news":{"page":0,"list":[]},
        "sell":{"page":0,"list":[]},
      }
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
      console.log(res.data)
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

  /* 原生方法解决滚动的问题 */
  #home {
    padding-top: 44px;
  }

  /* 原生方法解决吸顶效果 */
  .tab-control {
    position:sticky;
    top:44px;
  }

</style>
