# <div id="top">目录</div>

* [✅  功能](#function) 
* [✅  目录结构](#directoryStructure)
* [✅  安装](#dev)
* [✅  发布](#build)
* [✅  vue.config.js](#config)
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

[▲ 回顶部](#top)

### <div id="nginx">✅  Nginx 代理</div>

[▲ 回顶部](#top)

