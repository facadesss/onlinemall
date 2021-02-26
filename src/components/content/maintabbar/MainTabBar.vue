<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="@/assets/imgs/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/imgs/tabbar/icon1.png" alt="">
        <span slot="item-text" >首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/imgs/tabbar/net.png" alt="">
        <img slot="item-icon-active" src="@/assets/imgs/tabbar/icon2.png" alt="">
        <span slot="item-text">分类</span> 
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/imgs/tabbar/ms.png" alt="">
        <img slot="item-icon-active" src="@/assets/imgs/tabbar/icon3.png" alt="">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/imgs/tabbar/user.png" alt="">
        <img slot="item-icon-active" src="@/assets/imgs/tabbar/icon4.png" alt="">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #f2f2f2;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
