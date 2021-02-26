<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-info-header">
      <span>用户评价</span>
      <a href="javascript:;">更多</a>
    </div>
    <div class="comment-info-content">
      <div class="user-info" v-if="commentInfo.user">
        <img :src="commentInfo.user.avatar" alt="" class="usr-profile">
        <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
      <div class="main-content">
        <p>{{commentInfo.content}}</p>
      </div>
      <div class="content-style">
        <span class="date">{{commentInfo.created | getDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-img">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {dateFormat} from '@/common/utils.js'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  // data() {
  //   return {
  //     date: this.commentInfo.created
  //   }
  // },
  filters: {
    getDate(value) {
      // var date = new Date(value * 1000)
      // var y = date.getFullYear()
      // var m = date.getMonth()
      // var d = date.getDate()
      // return `${y}/${m}/${d}`
      return dateFormat(value)
    }
  }
}
</script>

<style scoped>
  .comment-info-header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e4e4e4;
    border-top: 6px solid #e4e4e4;
  }
  .user-info {
    margin-bottom: 10px;
  }
  .usr-profile {
    width: 50px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .comment-info-content {
    padding: 10px;
  }
  .content-style {
    margin: 10px 0;
  }
  .comment-img img {
    width: 80px;
    height: 80px;
    margin-right: 6px;
  }
</style>