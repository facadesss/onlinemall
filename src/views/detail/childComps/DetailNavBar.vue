<template>
  <div>
    <nav-bar>
      <div slot="left">
        <div class="return-arrow" @click="returnHome"></div>
      </div>
      <div slot="center" class="detail-classify">
        <div v-for="(item, index) in titles" :key="index" @click="itemClick(index)" :class="{active: currentIndex == index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      returnHome() {
        this.$router.go(-1)
      },
      itemClick(index) {
        console.log(index);
        this.currentIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style scoped>
  .detail-classify {
    display: flex;
    font-size: 14px;
  }
  .detail-classify>div {
    flex: 1;
  }
  .return-arrow {
    position: relative;
  }
  .return-arrow::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 18px;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(45deg);
  }
  .active {
    color: var(--color-high-text);
  }

</style>