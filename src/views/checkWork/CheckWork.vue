<template>
    <div class="check-work">
        <top-nav title="考勤" :isShow="false" />
        <div class="clock">
            <van-icon size="100" name="todo-list-o" color="rgb(1, 128, 254)"/>
            <span>
                总工时：40h
            </span>
        </div>
        <van-tabs v-model="active"
        title-active-color="rgb(120,186,251)"
        color="rgb(48, 52, 253)"
        line-width="50%"
        line-height="1px">
            <sign />
            <record />
        </van-tabs>
    </div>
</template>

<script>
    import TopNav from "../../components/common/TopNav.vue"
    import Record from "./Record.vue"
    import Sign from "./Sign.vue"
    export default {
        data() {
            return {
                active: 0
            }
        },
        components: {
            TopNav,
            Sign,
            Record
        },
        computed: {
            getDate() {
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let time = year + '/' + month + '/' + day
                return time
            }
        }
    }
</script>

<style scoped>
    .clock {
        margin-bottom: 10px;
        width: 335px;
        height: 210px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 8px rgb(228, 227, 227);
        background-color: white;
        margin: 20px auto;
    }
    .clock .van-icon {
        margin-top: 40px;
    }
    .clock span {
        margin-top: 10px;
        display: block;
        color: #555;
        font-size: 14px;
    }
</style>>