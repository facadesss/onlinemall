import {debounce} from './utils'

import BackTop from '@/components/content/backtop/BackTop';

export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    //  监听item中图片加载完成
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log(this.$refs.tabcontrol2.$el);
    console.log('我是混入的');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      // console.log('back');
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
