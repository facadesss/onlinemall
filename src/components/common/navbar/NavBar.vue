<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name=center></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    line-height: 44px;
  }
  .left {
    width: 40px;
    height: 44px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .right {
    width: 40px;
    height: 44px;
  }
</style>