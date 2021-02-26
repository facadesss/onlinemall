<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="first-table" cellspacing=0>
      <tbody>
        <tr v-for="(item, index) in paramsInfo.sizes[0]" :key="index">
          <td v-for="(value, num) in item" :key="num" nowrap="nowrap">{{value}}</td>
        </tr>
      </tbody>
    </table>
    <table class="second-table" cellspacing=0>
      <tbody>
        <tr v-for="(item, index) in paramsInfo.infos" :key="index">
          <td nowrap="nowrap">{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .first-table,
  .second-table {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 20px;
  }
  .first-table td,
  .second-table td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .first-table tr td:nth-child(1) {
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .first-table tr td:nth-child(n+2) {
    padding-right: 36px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .second-table tr td:nth-child(1) {
    padding-right: 60px;
    
  }
  .second-table tr td:nth-child(2) {
    color: var(--color-high-text);
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>