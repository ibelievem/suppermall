<template>
  <div class="goods">
    <!-- 此时的goods已经是list里面的内容,goods-item是 GoodsListItem组件中的属性值  -->
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" class="goods"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components:{
    GoodsListItem,
  },
  props:{
    // 父传子数据
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    /*padding: 2px;*/
  }
</style>
