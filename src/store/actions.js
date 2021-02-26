export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      for (let i of context.state.cartList) {
        if (i.iid === payload.iid) {
          oldProduct = i
        }
      }
      if (oldProduct) {
        context.commit('addCount', oldProduct)
        resolve('当前商品数量加1')
      }
      else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加至购物车')
      }
    })
  },
  
}
