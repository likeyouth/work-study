<template>
<div class="userInfo">
    <top-nav title="个人信息" :isShow="false"/>
	<div class="avatar">
		<img src="../../assets/avatar.png" />
		<span>{{userinfo.username}}</span>
	</div>
	<div class="infoList">
		<van-cell-group>
			<van-cell title="学号" :value="userinfo.userNo" />
			<van-cell title="姓名" :value="userinfo.username" />
			<van-cell title="性别" :value="userinfo.gender? '女' : '男'" />
			<van-cell title="专业" :value="userinfo.specialty" />
			<van-cell title="贫困生" :value="userinfo.isNeedy? '是' : '不是' " />
			<van-cell title="设置密码" is-link />
		</van-cell-group>
	</div>
</div>
</template>

<script>
	import TopNav from "../../components/common/TopNav.vue"
	export default {
		data () {
			return {
				userinfo:{}
			}
		},
		components: {
			TopNav
		},
		methods: {
			async getInfo() {
				await this.$ajax.get("/userinfo")
				.then(res => {
					this.userinfo = res.data
				}).catch(err => {
					console.log(err)
					this.$notify({ type: 'danger', message: '网络错误，请重试',duration: 1000, })
				})
			}
		},
		mounted() {
			this.getInfo()
		}
	}
</script>

<style scoped>
	.avatar {
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: white;
		border-bottom: 1px solid #eeeeff;
		height: 100px;
		align-items: center;
	}
	.avatar img {
		background-color: rgb(9, 112, 138);
		margin-bottom: 10px;
		width: 50px;
		height: 50px;
		border: 1px solid #eee;
		border-radius: 50%;
	}
	.avatar span {
		font-size: 14px;
		color: #333;
	}
	.infoList {
		text-align: left;
	}
</style>