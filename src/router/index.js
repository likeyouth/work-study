import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/User/Login.vue";
import UserInfo from "../views/User/UserInfo.vue";
import NotifyDetail from "../components/notify/NotifyDetail.vue";
import CheckWork from "../views/checkWork/CheckWork.vue"
import Employment from "../views/employment/Employment.vue"
import EmployDetail from "../views/employment/EmployDetail.vue"
import Resign from "../views/checkWork/Resign.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index,
        meta: {
            keepalive: true,
            showTabbar: true
        }
    },
    {
        path: "/detail/:detailId",
        name: "NotifyDetail",
        component: NotifyDetail
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/userInfo",
        name: "UserInfo",
        component: UserInfo,
        meta: {
            keepalive: true,
            showTabbar: true
        }
    },
    {
        path: "/employment",
        name: "Employment",
        component: Employment,
        meta: {
            keepalive: true,
            showTabbar: true
        }
    },
    {
        path: "/checkWork",
        name: "CheckWork",
        component: CheckWork,
        meta: {
            keepalive: true,
            showTabbar: true
        }
    },
    {
        path: "/resign",
        name: "Resign",
        component: Resign
    },
    {
        path: "/employDetail/:detailId/publisher/:name",
        name: "EmployDetail",
        component: EmployDetail
    }
];

const router = new VueRouter({
    routes
});

export default router;