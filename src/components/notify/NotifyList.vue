<template>
    <ul class="notify">
        <li v-for="(item,index) in notifies " @click="handleDetail(index,item)" :key="index">
            <span>{{item.date}}</span>
            <div>{{item.title}}</div>
            <p class="van-multi-ellipsis--l2">{{item.content}}</p>
        </li>
    </ul>
</template>

<script>
    // import eventBus from "@/utils/eventBus.js"
    export default {
        props: ['notifies'],
        methods: {
            handleDetail(index,item) {
                console.log(item)
                this.$router.push({
                    name: "NotifyDetail",
                    params: {detailId: index}
                })
                // 向notifyDetail组件发送数据
                // eventBus.$emit('sendDetail',item)
            }
        }
    }
</script>

<style scoped>
    ul.notify {
        text-align: left;
        background-color: white;
    }
    .notify li {
        position: relative;
        border-bottom: 1px solid #eee;
        padding: 10px;
        letter-spacing: 1px;
    }
    .notify li div {
        margin-bottom: 5px;
        font-size: 16px;
        color: #333;
    }
    .notify li p {
        font-size: 14px;
        color: rgb(102, 103, 104);
    }
    .notify li span {
        position: absolute;
        font-size: 12px;
        color: rgb(172, 172, 172);
        right: 5px;
        top: 10px;
    }
</style>