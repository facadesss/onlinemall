<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import ObserveDOM from '@better-scroll/observe-dom'
  BScroll.use(Pullup)
  BScroll.use(ObserveDOM)
  
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.init()
      this.scrolling()
      this.pullUp()
    },
    methods: {
      init() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          observeDOM: true,
          pullUpLoad: this.pullUpLoad,
          // probeType: 3
          probeType: this.probeType
        })
        console.log(this.scroll);
      },
      scrolling() {
        this.scroll.on('scroll', (position) => {
        // console.log(position);
          this.$emit('homescroll', position)
        })
      },
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        console.log('-------');
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      pullUp() {
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载更多');
          this.$emit('pullingup')
        })
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
  
</style>