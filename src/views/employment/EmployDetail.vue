<template>
    <div>
        <top-nav title="招聘详情" :isShow="true" />
        <div class="employDetail">
            <h3>{{$route.params.name}}</h3>
            <span>2020-05-27</span>
            <div>
                <h4>职位详情</h4>
                <p v-for="(item,index) in detailList" :key="index">{{index+1}}.{{item}}</p>
            </div>
            <div>
                <h4>职位要求</h4>
                <p v-for="(item,index) in requirement" :key="index">{{index+1}}.{{item}}</p>
            </div>
            <div>
                <h4>职位任务</h4>
                <p v-for="(item,index) in taskList" :key="index">{{index+1}}.{{item}}</p>
            </div>
        </div>
        <van-button type="info" @click="handleClick" block round>我要应聘</van-button>
    </div>
</template>

<script>
    import TopNav from "../../components/common/TopNav.vue"
    export default {
        data() {
            return{
                detailList: [],
                requirement: [],
                taskList: []
            }
        },
        components: {
            TopNav
        },
        methods: {
            async getDetail() {
                await this.$ajax.get("/employmentDetail")
                .then(res => {
                    this.detailList = res.data
                }).catch(err => {
                    console.log(err)
                    this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
                })
            },
            async getRequirement() {
                await this.$ajax.get("/requirement")
                .then(res => {
                    this.requirement = res.data
                }).catch(err => {
                    console.log(err)
                    this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
                })
            },
            async getTask() {
                await this.$ajax.get("/task")
                .then(res => {
                    this.taskList = res.data
                }).catch(err => {
                    console.log(err)
                    this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
                })
            },
            handleClick() {
                this.$dialog.confirm({
                title: '提示',
                message: '已将招聘发送至老师',
                }).then(() => {
                    // this.$ajax.post('/employ')
                }).catch(() => {})
            }
        },
        mounted() {
            this.getDetail()
            this.getRequirement()
            this.getTask()
        }
    }
</script>

<style scoped>
    .employDetail {
        background-color: white;
        position: relative;
        color: #444;
        letter-spacing: 1px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 8px rgb(228, 227, 227);
        width: 92%;
        margin: 10px auto;
        padding: 15px;
        text-align: left;
        width: 85%;
    }
    .employDetail p {
        margin-bottom: 5px;
        font-size: 13px;
        line-height: 17px;
    }
    .employDetail div {
        margin-bottom: 10px;
    }
    .employDetail span {
        position: absolute;
        color: rgb(139, 139, 139);
        font-size: 12px;
        right: 15px;
        bottom: 15px;
    }
    h3 {
        font-size: 20px;
        margin-top: 6px;
        margin-bottom: 15px;
    }
    h4 {
        color: #555;
        font-size: 16px;
        margin-bottom: 8px;
    }
    .van-button {
        width: 85%;
        margin: 10px auto;
    }
</style>