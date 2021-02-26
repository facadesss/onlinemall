<template>
  <div class="ignore tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>    
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      console.log(this.path);
      this.$router.push(this.path).catch(err => err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-bar-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    display: block;
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    /* vertical-align: middle; */
  }
</style>
