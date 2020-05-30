<template>
    <van-tab title="签到记录">
        <ul class="list">
            <li v-for="(item,index) in recordList" :key="index">
                <van-row>
                    <van-col span="4">
                        <van-icon size="50" color="#1989fa" name="clock-o" />
                    </van-col>
                    <van-col span="15">
                        <h4>{{item.name}}</h4>
                        <div>
                            <span>{{item.time}}</span>
                        </div>
                    </van-col>
                    <van-col span="5">
                        <span class="date">{{item.date}}</span>
                        <van-button @click="handleResign(index)" size="mini" type="info">{{item.isNormal ? '已签到' : '已补签'}}</van-button>
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
            recordList: []
        }
    },
    methods: {
        async getRecord() {
            await this.$ajax.get("/checkRecord")
            .then(res => {
                this.recordList = res.data
            }).catch(err => {
                console.log(err)
                this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
            })
        }
    },
    mounted() {
        this.getRecord()
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
    .list .van-icon {
        margin-top: 20px;
    }
</style>