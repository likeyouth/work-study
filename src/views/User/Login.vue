<template>
  <div class="login">
    <top-nav title="用户登录" :isShow="false" />
    <van-form @submit="login">
      <div style="margin: 16px 0">
        <input-field
        model="model.name"
        name="用户名"
        label="用户名"
        placeholder="学号/工号" />
      </div>
      <input-field
      model="model.password"
      name="密码"
      label="密码"
      placeholder="密码" />
      <div style="margin:16px">
        <van-button round block type="info" native-type="submit">
        提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import TopNav from "../../components/common/TopNav.vue"
  import InputField from "../../components/common/InputField.vue"
  export default {
    data() {
      return {
        model:{
          name: '',
          password: ''
        }
      }
    },
    components: {
      TopNav,
      InputField
    },
    methods: {
      async login() {
        await this.$ajax.post('/login',this.model)
        .then(res => {
          if(res.data.code == 200){
            localStorage.setItem('userId',res.data.userId)
            this.$notify({ type: 'primary', message: '登陆成功',duration: 1000, })
            setTimeout(() => {
              this.$router.push('/')
            },1500)
          }
        }).catch(err => {
          console.log(err)
          this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
        })
      }
    }
  }
</script>

<style scoped>
.van-form {
  text-align: left;
}
</style>