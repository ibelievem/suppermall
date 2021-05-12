<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>

    <!--  本周流行的信息  -->
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control"></tab-control>

    <!--  展示流行的数据  -->
    <goods-list :goods="goods['pop'].list"></goods-list>

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
  import GoodsList from "../../components/content/goods/GoodsList";


  // 导入方法
  import {
    getHomeMultidata,
    getHomeGoods
    } from "network/home";

  export default {
    name: "Home",
    components: {
      // 注册公共组件
      NavBar,
      TabControl,

      // 注册子组件
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,

    },
    data() {
      return {
        // 变量接收响应的数据
        banners: [],
        recommends: [],
        titles: ["流行", "新款", "精选"],

        // js中的json数据格式中的key最好都带上引号
        // 设计商品的数据结构模型
        goods: {
          "pop": {"page": 0, "list": []},
          "new": {"page": 0, "list": []},
          "sell": {"page": 0, "list": []},
        }
      }
    },
    // 组件创建完发送网络请求，其中只写主要的逻辑
    created() {
      // 1、调用请求多个数据的methods中的函数
      this.getHomeMultidata()

      // 2、调用请求商品数据的函数
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },

    // create()函数中只写主要的逻辑，具体详细的逻辑要在methods中去写
    methods: {
      // 网络请求
      // 1、请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res)
          // 将响应的数据保存在变量中
          // 轮播图中的信息
          this.banners = res.data.banner.list;
          // 推荐信息
          this.recommends = res.data.recommend.list;
          // console.log(res.data)
          // console.log(res.data.recommend.list);
          // console.log(res.data.banner.list);
        })
      },

      // 2、请求商品数据
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        // console.log(page)
        getHomeGoods(type,page).then(res => {
          // res是 pop的前30条数据 page:1
          // ## 将一个数组追加到另一个数组中
          this.goods[type].list.push(...res.data.list)
          // 页码 + 1
          this.goods[type].page += 1
          console.log(this.goods.pop.list)
        })
      }
    }


  }


</script>

<style scoped>
  .home-nav {
    /* 使用变量 */
    background-color:  var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*z-index: 1;*/
  }

  /* 原生方法解决滚动的问题 */
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  /* 原生方法解决吸顶效果 */
  .tab-control {
    position:sticky;
    top:44px;
    z-index: 9;
  }

</style>
