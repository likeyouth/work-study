<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepalive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepalive"></router-view>
            <van-tabbar v-if="$route.meta.showTabbar" active-color="rgb(0, 134, 209)" v-model="active">
                <van-tabbar-item to="/" icon="volume">公告</van-tabbar-item>
                <van-tabbar-item to="/employment" icon="goods-collect">应聘</van-tabbar-item>
                <van-tabbar-item to="/checkWork" icon="sign">考勤</van-tabbar-item>
                <van-tabbar-item to="/userInfo" icon="manager">我的</van-tabbar-item>
            </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: rgb(247, 248, 250);
    }
    #app {
        font-family: "微软雅黑",Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>