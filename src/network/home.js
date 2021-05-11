// 首页的网络请求统一管理
import {request} from "./request";


// 首页中 轮播图中的信息、推荐信息
export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}


// 首页中的商品信息：流行、新款、精选
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}




