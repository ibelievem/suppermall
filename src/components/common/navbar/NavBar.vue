<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    /*没有内容时，可以设置用来测试；有内容会自动撑起来高度的*/
    height: 44px;
    line-height: 44px;
    text-align: center;
    /* 增加阴影 */
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left,.right {
    width: 60px;
    /*测试使用*/
    /*background-color: red;*/
  }
  .center {
    flex: 1;
    /*测试使用*/
    /*background-color: blue;*/
  }

</style>
