# <div id="top">目录</div>

* [✅  功能](#function) 
* [✅  开发](#dev)
* [✅  发布](#build)
* [✅  目录结构](#build)

### <div id="function">✅ 功能</div>

``` 
* 登录

* 全局功能
  + 动态侧边栏（支持多级路由嵌套）
  + 动态面包屑
  + 本地/后端 mock 数据
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
* Clipboard(剪贴复制)
* 简易骨架屏

```

### <div id="dev">✅ 开发</div>

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

### <div id="build">✅ 发布</div>

``` 
# 构建生产环境
npm run build
```

### <span id="element">✅ ElementUI 组件按需加载 </span>

项目采
用[ElementUI 按需引入 (推荐)](https://element.eleme.cn/#/zh-CN/component/quickstart)

### <span id="sass">✅ Sass 全局样式</span>

#### 公共样式

公共样式都在 `@/src/styles` 目录下设置

``` bash
├── styles
│   ├── _var.scss                   # 全局变量
│   ├── reset.css                   # 样式重置
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

### <span id="vuex">✅ Vuex 状态管理</span>

目录结构

``` 
├─mock            # 项目mock 模拟数据
├─nginx           # nginx反向代理配置
├─public          # 静态资源
│  ├─icon         # iconfont图标
│  ├─tinymce      # 富文本编辑器
│  ├─favicon.ico  # favicon图标
│  └─index.html   # html模板
├─src             # 源代码
│  ├─api          # 所有请求
│  ├─assets       # 主题 图片等静态资源
│  ├─components   # 全局公用组件
│  ├─plugins      # 全局插件
│  ├─router       # 路由
│  ├─store        # 全局 store管理
│  ├─styles       # 全局样式
│  ├─utils        # 全局公用方法
│  ├─vendor       # 公用vendor
│  ├─views        # views 所有页面
│  ├─APP.vue      # 入口页面
│  └─main.js      # 入口文件 加载组件 初始化等
├─vue.config.js   # vue-cli 配置
```

`main.js` 引入

``` javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
```

使用

``` html
/src/views/Admin/Admin.vue

<script>
    import {
        mapState,
        mapMutations
    } from "vuex";
    export default {
        computed: {
            ...mapState(["iconCollapse"])
        },
        methods: {
            ...mapMutations(["handleCollapse"])
        }
    };
</script>
```

[▲ 回顶部](#top)

### <span id="router">✅ Vue-router </span>

本案例采用 `hash` 模式，开发者根据需求修改 `mode`  `base`
**注意**：如果你使用了 `history` 模式， `vue.config.js` 中的 `publicPath` 要做对应的**修改**

前往:[vue.config.js 基础配置](#base)

``` javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'), // 路由懒加载
    meta: {
        title: '首页', // 页面标题
        keepAlive: false // keep-alive 标识
    }
}]
const createRouter = () =>
    new Router({
        // mode: 'history', // 如果你是 history模式 需要配置 vue.config.js publicPath
        // base: '/app/',
        scrollBehavior: () => ({
            y: 0
        }),
        routes: router
    })

export default createRouter()
```

更多:[Vue Router](https://router.vuejs.org/zh/)

[▲ 回顶部](#top)

### <span id="axios">✅ Axios 封装及接口管理</span>

`utils/request.js` 封装 axios , 开发者需要根据后台接口做修改。

* `service.interceptors.request.use` 里可以设置请求头，比如设置 `token`
* `config.hideloading` 是在 api 文件夹下的接口参数里设置，下文会讲
* `service.interceptors.response.use` 里可以对接口返回数据处理，比如 401 删除本地信息，重新登录

``` javascript
import axios from 'axios'
import store from '@/store'
import {
    Toast
} from 'vant'
// 根据环境不同引入不同api地址
import {
    baseApi
} from '@/config'
// create an axios instance
const service = axios.create({
    baseURL: baseApi, // url = base api url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request 拦截器 request interceptor
service.interceptors.request.use(
    config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            Toast.loading({
                forbidClick: true
            })
        }
        if (store.getters.token) {
            config.headers['X-Token'] = ''
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        Toast.clear()
        const res = response.data
        if (res.status && res.status !== 200) {
            // 登录超时,重新登录
            if (res.status === 401) {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            }
            return Promise.reject(res || 'error')
        } else {
            return Promise.resolve(res)
        }
    },
    error => {
        Toast.clear()
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
export default service
```

#### 接口管理

在 `src/api` 文件夹下统一管理接口

* 你可以建立多个模块对接接口, 比如 `home.js` 里是首页的接口这里讲解 `user.js`
* `url` 接口地址，请求的时候会拼接上 `config` 下的 `baseApi`
* `method` 请求方法
* `data` 请求参数 `qs.stringify(params)` 是对数据系列化操作
* `hideloading` 默认 `false` , 设置为 `true` 后，不显示 loading ui 交互中有些接口不需要让用户感知

``` javascript
import qs from 'qs'
// axios
import request from '@/utils/request'
//user api

// 用户信息
export function getUserInfo(params) {
    return request({
        url: '/user/userinfo',
        method: 'post',
        data: qs.stringify(params),
        hideloading: true // 隐藏 loading 组件
    })
}
```

#### 如何调用

``` javascript
// 请求接口
import {
    getUserInfo
} from '@/api/user.js'

const params = {
    user: 'sunnie'
}
getUserInfo(params)
    .then(() => {})
    .catch(() => {})
```

[▲ 回顶部](#top)

### <span id="base">✅ Webpack 4 vue.config.js 基础配置 </span>

如果你的 `Vue Router` 模式是 hash

``` javascript
publicPath: './',
```

如果你的 `Vue Router` 模式是 history 这里的 publicPath 和你的 `Vue Router`  `base` **保持一直**

``` javascript
publicPath: '/app/',
```

``` javascript
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
    publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
    //  publicPath: '/app/', // 署应用包时的基本 URL。  vue-router history模式使用
    outputDir: 'dist', //  生产环境构建文件的目录
    assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: !IS_PROD,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        port: 9020, // 端口号
        open: false, // 启动后打开浏览器
        overlay: {
            //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: false,
            errors: true
        }
        // ...
    }
}
```

[▲ 回顶部](#top)

### <span id="alias">✅ 配置 alias 别名 </span>

``` javascript
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};
```

[▲ 回顶部](#top)

### <span id="proxy">✅ 配置 proxy 跨域 </span>

``` javascript
module.exports = {
    devServer: {
        // port: 8080, // 端口号
        // host: "localhost",
        // https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            "/api": {
                target: "<url>", // 接口的域名
                ws: true, // 是否启用websockets
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};
```

[▲ 回顶部](#top)

### <span id="bundle">✅ 配置 打包分析 </span>

``` bash
# NPM 
npm install --save-dev webpack-bundle-analyzer
# Yarn 
yarn add -D webpack-bundle-analyzer
```

``` javascript
module.exports = {
    chainWebpack: config => {
        config
            .plugin("webpack-bundle-analyzer")
            .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
};
```

[▲ 回顶部](#top)

### <span id="externals">✅ 配置 externals 引入 cdn 资源 </span>

``` javascript
const cdn = {
    css: [
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.4.5/theme-chalk/index.css"
    ],
    js: [
        "https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/echarts/4.4.0/echarts.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.4.5/index.js"
    ]
};

module.exports = {
    configureWebpack: {
        /* 修改webpack config, 使其不打包externals下的资源 public/index.html 添加cdn */
        externals: {
            "vue-router": "VueRouter",
            echarts: "echarts",
            "element-ui": "ELEMENT"
        }
    },
    chainWebpack: config => {
        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    /* 生产环境注入cdn */
                    config.plugin("html").tap(args => {
                        args[0].cdn = cdn;
                        return args;
                    });
                })
    }
};
```

在 public/index.html 中添加

``` javascript
  <!-- 使用CDN的CSS文件 -->
  <
  %
  for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) {
      %
      >
      <
      link href = "<%= htmlWebpackPlugin.options.cdn.css[i] %>"
      rel = "preload"
      as = "style" >
          <
          link href = "<%= htmlWebpackPlugin.options.cdn.css[i] %>"
      rel = "stylesheet" >
          <
          %
  } % >
  <
  !--使用CDN的JS文件 -->
      <
      %
      for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) {
          %
          >
          <
          script src = "<%= htmlWebpackPlugin.options.cdn.js[i] %>" > < /script> < %
      } % >
```

[▲ 回顶部](#top)
