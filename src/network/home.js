// 首页的网络请求统一管理
import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}

