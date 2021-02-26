<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="bottom-service">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bottom-shop">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bottom-collect">
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        console.log('添加到购物车');
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    display: flex;
    height: 50px;
    background-color: #fff;
  }
  .left,
  .right {
    flex: 1;
    display: flex;
  }
  .bottom-service,
  .bottom-shop,
  .bottom-collect {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    height: 50px;
  }
  .add-cart,
  .purchase {
    flex: 1;
    text-align: center;
    line-height: 50px;
    background-color: hotpink;
    height: 50px;
  }
  .add-cart {
    background-color: yellow;
  }
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(~@/assets/imgs/detail/detail_bottom.png) no-repeat 0 0;
    background-size: 20px auto;
  }
  .shop {
    background: url(~@/assets/imgs/detail/detail_bottom.png) no-repeat 0 -89px;
    background-size: 20px auto;
  }
  .service {
    background: url(~@/assets/imgs/detail/detail_bottom.png) no-repeat 0 -48px;
    background-size: 20px auto;
  }
</style>