<template>
  <div id="tab-bar" class="ignore">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  
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
