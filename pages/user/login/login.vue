<template>
	<view class="container">
		<page-head :title="title" :papersum="papersum" :liveperson="liveperson" class="top"></page-head>
		<!-- 判断是否登陆 -->
		<view class="loginStatus">亲爱的小小，欢迎进入60编程！</view>
		<!-- 功能模块导航 -->
		<view class="content">
			<view class="denglu">
				<text>登录</text>
				<view>如果没有注册 请点击下方注册按钮</view>
				<input type="text" v-model="dUser" :focus="userFocus" value="" placeholder="请输入用户名" maxlength=20 />
				<input type="text" v-model="dPass" password="true" :focus="passFocus" value="" placeholder="请输入密码"
					maxlength=20 />
				<view class="buttlist">

					<view class="butttop">
						<button type="default" @click="login()" class="butt">登录</button>
					</view>
					<view class="butttop">
						<navigator url="/pages/user/reg/reg" hover-class="navigator-hover">
							<button type="default" class="butt">注册>></button>
						</navigator>
					</view>


				</view>
			</view>
		</view>


	</view>

</template>

<script>
	import {
		userlogin
	} from '../../../models/user.js'
	import {
		isNull
	} from '../../../common/util.js'
	var graceChecker = require("../../../common/graceChecker.js")
	export default {
		data() {
			return {

				title: '60编程网',
				papersum: 98766,
				liveperson: 372,
				title: 'Hello',
				zUser: "",
				zPass: "",
				dUser: "",
				dPass: "",
				userFocus: true,
				passFocus: false
			}

		},
		methods: {
			login() {

				// if (this.dUser == '' || this.dPass == '') {
				// 	uni.showModal({
				// 		title: "用户名密码不能为空",
				// 		showCancel: false
				// 	})

				// }
				if (isNull(this.dUser)) {

					this.dUser = ''
					this.userFocus = false;
					this.$nextTick(function() {
						this.userFocus = true;
					});

					uni.showToast({
						title: '请输入用户名',
						//showCancel: false
					})

				} else if (isNull(this.dPass)) {

					this.dPass = ''
					this.passFocus = false;
					this.$nextTick(function() {
						this.passFocus = true;
					});

					uni.showToast({
						title: '请输入密码',
						//showCancel: false
					})

				}

				this.dUser = this.dUser.replace(/[, ]/g, '')
				this.dPass = this.dPass.replace(/[, ]/g, '')
				
				if (this.dUser && this.dPass) {
					console.log(this.dUser + '-dUser-dPass：'+this.dPass)
					userlogin(this.dUser, this.dPass).then((res) => {
						console.log(res.data.userfind)
						if(res.data.userfind!=1){
							uni.showModal({
								title: "用户名或密码错误",
								showCancel: false
							})
						}else{
							var timestamp= (new Date()).valueOf();
							var tokens={'uid':this.dUser,'logintime':timestamp}
							uni.setStorageSync("token", tokens);
							uni.showModal({
								title: "登录成功,现在进入个人中心",
								showCancel: false
							})
							 setTimeout(function() {
							uni.switchTab({
							url: '/pages/user/user'
							});
							}, 1000);
							            // uni.navigateTo({
							            //     url:"/pages/user/user",
							            //     fail: (res) => {
							            //         console.log(res)//打印错误信息
							            //     }
							            // })
							
							
						}
					
					
					}).catch(err => {
						console.log(err)
					
					
					})
					//var arr = uni.getStorageSync("List") ? uni.getStorageSync("List") : []
					//console.log(arr);
					//for (var i = 0; i < arr.length; i++) {

						// if (arr[i].user == this.dUser) {
						// 	if (arr[i].pass == this.dPass) {
						// 		uni.showModal({
						// 			title: "登录成功",
						// 			showCancel: false
						// 		})
						// 	} else {
						// 		uni.showModal({
						// 			title: "密码错误",
						// 			showCancel: false
						// 		})
						// 	}
						// 	break;
						// }
						// if (i == arr.length) {
						// 	uni.showModal({
						// 		title: "该用户不存在",
						// 		showCancel: false
						// 	})
						// }
					//}
				}
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数

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
		flex-direction: row;
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

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.zhuce,
	.denglu {
		text-align: center;

		text {
			font-size: 20px;
			letter-spacing: 4px;
			color: #18BC37;
		}

		input {
			width: 200px;
			height: 40px;
			margin-top: 10px;
			border: 1px black solid;
		}

		button {
			width: 100px;
			height: 50px;
			margin-top: 20px;
		}
	}

	.butt {
		font-size: 28rpx;
		width: 160rpx;
		height: 60rpx;
		border: 1px red solid;
	}

	.butttop {
		flex: 1;
		margin-right: 8rpx;
		height: 80rpx;
	}

	.buttlist {
		display: flex;
		width: 100%;
	}
</style>
