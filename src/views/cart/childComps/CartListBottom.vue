<template>
  <div class="cart-list-bottom">
    <div class="checkall-box"><input type="checkbox" name="" id="" :checked="isAllChecked" @click="checkallclick"></div>
    <div class="total-price">合计：{{totalPrice}}</div>
    <div class="calculate" @click="showToast">去结算({{checkLength}})</div>
  </div>
</template>

<script>
  export default {
    name: 'CartListBottom',
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      isAllChecked() {
        return this.cartList.length === 0 ? false : !this.cartList.some(value => value.checked === false)
      },
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((prevalue, item) => {
          return prevalue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
    },
    methods: {
      checkallclick() {
        this.$store.commit('allChange', this.isAllChecked)
      },
      showToast() {
        if (!this.isAllChecked) {
          this.$toast.show('请选择您要购买的商品', 2000)
        }
      }
    }
  }
</script>

<style scoped>
  input {
    margin-top: 10px;
    width: 20px;
    height: 20px;
  }
  .cart-list-bottom {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #eee;
    box-shadow: 0 -4px 8px rgba(0,0,0,0.05);
  }
  .checkall-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
  }
  .total-price {
    padding: 0 100px 0 40px;
    height: 40px;
    color: orange;
    
  }
  .calculate {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 40px;
    background-color: orange;
    color: #fff;
  }
</style>