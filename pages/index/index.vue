<template>

	<view class="container">
		<!--
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		-->
		<page-head :title="title" :papersum="papersum" :liveperson="liveperson"></page-head>
		<!-- 轮播图1 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view class="dots" v-for="(swiper, index) in swiperList"
						:class="[currentSwiper >= index ? 'on' : '']" :key="index"></view>
				</view>
			</view>
		</view>
		<!-- 前端开发 -->
		<view class="fro">
			<view class="fro-tt">--前端开发--</view>
			<view class="fro-link">
				<navigator url="/pages/frodev/frodev" hover-class="navigator-hover">
					<button type="default" class="butt">>>进入题库</button>
				</navigator>
			</view>
		</view>
		<!-- 小程序开发 -->
		<view class="minip">
			<view class="minip-l">
				<image class="miniproindex" src="/static/miniproindex.png"></image>
			</view>
			<view class="minip-r">
				<view>1.微信小程序的相关文件类型</view>
				<view>2.微信小程序登录流程</view>
				<view>3.小程序应用的生命周期</view>
				<!--
				<view>4.小程序的开发流程</view>
				<view>5.tabBar页面跳转实现方式</view>
				-->
			</view>
		</view>
		<!-- javascript -->
		<view class="minip">
			<view class="minip-l">
				<image class="miniproindex" src="/static/javascriptindex.png"></image>
			</view>
			<view class="minip-r">
				<view>1.谈谈什么是JavaScript</view>
				<view>2.JavaScript弹框及区别用法</view>
				<view>3.什么是原型链及实际应用</view>

			</view>

		</view>
		<!-- 后端开发 -->
		<view class="back"> <text class="backtt">**</text>||后端开发||<text class="backtt">**</text>
		</view>
		<!-- java -->
		<view class="java">
			<view class="java-l">
				<view>1.谈谈Java的面向对象特性</view>
				<view>2.什么是Java虚拟机</view>
				<view class="fro-link">
					<navigator url="/pages/java/java" hover-class="navigator-hover">
					 <button type="default" class="butt">进入JAVA题库>></button>
					</navigator>
				</view>
			</view>
			<view class="java-r">
				<image class="javaindex" src="/static/javaindex.png"></image>
			</view>
		</view>
		<!-- php -->
		<view class="java">
			<view class="java-l">
				<view>1.php-fpm的工作原理</view>
				<view>2.PHP7新特性</view>
				<view class="fro-link">
					<navigator url="/pages/php/php" hover-class="navigator-hover">
					 <button type="default" class="butt">进入PHP题库>></button>
					</navigator>
				</view>
			</view>
			<view class="java-r">
				<image class="javaindex" src="/static/phpindex.png"></image>
			</view>
		</view>
		<!-- 移动开发 -->
		<view class="back"> <text class="backtt">**</text>||移动开发||<text class="backtt">**</text>
		</view>
		<!-- 安卓开发 -->
		<view class="minip">
			<view class="minip-l">
				<image class="miniproindex" src="/static/androidindex.png"></image>
			</view>
			<view class="minip-r">
				<view>1.Activity有几种launch mode</view>
				<view>2.Service有几种类型</view>
				<view>3.广播有几种注册方式</view>
				<view class="fro-link">
					<navigator url="/pages/android/android" hover-class="navigator-hover">
					 <button type="default" class="butt">进入android题库>></button>
					</navigator>
				</view>
			</view>
		</view>
		<!-- ios开发 -->
		<view class="minip">
			<view class="minip-l">
				<image class="miniproindex" src="/static/iosindex.png"></image>
			</view>
			<view class="minip-r">
				<view>1.Object－c的类可以多重继承么</view>
				<view>2.#import 跟#include区别</view>
				<view>3.object-c的数据类型</view>
				<view class="fro-link">
					<navigator url="/pages/ios/ios" hover-class="navigator-hover">
					 <button type="default" class="butt">进入ios题库>></button>
					</navigator>
				</view>
				
			</view>
		</view>
		<!-- 数据开发 -->
		<view class="back"> <text class="backtt">**</text>||数据开发||<text class="backtt">**</text>
		</view>
		<!-- mysql -->
		<view class="java">
			<view class="java-l">
				<view>1.varchar 与 char 的区别</view>
				<view>2.mysql索引的类型</view>
				<view>3.MySQL索引的原理</view>
				<view class="fro-link">
					<navigator url="/pages/mysql/mysql" hover-class="navigator-hover">
					 <button type="default" class="butt">进入mysql题库>></button>
					</navigator>
				</view>
			</view>
			<view class="java-r">
				<image class="javaindex" src="/static/mysqlindex.png"></image>
			</view>
		</view>
		<!-- redis -->
		<view class="java">
			<view class="java-l">
				<view>1.缓存有哪些类型？</view>
				<view>2.mysql索引的类型</view>
				<view>3.Redis的持久化机制</view>
				<view class="fro-link">
					<navigator url="/pages/redis/redis" hover-class="navigator-hover">
					 <button type="default" class="butt">进入redis题库>></button>
					</navigator>
				</view>
			</view>
			<view class="java-r">
				<image class="javaindex" src="/static/redisindex.png"></image>
			</view>
		</view>
	</view>



</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				title: '60编程网',
				papersum: 98766,
				liveperson: 372,
				// 轮播图片
				currentSwiper: 0,
				swiperList: [{
						id: 1,
						src: '注册登录后方可使用相关功能',
						img: '/static/bishibanner.png'
					},
					{
						id: 2,
						src: '注册登录后方可使用相关功能',
						img: '/static/mianshibanner.png'
					},
					{
						id: 3,
						src: '注册登录后方可使用相关功能',
						img: '/static/grytkbanner.png'
					},
					{
						id: 4,
						src: '注册登录后方可使用相关功能',
						img: '/static/tuantkbanner.png'
					},
				]
			}

		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({
				title: '到底了'
			});


		},
		methods: {
			//轮播图跳转
			toSwiper(e) {
				uni.showToast({
					title: e.src,
					icon: 'none'
				});
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 98%;
		margin: 120rpx auto;
		padding: 6rpx;
		font-size: 14px;
		line-height: 24px;
	}

	.swiper {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 30.7vw;

			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 30.7vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/4);
					}
				}
			}
		}
	}

	.fro {
		display: flex;
		margin-top: 8rpx;
		margin-bottom: 8rpx;
		justify-content: space-around;
	}

	.fro-tt {
		color: transparent;
		-webkit-text-stroke: 1px red;
		letter-spacing: 0.08em;
	}

	.fro-link {
		color: transparent;
		-webkit-text-stroke: 1px blue;
		letter-spacing: 0.08em;
	}

	.butt {
		font-size: 28rpx;
		margin-top: -10rpx;
	}

	.minip {
		// width: 100%;
		display: flex;
		border-radius: 25px;
		border: 2px solid #8AC007;
		padding: 10px;
		margin-bottom: 8rpx;
		justify-content: space-around;


	}

	.minip-l {
		width: 50%;
		margin-right: 8rpx;

		.miniproindex {
			width: 100%;
			height: 30vw;
		}


	}

	.minip-r {
		width: 50%;
	}

	.back {
		display: flex;
		margin-top: 8rpx;
		margin-bottom: 8rpx;
		color: transparent;
		-webkit-text-stroke: 1px blue;
		letter-spacing: 0.18em;
		justify-content: center;

		align-items: center;

	}

	.backtt {
		position: relative;
		bottom: -6rpx;
		padding: 8rpx;

	}

	.java {
		// width: 100%;
		display: flex;
		border-radius: 25px;
		border: 2px solid #8AC007;
		padding: 10px;
		margin-bottom: 8rpx;
		justify-content: space-around;


	}

	.java-r {
		width: 50%;


		.javaindex {
			width: 100%;
			height: 30vw;
		}


	}

	.java-l {
		width: 50%;
		margin-right: 8rpx;
	}
</style>
