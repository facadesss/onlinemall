import { request } from '../request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsData(type, page) {
  return request({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    url: '/home/data',
    params: {
      type, 
      page
    }
  })
}
