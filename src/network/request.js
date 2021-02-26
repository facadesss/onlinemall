import axios from 'axios'

// 最终方案
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  
  // 新接口
  // http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1

  // 2.1 axios的请求拦截
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  //   // 使用拦截的几种情形
  //   // 1.config中的一些信息不符合服务器的要求
  //   // 2.每次发送网络请求的时候时,都希望在界面中显示一个请求的图标
  //   // 3.某些网络请求(比如登录 token),必须携带一些特殊的信息

  //   // 一定要记得返回config  否则会被拦截
  //   return config
  // }, err => {
  //   console.log(err);
  // });

  // 2.2 axios的响应拦截
  // instance.interceptors.response.use(res => {
  //   // console.log(res);
  //   return res.data
  // }, err => {
  //   console.log(err);
  // })

  // 3.发送真正的网络请求
  // 返回的就是一个promise
  return instance(config)
}

// // 方法3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
  
//     instance1(config.url)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 方法2
// export function request(config) {
//   // 创建axios的实例

  // const instance1 = axios.create({
  //   baseURL: 'http://123.207.32.32:8000',
  //   timeout: 5000
  // })

  // instance1(config.url)
  //   .then(res => {
  //     // console.log(res);
  //     config.success(res)
  //   }).catch(err => {
  //     // console.log(err);
  //     config.failure(err)
  //   })
// }

// 方法1
// export function request(config, success, failure) {
//   // 创建axios的实例

//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance1(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     }).catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }
