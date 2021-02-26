<template>
  <div class="detail-swiper">
    <swiper class="detail-content">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <a href="javascript:;">
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'
  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-content {
    height: 300px;
    overflow: hidden;
  }
</style>