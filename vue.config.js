module.exports = {
    //打包资源路径
    baseUrl: './',
    devServer: {
        //自动打开浏览器
        open: true,
        //热更新
        hot: true,
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                // target: 'http://www.51hygj.com',
                target: 'http://18.182.50.195:8002/api/',
                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    },

};