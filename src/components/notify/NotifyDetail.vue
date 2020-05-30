<template>
    <div class="notifyDetail">
        <top-nav title="公告详情" :isShow="true" />
        <div class="article">
            <h3>{{detail.title || tip}}</h3>
            <span>{{detail.date}}</span>
            <p>{{detail.content}}</p>
        </div>
    </div>
</template>

<script>
    import TopNav from "../common/TopNav.vue"
    // import eventBus from "@/utils/eventBus.js"
export default {
    data() {
        return {
            detail: {},
            tip: '正在加载中'
        }
    },
    components: {
        TopNav
    },
    methods: {
        // recieve() {
        //     eventBus.$on('sendDetail',(val) => {
        //     this.detail = val
        //     console.log(this.detail)
        // })
        // }
        async getNotify() {
            await this.$ajax.get('/notifyDetail?detailId=' /*+this.$route.params.detailId*/)
                .then(res => {
                    this.detail = res.data
                }).catch(err => {
                    console.log(err)
                    this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
                })
        }
    },
    mounted() {
        // setTimeout(this.recieve,3000)
        this.getNotify()
    },
    // beforeDestroy() {
    //     eventBus.$off('eventName')
    // }
}
</script>

<style>
    .article {
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 10px;
        letter-spacing: 1px;
        background-color: white;
    }

    .article h3 {
        width: 100%;
        margin-bottom: 5px;
    }

    .article span {
        position: absolute;
        color: rgb(172, 172, 172);
        font-size: 14px;
        right: 10px;
        bottom: 10px;
    }
    .article p {
        line-height: 25px;
        text-align: left;
        text-indent: 2em;
        font-size: 15px;
        color: #333;
        margin-bottom: 20px;
    }
</style>