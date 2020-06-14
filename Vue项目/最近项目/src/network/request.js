// 封装数据请求
// 引入axios及封装
import axios from 'axios'
// 定义并导出请求函数request()
export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/n3',
            timeout: 5000
        });
        //axios的拦截器
        instance.interceptors.request.use(config => {
            return config
        }, err => {
            return err
        })

        instance.interceptors.response.use(response => {
            // console.log('来到了response拦截success中');
            return response.data
        }, err => {
            console.log('来到了response拦截failure中');
            console.log(err);
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                }
            }
            return err
        })

        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

