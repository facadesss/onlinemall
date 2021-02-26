export default {
  addCount(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  checkedChange(state, payload) {
    state.cartList[payload].checked = !state.cartList[payload].checked
  },
  allChange(state, payload) {
    if (payload) {
      state.cartList.forEach(item => item.checked = false)
    } else {
      state.cartList.forEach(item => item.checked = true)
    }
  }
}
