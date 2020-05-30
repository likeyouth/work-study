<template>
    <van-tab title="签到签退">
        <ul class="list">
            <li v-for="(item,index) in checkList" :key="index">
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
                        <van-button @click="handleResign(index)" size="mini" type="info">补签</van-button>
                        <van-button @click="handleSign(index)" :disabled="signed" size="mini" type="info">{{JSON.parse(item.isSign) ? '签退' : '签到'}}</van-button>
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
            checkList: [],
            signStart: 0,
            signEnd: 0,
            signed: false
        }
    },
    methods: {
        async getWork() {
            await this.$ajax.get('/sign')
            .then(res => {
                this.checkList = res.data
            }).catch(err => {
                console.log(err)
                this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
            })
        },
        handleSign(index) {
            if(JSON.parse(this.checkList[index].isSign)) {
                this.signEnd = new Date().getTime() //签退时间
            }else {
                this.signStart = new Date().getTime() //签到时间
                this.checkList[index].isSign = true //修改状态为已签到
                this.$toast('签到成功，请记得签退哟~')
            }
            if(this.signStart && this.signEnd) {
                let workTime = (this.signEnd - this.signStart) / (1000 * 3600)  //小时计算
                this.$toast(`签退成功，此次工时为${workTime}小时`)
                this.signed = true
            }
        },
        handleResign(index) {
            console.log(index)
            this.$router.push("/resign")
        }
    },
    mounted() {
        // 获取当前工作内容
        this.getWork()
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
    .list li .van-col--5 .van-button:nth-child(2) {
        right: 100px;
    }
    .list .van-icon {
        margin-top: 20px;
    }
</style>