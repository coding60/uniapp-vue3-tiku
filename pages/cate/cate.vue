<template>
	<view class="container">
		<page-head :title="title" :papersum="papersum" :liveperson="liveperson" class="top"></page-head>

		<!-- 判断是否登陆 -->
		<view class="loginStatus">亲爱的小小，欢迎进入60编程！</view>
		<!-- 功能模块导航 -->

		<view v-for='(clists,index) in classlists' :key='clists.id'>
			<view v-if="clists.url!==''" class="bigclass">
				<button @click="entertiku(clists.id)">{{clists.className}}</button>

			</view>
			<view v-if="clists.url==''" >
				<view class="topclass">--{{clists.className}}--</view>
                 <view class="funNav" >
					<view v-for='(children,indexs) in clists.child' :key='children.id'>
						<button @click="entertiku(children.id)" class="bishiclick">{{children.className}}</button>
					</view>
				
				</view> 
			</view>

		</view>

	</view>

</template>

<script>
	import {
		classlist
	} from '../../models/tiku.js'
	export default {
		data() {
			return {
				title: '60编程网',
				papersum: 98766,
				liveperson: 372,
				classlists: []
			}
		},
		methods: {
			entertiku(e) {
				console.log(e)
				//uni.showToast({
				//	title: '点到我了'
				//});
				uni.navigateTo({
					url: '/pages/tiku/tiku?id='+e,
				});

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数

			classlist().then((res) => {

				console.log(res.data)
				this.classlists = res.data

			}).catch(err => {
				console.log(err)


			})


		}
	}
</script>

<style lang="scss" scoped>
	.top {
		padding: 100rpx;

	}

	.bishiclick {

		margin-top: 10rpx;
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
		margin-top: 160rpx;
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

	.bigclass {
		width: 96%;
		display: flex;
		margin-top: 10rpx;
		font-size: 46rpx;
		line-height: 120rpx;
		color: #1c1e36;
		letter-spacing: 3px;
		justify-content: center;
		height: 60px;
		border: 3px blue solid;
		border-radius: 10px;
	}

	.topclass {
		margin: 0 auto;
		background-color: #f2eded;
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
		font-size: 46rpx;
		line-height: 120rpx;
		color: #1c1e36;
		letter-spacing: 3px;
		height: 60px;
	}

	.funNav {
			width: 100%;			
		flex-direction:row;
		display: flex;
		padding-left: 8rpx;
		padding-right: 8rpx;
		height: auto;
		margin-top: 20rpx;
		flex-wrap: wrap;

		view {
			width: 44%;
			
			padding-left: 8rpx;
			padding-right: 8rpx;
			margin-left: 4rpx;

			font-size: 36rpx;
			line-height: 120rpx;
			color: #1c1e36;
			letter-spacing: 3px;
			text-align: center;
			height: 60px;
			border: 3px blue solid;
			border-radius: 10px;
		}

	}

	button {
		padding: 0;
		margin: 0;
	}

	button::after {
		border: none;
	}

	.entertiku {
		font-size: 20rpx;
		line-height: 20rpx;
	}
</style>
