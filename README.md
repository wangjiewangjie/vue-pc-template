# <div id="top">目录</div>

* [✅  功能](#function) 
* [✅  目录结构](#directoryStructure)
* [✅  安装](#dev)
* [✅  发布](#build)
* [✅  ElementUI 组件按需加载](#element)
* [✅  Sass 全局样式](#scss)
* [✅  Axios 封装及接口管理](#axios)
* [✅  Vue-router](#router)
* [✅  富文本](#editor)
* [✅  Excel](#excel)
* [✅  ECharts 图表](#ECharts)
* [✅  简易骨架屏](#skeleton)
* [✅  工具函数](#utils)
* [✅  Nginx 代理](#nginx)

### <div id="function">✅ 功能</div>

``` 
* 登录

* 全局功能
  + 动态侧边栏（支持多级路由嵌套）
  + 动态面包屑
  + 本地 mock 数据
  + 收缩侧边栏

* 编辑器
  + 富文本

* Excel
  + 导出excel

* 表格
  + 动态表格

* 错误页面
  + 404

* ECharts 图表
* 简易骨架屏
* Nginx配置

```

### <div id="directoryStructure">✅ 目录结构</div>

``` 
├─ mock                     # 项目mock 模拟数据
├─ nginx                    # nginx反向代理配置
├─ public                   # 静态资源
│  ├─ icon                  # iconfont图标
│  ├─ tinymce               # 富文本编辑器
│  ├─ favicon.ico           # favicon图标
│  └─ index.html            # html模板
├─ src                      # 源代码
│  ├─ api                   # 所有请求
│  ├─ assets                # 主题 图片等静态资源
│  ├─ components            # 全局公用组件
│  ├─ plugins               # 全局插件
│  ├─ router                # 路由
│  ├─ store                 # 全局 store管理
│  ├─ styles                # 全局样式
│  ├─ utils                 # 全局公用方法
│  ├─ vendor                # 公用vendor
│  ├─ views                 # views 所有页面
│  ├─ APP.vue               # 入口页面
│  └─ main.js               # 入口文件 加载组件 初始化等
├─ vue.config.js            # vue-cli 配置
```

### <div id="dev">✅  安装</div>

``` 
# 克隆项目
git clone https://github.com/wangjiewangjie/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```

[▲ 回顶部](#top)

### <div id="build">✅  发布</div>

``` 
# 构建生产环境
npm run build
```

[▲ 回顶部](#top)

### <div id="element">✅  ElementUI 组件按需加载</div>

项目采用[ElementUI 按需引入 (推荐)](https://element.eleme.cn/#/zh-CN/component/quickstart)

[▲ 回顶部](#top)

### <div id="scss">✅  Sass 全局样式</div>

#### 公共样式

公共样式都在 `@/src/styles` 目录下设置

``` 
│  ├─ styles            
│  │  ├─ _var.scss                   # 全局变量
│  │  ├─ reset.css                   # 样式重置
```

#### 全局变量

`vue.config.js` 中的 `css.loaderOptions` 选项

``` javascript
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
                data: `@import "~@/variables.sass"`
            }
        }
    }
}
```

[▲ 回顶部](#top)

### <div id="axios">✅  Axios 封装及接口管理</div>

`utils/requset.js` axios的封装

``` javascript
const service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: process.env.NODE_ENV === "production" ? "" : "",
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        /**
         * @param {Object} config.data [请求主体被发送的数据 拦截混入公共参数]
         * @param {Boolean} config.hideloading [请求时是否显示Loading]
         */
        if (!config.hideloading) {
            loadingInstance = Loading.service({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        }
        return config;
    },
    error => {
        // 请求失败
        return Promise.reject(error);
    }
);
```

`api/api.js` 统一管理接口

``` javascript
/**
 * @param {String} url [请求的服务器 URL]
 * @param {String} ${api} [开发环境下代理服务器的主机名称和端口]
 * @param {String} method [请求时使用的方法]
 * @param {Object} data [请求主体被发送的数据]
 * @param {Boolean} hideloading [请求时是否显示Loading true隐藏 false显示]
 */
export function Api(data) {
    return request({
        url: `${api}Api` ,
        method: "get",
        data,
        hideloading: false
    });
}
```

[▲ 回顶部](#top)

### <div id="router">✅  Vue-router</div>

``` javascript
const routes = [{
    path: "*",
    name: "Error",
    component: () =>
        import(
            /* webpackChunkName: "error", webpackPrefetch: true */
            "../views/Error/Error.vue"
        ), // 路由懒加载 webpackChunkName分包名称 webpackPrefetch 手动选择要提前获取的代码区块
    meta: {
        title: "页面不存在", // 页面title
        keepAlive: false // keep-alive 标识
    }
}]

const router = new VueRouter({
    mode: "history", //配置history需要nginx配置 hash模式 需要配置 vue.config.js publicPath
    routes
});

/* 路由发生变化修改页面title */
router.afterEach(to => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});
```

[▲ 回顶部](#top)

### <div id="nginx">✅  Nginx 代理</div>

路由history模式下配置Nginx

``` javascript
const router = new VueRouter({
    mode: "history", //配置history需要nginx配置
    routes
});
```

``` javascript
location / {
    try_files $uri $uri / /index.html; #路由history配置
}
```

[▲ 回顶部](#top)
