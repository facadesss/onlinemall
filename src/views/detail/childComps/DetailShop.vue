<template>
  <div class="detail-shop">
    <div class="shop-base-info">
      <a href="javascript:;"><img :src="shop.logo" alt=""></a>
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-other-info">
      <div class="shop-goods-sell">
      <div class="shop-sell">
        <div class="sell-count">{{shop.sells}}</div>
        <div class="sell-title">总销量</div>
      </div>
      <div class="shop-goods">
        <div class="goods-count">{{shop.goodsCount}}</div>
        <div class="goods-title">全部宝贝</div>
      </div>
    </div>
    <div class="shop-score">
      <div class="shop-score-item" v-for="(item, index) in shop.score" :key="index">
        <span>{{item.name}}</span>
        <span class="score-better" :class="{scorebettermore: item.isBetter}">{{item.score}}</span>
        <span class="better" :class="{bettermore: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
      </div>
    </div>
    </div>
    <div class="enter-shop">
      进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    },
    moreImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail-shop {
    border-bottom: 6px solid #e4e4e4;
  }
  .shop-base-info {
    padding: 20px 10px;
  }
  .shop-base-info img {
    vertical-align: middle;
    margin-right: 10px;
    width: 40px;
  }
  .shop-other-info {
    display: flex;
  }
  .shop-goods-sell,
  .shop-score {
    flex: 1;
  }
  .shop-goods-sell {
    margin: 10px;
    display: flex;
    border-right: 2px solid #e4e4e4;
  }
  .shop-goods,
  .shop-sell {
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .sell-count,
  .goods-count {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .shop-score {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
  }
  .shop-score-item {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 6px;
  }
  .score-better {
    color: green;
  }
  .scorebettermore {
    color: red;
  }
  .better {
    color: #fff;
    background-color: green;
  }
  .bettermore {
    background-color: red;
  }
  .enter-shop {
    margin: 10px auto 20px;
    width: 120px;
    height: 30px;
    border-radius: 10px;
    background: #e4e4e4;
    text-align: center;
    line-height: 30px;
  }
</style>