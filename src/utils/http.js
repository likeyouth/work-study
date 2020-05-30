// import Vue from 'vue'
import Axios from "axios";
// import router from '/src/router'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const http = Axios.create({
    baseURL: "http://94.191.90.221:8100/mock/46/api",
    withCredentials: true
});

http.interceptors.request.use(
    function(config) {
        // 加载进度条
        NProgress.start();
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    function(config) {
        // 结束加载进度条
        NProgress.done();
        return config;
    },
    function(err) {
        NProgress.done();
        return Promise.reject(err);
    }
);

export default http;