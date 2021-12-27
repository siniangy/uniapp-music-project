<template>
	<view class="login">
		<view>
			登录状态： {{isLogin}}
		</view>
		<button @click="handleLogin">登录</button>
		<button @click="handleLogout">登出</button>
		<navigator url="./index">去首页</navigator>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState(['isLogin'])
		},
		methods: {
			handleLogin() {
				this.$store.commit('storeLogin', true)
			},
			handleLogout() {
				this.$store.commit('storeLogin', false)
			}
		}
	}
</script>

<style lang="less">
	.login {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
