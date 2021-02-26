<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="detailnavbar"></detail-nav-bar>
    <!-- <ul>
      <li v-for="(item, index) in $store.state.cartList" :key="index"></li>
    </ul> -->
    <scroll class="detail-scroll-content" ref="scroll" @homescroll="detailscroll"
    :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info ref="params" :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <transition>
      <toast :message="message" :isShow="isShow"></toast>
    </transition> -->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShop from './childComps/DetailShop'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import GoodsList from '@/components/content/goods/GoodsList'

  import {getDetailData, getRecommend,Goods, Shop, GoodsParams} from '@/network/detail/detail'

  import Scroll from '@/components/common/scroll/Scroll'

  import {debounce} from '@/common/utils'
  import {itemImgListenerMixin, backTopMixin} from '@/common/mixin'

  // import Toast from '@/components/common/toast/Toast'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [],
        currentIndex: 0,
        // message: '',
        // isShow: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      // Toast
      
    },
    mixins: [itemImgListenerMixin, backTopMixin],
    created() {
      console.log('created');
      this.iid = this.$route.params.iid
      console.log(this.$route.params);

      // 请求详情数据
      getDetailData(this.iid).then(res => {
        console.log(res);
        console.log(res.data.result.itemInfo.topImages);

        // 获取初始化数据
        const data = res.data.result
        // 获取顶部图片数据
        this.topImages = data.itemInfo.topImages
        
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 获取商品详细信息
        this.detailInfo = data.detailInfo

        this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)

        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

        // // 第一次获取，值不对
        // // 值不对的原因: this.$refs.params.$el  压根没有渲染
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs);

        // this.$nextTick(() => {
        //   // 第二次获取，值不对
        //   // 值不对的原因: 图片没有计算在内
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs);
        // })
      })
      
      // 请求推荐数据
      getRecommend().then(res => {
        console.log(res);
        const data = res.data.data
        this.recommend = data.list
      })
    },
    mounted() {
      this.$refs.scroll.scrollTo
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
      },
      titleClick(index) {
        // console.log('发送过来了');
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      detailscroll(position) {
        // console.log(position);
        // console.log(position.y);
        // let currentIndex = 0
        // if (-position.y > this.themeTopYs[3]) {
        //   currentIndex = 3
        // } else if (-position.y > this.themeTopYs[2]) {
        //   currentIndex = 2
        // } else if (-position.y > this.themeTopYs[1]) {
        //   currentIndex = 1
        // } else {
        //   currentIndex = 0
        // }
        // this.$refs.detailnavbar.currentIndex = currentIndex


        let length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (-position.y >= this.themeTopYs[i] && -position.y < this.themeTopYs[i + 1])) {
            // console.log(i);
            this.currentIndex = i
            console.log(this.currentIndex);
            this.$refs.detailnavbar.currentIndex = this.currentIndex
          } 
        }

        this.isShowBackTop = (-position.y) > 1000


        // let length = this.themeTopYs.length
        // for (let i = 0; i < length; i++) {
        //   if (this.currentIndex !== i && ((i < length - 1 && -position.y >= this.themeTopYs[i] && -position.y < this.themeTopYs[i + 1]) 
        //   || (i === length - 1 && -position.y >= this.themeTopYs[i]))) {
        //     // console.log(i);
        //     this.currentIndex = i
        //     console.log(this.currentIndex);
        //     this.$refs.detailnavbar.currentIndex = this.currentIndex
        //   } 
        // }
      },
      addToCart() {
        // 数据都保留在父组件内，所以通过子组件发射事件来告诉父组件产生了添加购物车的事件
        // 1.获取购物车需要展示的信息
        const product = {}
        product.iid = this.iid
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.price = this.goods.realPrice
        product.desc = this.goods.desc

        // 2.添加购物车的toast弹出
        // this.$store.commit('addCart', product)
        // console.log(this.$store.state.cartList);
        this.$store.dispatch('addCart',product).then(res => {
          // this.isShow = true
          // this.message = res
          // setTimeout(() => {
          //   this.isShow = false
          // }, 1500)

          this.$toast.show(res, 1500)
          // console.log(this.$toast);
        })
      }
    }
  }
</script>

<style scoped>
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .detail-scroll-content {
    height: calc(100% - 94px);
    overflow: hidden;
  }
</style>
