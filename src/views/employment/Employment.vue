<template>
    <div class="employment">
        <top-nav title="招聘" :isShow="false" />
        <van-search v-model="searchValue"
        placeholder="请输入搜索关键词"
        @search="onSearch" shape="round" /><br/>
        <van-tabs v-model="active"
        title-active-color="rgb(120,186,251)"
        color="rgb(48, 52, 253)"
        line-width="50%"
        line-height="1px">
            <employ-list />
            <my-employment />
        </van-tabs>
    </div>
</template>

<script>
    import TopNav from "../../components/common/TopNav.vue"
    import EmployList from "./EmployList.vue"
    import MyEmployment from "./MyEmployment.vue"
    export default {
        data() {
            return {
                searchValue: '',
                active: 0
            }
        },
        components: {
            TopNav,
            EmployList,
            MyEmployment
        },
        methods: {
            onSearch(val) {
                console.log(`搜索内容是${val}`)
            }
        }
    }
</script>

<style>

</style>