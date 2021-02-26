<template>
  <div class="goods-list-item" @click="itemClick">
    <a href="javascript:;"><img v-lazy="showImage" alt="" @load="imgLoad"></a>
    <div>
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
      // console.log('img');
    },
    itemClick() {
      console.log('点击了');
      this.$router.push('/detail/' + this.goodsitem.iid)
      // this.$router.push({
      //   path: '/detail',
      //   query: {

      //   }
      // })
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    overflow: hidden;
    /* float: left; */
    width: 146px;
    height: 255px;
    padding-bottom: 50px;
    font-size: 12px;
  }
  .goods-list-item img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .goods-list-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    color: orange;
  }
</style>