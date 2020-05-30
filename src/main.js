import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Dialog } from 'vant';
import { Notify } from 'vant';
import { Toast } from 'vant';
import Vant from "vant";
import "vant/lib/index.css";
import http from "@/utils/http.js";

Vue.config.productionTip = false;


Vue.use(Vant);
Vue.prototype.$ajax = http;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$notify = Notify;
Vue.prototype.$toast = Toast

// 用户未登录则自动跳转到登录页面
router.beforeEach((to, from, next) => {
    let userId = localStorage.getItem('userId')
    if (!userId && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");