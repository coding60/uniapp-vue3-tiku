<template>
	<view class="container">
		<page-head :title="title" :papersum="papersum" :liveperson="liveperson" class="top"></page-head>
		<view class="fro">
			<view>
			<button @click="entertiku" >
				<image src="/static/front/tiku.jpg"></image>
				<view class="entertiku">进入题库</view>
			</button>
			</view>
			<view>
				<image class="" src="/static/front/msjq.jpg"></image>
				<view>面试技巧</view>
			</view>
			<view>
				<image class="" src="/static/front/jihuo.jpg"></image>
				<view>激活购买</view>
			</view>
		</view>
		<!-- 判断是否登陆 -->
		<view class="loginStatus">亲爱的小小，欢迎进入mysql！</view>
		<!-- 功能模块导航 -->
		<view class="funNav">
			
			<view  class="funContent"><button @click="entertiku" class="bishiclick">笔试</button></view>
			<view class="funContent">面试</view>
			
		</view>
		<view class="funNav">
			<view class="funContent">收藏</view>
			<view class="funContent">笔记</view>
		</view>
		<view class="funNav">
			<view class="funContent">记录</view>
			<view class="funContent">搜索</view>
		</view>
		<view class="funNav">
			<view class="funContent">统计</view>
			<view class="funContent">组题</view>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				title: '60编程网',
				papersum: 987,
				liveperson: 72,
			}
		},
		methods: {
			entertiku(e) {
				//console.log(e)
				//uni.showToast({
				//	title: '点到我了'
				//});
				 uni.navigateTo({
				 	url: '/pages/tiku/tiku?id=9',
				 });

			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		padding: 100rpx;

	}
    .bishiclick{
		
		margin-top:40rpx;
	}
	.fro {
		margin-top: 120rpx;
		display: flex;

		view {
			flex: 1;
			justify-content: center;
			text-align: center;
		}

		image {
			width: 60rpx;
			height: 60rpx;

		}

	}

	.container {
		width: 98%;
		margin: 0px auto;
		padding: 6rpx;
		font-size: 14px;
		line-height: 24px;
	}

	.loginStatus {
		margin-top: 10rpx;
		font-size: 26rpx;
		line-height: 30rpx;
		color: #ffffff;
		letter-spacing: 3px;
		text-align: center;

		border-radius: 10px 10px 10px 10px;
		background: #73AD21;
		padding: 10px;
		width: 94%;
		height: 20px;
	}

	.funNav {
		width: 100%;
		height: auto;
		margin-top: 40rpx;
		display: flex;
		padding-left: 8rpx;
		padding-right: 8rpx;

		view {
			width: 46%;
			padding-left: 8rpx;
			padding-right: 8rpx;

			font-size: 36rpx;
			line-height: 120rpx;
			color: #1c1e36;
			letter-spacing: 3px;
			text-align: center;
			height: 80px;
			border: 3px blue solid;
			border-radius: 80px;
		}

	}
	button{padding: 0;margin: 0;}
	button::after{ border: none; }
	.entertiku{
		font-size: 28rpx;
		line-height: 28rpx;
	}
</style>
