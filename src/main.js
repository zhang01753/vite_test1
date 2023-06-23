// import './assets/main.css'

// import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './routers/index';

const app = createApp(App);

app.use(Antd).mount('#app');
// 5. 创建并挂载根实例

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
