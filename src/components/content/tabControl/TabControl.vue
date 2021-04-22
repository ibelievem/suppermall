<template>
  <div class="tab-control">
    <div v-for="item in titles">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "tabControl",
      props:{
        titles:{
          type:Array,

        }
      }
    }
</script>

<style scoped>

</style>
