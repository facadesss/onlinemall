<template>
  <div class="cart-list-item">
    <div class="prod-ticked">
      <input type="checkbox" name="" id="" :checked="product.checked" @click="iptClick">
    </div>
    <div class="prod-img"><img :src="product.image" alt=""></div>
    <div class="prod-side">
      <h3>{{product.title}}</h3>
      <p>{{product.desc}}</p>
      <div class="prod-price"><span>￥{{product.price}}</span><span>×{{product.count}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    iptClick() {
      // this.product.checked = !this.product.checked
      this.$emit('iptclick', this.product)
    }
  }
  
}
</script>

<style scoped>
  
  .cart-list-item {
    overflow: hidden;
    padding: 15px 0;
    border-bottom: 2px solid #eee;
  }
  .prod-ticked,
  .prod-img,
  .prod-side {
    float: left;
  }
  .prod-ticked {
    padding: 40px 10px 0 10px;
  }
  
  .prod-img {
    overflow: hidden;
    width: 90px;
    height: 100px;
    border-radius: 10px;
  }
  .prod-img img {
    width: 100%;
    /* height: 100%; */
  }
  .prod-side {
    padding: 0 10px;
    width: 250px;
    height: 100px;
  }
  .prod-side h3,
  .prod-side p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .prod-side p {
    margin-top: 10px;
  }
  .prod-price {
    margin-top: 30px;
  }
  .prod-price span:nth-child(1) {
    float: left;
    color: orange;
  }
  .prod-price span:nth-child(2) {
    float: right;
  }
</style>