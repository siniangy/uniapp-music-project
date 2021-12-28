<template>
	<view>
		<!-- 轮播图 -->
		<view class="banner">
			<swiper class="swiper" :autoplay="true" indicator-dots="true" indicator-active-color="#ff372b"
				indicator-color='rgba(255,255,255, .5)' duration="500" :circular="true">
				<swiper-item v-for="(item,index) in swiper" :key="index">
					<view class="item">
						<image :src="item.imageUrl + $imgSuffix" class="img"></image>
						<view class="tag">{{item.typeTitle}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 主入口 -->
		<view class="main-bar flex-box">
			<view class="flex-item" v-for="(item,index) in contentBar" :key="index">
				<image :src="'/static/image/index/t_'+(index + 1) + '.png'" class="img"></image>
				<view>{{item.name}}</view>
				<view v-if="index === 0" class="date">{{curDate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		apiGetBanner
	} from '@/apis/index.js'
	export default {
		data() {
			return {
				swiper: [],
				contentBar: [{
						name: '每日推荐'
					},
					{
						name: '歌单'
					},
					{
						name: '排行榜'
					},
					{
						name: '电台'
					},
					{
						name: '直播'
					}
				],
				curDate: ''
			};
		},
		onLoad() {
			this.getBanner()
			this.curDate = new Date().getDate()
		},
		methods: {
			getBanner() {
				apiGetBanner().then((res) => {
					console.log(res)
					this.swiper = res.banners
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		color: #1a1a1a;
		font-size: 24rpx
	}

	.banner {
		width: 100%;
		height: 268rpx;
		margin: 30rpx auto 44rpx;

		.swiper {
			height: 268rpx;
		}

		.item {
			position: relative;
			display: block;
			width: 686rpx;
			height: 268rpx;
			margin: 0 auto;
			border-radius: 14rpx;
			overflow: hidden;
		}

		.img {
			display: block;
			width: 100%;
			height: 100%;
		}

		.tag {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 34rpx;
			padding: 0 14rpx;
			line-height: 34rpx;
			color: #fff;
			background: #43a5f0;
			z-index: 10;
			border-top-left-radius: 14rpx;
		}
	}

	.main-bar {
		padding-bottom: 22rpx;
		text-align: center;
		line-height: 70rpx;
		color: #666;
		border-bottom: 1rpx solid #e6e6e6;

		.img {
			display: block;
			width: 92rpx;
			height: 92rpx;
			margin: 0 auto;
		}

		.flex-item {
			position: relative;

			.date {
				position: absolute;
				left: 60rpx;
				top: 40rpx;
				line-height: 1;
				font-size: 24rpx;
				color: #ff392d;
				transform: scale(0.8);
			}
		}
	}
</style>
