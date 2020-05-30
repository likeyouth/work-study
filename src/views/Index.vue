<template>
    <div class="index">
        <top-nav title="公告通知" :isShow="false"/>
        <van-search v-model="searchValue"
        placeholder="请输入搜索关键词"
        @search="onSearch" shape="round" /><br/>
        <tab :tabs="tabs" />
        </div>
</template>

<script>
    import TopNav from "../components/common/TopNav.vue"
    import Tab from "../components/common/Tab.vue"
    export default {
        data() {
            return {
                searchValue: '',
                tabs: []
            }
        },
        components: {
            TopNav,
            Tab
        },
        methods: {
            onSearch(value) {
                console.log('搜索内容为：' + value)
            },
            async getNotify() {
                await this.$ajax.get('/notify')
                    .then(res => {
                        this.tabs = res.data
                    }).catch(err => {
                        console.log(err)
                        this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
                    })
            }
        },
        mounted() {
            this.getNotify()
        }
    }
</script>

<style>

</style>