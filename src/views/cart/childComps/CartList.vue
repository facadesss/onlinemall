<template>
  <div class="cart-list">
    <scroll class="cart-scroll-content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" @iptclick="iptClick"></cart-list-item>
    </scroll>
    <cart-list-bottom :cartList="cartList"></cart-list-bottom>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import CartListBottom from './CartListBottom'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem,
    CartListBottom
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    iptClick(item) {
      console.log('点击复选框传入了', item);
      const index = this.cartList.indexOf(item)
      console.log(index);
      this.$store.commit('checkedChange', index)
    }
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 94px)
  }
  .cart-scroll-content {
    height: calc(100% - 40px);
    overflow: hidden;
  }
</style>