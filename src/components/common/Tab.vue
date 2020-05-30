<template>
    <van-tabs v-model="active"
    title-active-color="rgb(120,186,251)"
    color="rgb(48, 52, 253)"
    line-width="50%"
    line-height="1px">
    <van-tab :title="item.type" v-for="(item,index) in tabs" :key="index">
        <dropdown-menu @changeValue="handleChange" :option="options"/><br />
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
            <notify-list v-if="readStatus.all == 1" :notifies="item.list" />
            <notify-list v-if="readStatus.read == 1" :notifies="item.list.filter(handleRead)" />
            <notify-list v-if="readStatus.readed == 1" :notifies="item.list.filter(handleReaded)" />
        </van-list>
    </van-tab>
    </van-tabs>
</template>

<script>
    import DropdownMenu from "./DropdownMenu.vue"
    import NotifyList from "../notify/NotifyList.vue"
    export default {
        props: ['tabs'],
        data() {
            return {
                active: 0,
                loading: false,
                finished: false,
                //默认阅读状态是全部
                readStatus: {
                    all: 1, //全部
                    read: 0, //未读
                    readed: 0 //已读
                },
                options: [{
                    text: '全部',
                    value: 0
                }, {
                    text: '未读',
                    value: 1
                }, {
                    text: '已读',
                    value: 2
                }]
            }
        },
        components: {
            DropdownMenu,
            NotifyList
        },
        methods: {
            onLoad() {
                this.finished = true
            },
            handleChange(value) {
                console.log(value)
                switch (value) {
                    case 0:
                        this.readStatus = {
                            all: 1,
                            read: 0,
                            readed: 0
                        }
                        break
                    case 1:
                        this.readStatus = {
                            all: 0,
                            read: 1,
                            readed: 0
                        }
                        break
                    case 2:
                        this.readStatus = {
                            all: 0,
                            read: 0,
                            readed: 1
                        }
                        break
                    default:
                        this.readStatus = {
                            all: 1,
                            read: 0,
                            readed: 0
                        }
                        break
                }
            },
            handleRead(item) {
                return item.isRead == false
            },
            handleReaded(item) {
                return item.isRead == true
            }
        }
    }
</script>

<style></style>