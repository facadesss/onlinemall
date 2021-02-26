<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cart {
    height: 100vh;
  }
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 14px;
  }
</style>
