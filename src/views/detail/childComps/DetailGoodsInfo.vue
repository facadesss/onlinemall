<template>
  <!-- 这个地方不添加v-if的话可能会报错 -->
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="goods-info-header">
      <p>{{detailInfo.desc}}</p>
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="goods-info-content">
      <div v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" class="goods-info-item">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        if (++this.counter == this.imagesLength) {
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    border-bottom: 10px solid #e4e4e4;
  }
  .goods-info-item img {
    width: 100%;
  }
</style>