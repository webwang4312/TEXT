// 引入request函数
import {request} from './request'
// 获取首页数据
export function getHomeMultidata() {
  // 获得request返回数据
  return request({
    url: '/home/multidata'
  })
}
// 传送type类型\页数
export function  getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
