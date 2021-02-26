<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link"><img :src="item.image" alt="item.title"></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendViews',
  props: {
    recommends: Array
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80%;
    margin-bottom: 5px;
  }
</style>