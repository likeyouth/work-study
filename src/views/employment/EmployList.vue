<template>
    <van-tab title="应聘岗位">
        <ul class="list">
            <li v-for="(item,index) in employmentList" :key="index">
                <van-row>
                    <van-col span="4">
                        <img src="@/assets/avatar.png" />
                    </van-col>
                    <van-col span="15">
                        <h4>{{item.title}}</h4>
                        <div>
                            <span>{{item.personNum}}人</span>
                            <span>{{item.task}}</span>
                            <span>{{item.publisher}}</span>
                        </div>
                    </van-col>
                    <van-col span="5">
                        <span class="date">{{item.date}}</span>
                        <van-button @click="handleDetail(index,item.publisher)" size="mini" type="info">我要应聘</van-button>
                    </van-col>
                </van-row>
            </li>
        </ul>
    </van-tab>
</template>

<script>
export default {
    data() {
        return {
            employmentList: []
        }
    },
    methods: {
        async getList() {
            await this.$ajax.get("/employmentList")
            .then(res => {
                this.employmentList = res.data
            }).catch(err => {
                console.log(err)
                this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
            })
        },
        handleDetail(index,item) {
            this.$router.push({
                path: `/employDetail/${index}/publisher/${item}`
            })
        }
    },
    mounted() {
        this.getList()
    }
}
</script>

<style scoped>
    .list {
        margin-top: 10px;
    }
    .list li {
        position: relative;
        height: 90px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 5px #eef;
        background-color: white;
    }
    .list li .van-col--15 {
        letter-spacing: 1px;
        text-align: left;
        padding-left: 10px;
        padding-top: 20px;
    }
    .list li .van-col--15 h4 {
        margin-bottom: 8px;
    }
    .list li .van-col--15 div span {
        font-size: 14px;
        color: #444;
        border-right: 1px solid #555;
        margin-right: 5px;
        padding-right: 5px;
    }
    .list li .van-col--15 div span:last-child {
        border: 0;
    }
    .list li .date {
        color:gray;
        font-size:12px;
        position: absolute;
        right: 10px;
        top: 20px;
    }
    .list li .van-col--5 .van-button {
        position: absolute;
        border-radius: 3px;
        width: 60px;
        font-size: 12px;
        right: 10px;
        bottom: 10px;
    }
    .list .van-col img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: #eee;
        margin-top: 20px;
    }
</style>