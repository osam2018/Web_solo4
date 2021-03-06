import Vue from 'vue'
import App from './App.vue'
import Mypage from './views/MyPage.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from "axios";
Vue.$http = axios;

Vue.prototype.$http = axios;
import Model from "./model/Model";
window.$model = Model.getInstance();
window.$globalBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
//
// new Vue({
//     router,
//     render: h => h(Mypage)
// }).$mount('.Mypage')
