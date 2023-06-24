// import './assets/main.css'

// import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './routers/index';

const app = createApp(App);

// //获取线索
// async getClue () {
//     if(this.query.isRetateClue) {
//         const res = await this.$ajax.sales.fetchClueList({
//             queryType: 6,
//             pageNo: 1,
//             pageSize: 150,
//             groupID: this.query.customerID,
//         })

//         if (res?.success) {
//             const [ clueInfo = {} ] = res?.data?.data ?? []
//             const { address, contactMobile, storeName: shopName } = clueInfo
//             const formInfo = {
//                 shopName,
//                 address,
//                 contactMobile,
//             }

//             this.formInfo = {
//                 ...this.formInfo,
//                 ...formInfo,
//             }
//         }
//     }
// },

// //基于客户id获取线索列表
// fetchClueList: (data) => ajax({
//     url: '/aaa/aaa',
//     data,
// }),

app.use(Antd).mount('#app');
// 5. 创建并挂载根实例

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
