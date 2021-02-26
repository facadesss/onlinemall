<template>
  <div id="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">
      <h3>{{goods.title}}</h3>
    </div>
    <div class="price-info">
      <span class="new-price">{{goods.realPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="desc-info">{{goods.desc}}</span>
    </div>
    <div class="sales-info">
      <div v-for="(item, index) in goods.columns" :key="index">{{item}}</div>
    </div>
    <div class="service-info">
      <span v-for="(item, index) in goods.services" :key="index" class="service-info-item">
        <img :src="item.icon" alt="" v-if="item.icon">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .title {
    padding: 10px 8px;
  }
  .price-info {
    padding: 16px 4px;
  }
  .price-info .new-price {
    color: var(--color-high-text);
    font-size: 22px;
    font-weight: 700;
  }
  .price-info .old-price {
    text-decoration: line-through;
  }
  .desc-info {
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 60px;
    padding: 4px 6px;
    background-color: var(--color-tint);
    border-radius: 10px;
    color: #fff;
  }
  .sales-info {
    display: flex;
    padding: 8px 4px;
    justify-content: space-between;
  }
  .service-info {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 56px;
    line-height: 50px;
    border-top: 2px solid #e4e4e4;
    border-bottom: 4px solid #e4e4e4;
    font-size: 12px;
  } 
  .service-info-item {
    text-align: left;
    margin: 0 2px;
  }
  .service-info img {
    width: 10px;
  }
</style>