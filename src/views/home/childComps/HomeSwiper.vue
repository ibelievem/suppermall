<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 轮播图的抽离
// 导入轮播图组件
import {Swiper,SwiperItem} from 'components/common/swiper/index';

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
