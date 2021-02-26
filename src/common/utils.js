export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function dateFormat(date) {
  var dat = new Date(date * 1000)
  var y = dat.getFullYear()
  var m = dat.getMonth() + 1
  var d = dat.getDate()
  return `${y}-${m}-${d}`
}