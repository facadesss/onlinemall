<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" class="tab"
      @tabClick="tabClick" ref="tabcontrol1" v-show="isTabFixed"></tab-control>
    <scroll class="home-content" 
    ref="scroll" :probe-type="3"
    @homescroll="homescroll"
    :pull-up-load="true"
    @pullingup="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-views :recommends="recommends">
      </recommend-views>
      <feature-views></feature-views>
      <tab-control :titles="['流行', '新款', '精选']"
      @tabClick="tabClick" ref="tabcontrol2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- native修饰符 -->
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'

  import TabControl from '@/components/content/tabcontrol/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import BackTop from '@/components/content/backtop/BackTop'
  // 引入对home封装的axios
  
  import HomeSwiper from '@/views/home/childComps/HomeSwiper'
  import RecommendViews from '@/views/home/childComps/RecommendViews'
  import FeatureViews from '@/views/home/childComps/FeatureViews'

  import { getHomeMultidata, getHomeGoodsData } from '@/network/home/home'
  
  import {debounce} from '@/common/utils'
  import {itemImgListenerMixin} from '@/common/mixin'
  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommends: null,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
    },
    mixins: [itemImgListenerMixin],
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    // 组件一旦创建就发送网络请求
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    mounted() {
    },
    activated() {
      console.log('activated');
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      
    },
    deactivated() {
      console.log('deactivated');
      // 保留Y值
      console.log(this.saveY);
      this.saveY = this.$refs.scroll.getScrollY()

      // 取消全局事件监听
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      // 事件监听相关方法
      tabClick(index) {
        // console.log(i);
        // console.log(typeof i);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },
      // 网络请求相关的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsData(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page++

          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      backClick() {
        // console.log('back');
        this.$refs.scroll.scrollTo(0, 0)
      },
      homescroll(position) {
        // console.log(position);
        // 1.判断backTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop - 44
      },
      loadMore() {
        this.getHomeGoodsData(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    height: 100vh;
  }
  .home-nav {
    /* position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1; */
    background-color: var(--color-tint);
    color: #fff;
  }
  
  .home-content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .tab {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff;
  }
</style>
