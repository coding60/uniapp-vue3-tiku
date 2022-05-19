<template name="page-head">
	<!--
	<view class="common-page-head">
		<view class="common-page-head-title">{{title}}</view>
	</view>
	-->
	<view class="headall">
		<view class="head001">{{papersum}}题</view>
		<image class="yktlogo" src="/static/ytklogo.png" ></image>
		<view class="head001">{{liveperson}}人在线</view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			},
			papersum: {
				type:Number,
				default: ""
			},
			liveperson: {
				type: Number,
				default: ""
			},
		},
		data(){
			return{
			
			}
			
			
		}
	}
</script>
<style scoped>
	.headall{
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex:1;
		justify-content: center;
		
	}
		.yktlogo {
		width: 120px;
		height: 60px;
		padding-left:20px;
		padding-right:20px;
	}
	.head001{
		font-size: 26rpx;
		line-height: 30rpx;
		color:#ffffff;
		letter-spacing: 3px;
		text-align: justify;
		
		 border-radius: 20px 20px 20px 20px;
		  background: #73AD21;
		  padding: 20px; 
		  width: 20%;
		  height: 60rpx; 
	
	}
</style>
