<template>
    <div class="resign">
        <top-nav title="补签" :isShow="true" />
        <div class="clock">
            <van-icon size="100" name="todo-list-o" color="rgb(1, 128, 254)"/>
            <span>
                总工时：40h
            </span>
        </div>
        <div class="signForm">
            <h4>补签</h4>
            <van-form @submit="resign">
                <van-field
                right-icon="calender-o"
                readonly
                clickable
                name="datetimePicker"
                :value="model.startTime"
                label="签到补录"
                placeholder="签到补录时间"
                @click="showPicker1 = true"/>
                <van-popup v-model="showPicker1" position="bottom">
                    <van-datetime-picker
                    type="time"
                    @confirm="onConfirmStart"
                    @cancel="showPicker1 = false"/>
                </van-popup>
                <van-field
                right-icon="calender-o"
                readonly
                clickable
                name="datetimePicker"
                :value="model.endTime"
                label="签退补录"
                placeholder="签退补录时间"
                @click="showPicker2 = true"/>
                <van-popup v-model="showPicker2" position="bottom">
                    <van-datetime-picker
                    type="time"
                    @confirm="onConfirmEnd"
                    @cancel="showPicker2 = false"/>
                </van-popup>
                <input-field
                model="model.reason"
                name="补签"
                label="补签原因"
                placeholder="请输入原因" />
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </van-form>
        </div>
    </div>
</template>

<script>
import TopNav from "../../components/common/TopNav.vue"
import InputField from "@/components/common/InputField.vue"
export default {
    data() {
        return {
            model: {
                startTime: '',
                endTime: '',
                reason: '',
            },
            showPicker1: false,
            showPicker2: false,
        }
    },
    components: {
        TopNav,
        InputField
    },
    methods: {
        async resign() {
            await this.$ajax.post('/resign',this.model)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
                this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
            })
        },
        onConfirmStart(time) {
            this.model.startTime = time;
            this.showPicker1 = false;
        },
        onConfirmEnd(time) {
            this.model.endTime = time;
            this.showPicker2 = false;
        },
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
    .signForm {
        background-color: white;
        padding: 20px;
    }
    .signForm h4 {
        margin-bottom: 10px;
    }
    .van-form .van-field {
        text-align: left;
    }
    .van-form .van-button {
        width: 90%;
        margin: 15px auto 0;
    }
</style>