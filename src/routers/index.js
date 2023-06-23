// 1. 定义路由组件.
import { createRouter, createWebHistory } from 'vue-router'
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
// const Lunbo= { template: '<div>Lunbo</div>' }

import HelloWorld from '../pages/Home.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })


export default router

// 现在，应用已经启动了！