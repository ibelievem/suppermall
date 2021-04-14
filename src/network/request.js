import axios from 'axios'

export function request(config) {
  // 1、创建axios的实例
    const instance = axios.create({
        baseURL: "http://106.54.54.237:8000/",
        timeout: 5000,
    });

    // 2、axios 拦截器
    //请求拦截器
    instance.interceptors.request.use(config => {
       // console.log(config);
        return config;
    }, err => {
        console.log(err);
    });

    // 响应式拦截
    // 响应中的数据转化，只过滤data数据
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    });

    // 3、发送真正的网络请求
    return instance(config);
}
