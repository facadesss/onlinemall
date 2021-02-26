<template>
  <div class="back-top">
    <img src="@/assets/imgs/home/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    bottom: 55px;
    right: 8px;
    z-index: 999;
    text-align: right;
  }
  .back-top img {
    width: 50%;
  }
</style>