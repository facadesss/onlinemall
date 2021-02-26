<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- <transition appear> -->
        <router-view></router-view>
      <!-- </transition> -->
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import './assets/css/base.css';
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all .8s;
  }
</style>
