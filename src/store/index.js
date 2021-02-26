import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装插件
Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters,
  mutations,
    // 该方法有问题！！
    // let index = state.cartList.indexOf(payload)
    // if (index !== -1) { 
      
    //   payload.count = 1
    //   payload.checked = true
    //   state.cartList.push(payload)
    // } else {
    //   let oldProduct = state.cartList[index]
    //   oldProduct.count += 1
    // }
  actions
})

export default store