<template>
	<view class="content">
		<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<view :title="singer">喜欢的歌手是：{{singer}}</view>
		<button @click="changeSingerName">更换名字</button>
		<view>
			登录状态： {{isLogin}}
		</view>
		<navigator url="./login">去登录页</navigator>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				singer: '周杰伦'
			}
		},
		computed: {
			...mapState(['isLogin'])
		},
		onLoad() {

		},
		methods: {
			changeSingerName() {
				const temp = this.singer
				this.singer = temp[0] === "反" ? "周杰伦" : "反正不是周杰伦"
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
