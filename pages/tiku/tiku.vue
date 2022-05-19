<template>
	<view class="container">
		<page-head :title="title" :papersum="papersum" :liveperson="liveperson" class="top"></page-head>

		<view class="welcome">{{id}}:{{title}}</view>
		<view class="uni-px-5 uni-pb-5">
			<view class="text">一个或多个</view>
			<uni-data-checkbox multiple v-model="checkbox1" :localdata="option" mode="list"></uni-data-checkbox>
		</view>
		<view class="text">您的答案：{{checkString}}</view>
		<view class="text" v-if="showAnswer">正确答案:{{answer}}</view>
		<view class="text" v-if="showAnswer">解析:{{exp}}</view>
		<button type="default" @click="sub()">确定</button>
		<uni-pagination :current="current" :pageSize="pageSize" :total="total" title="标题文字" :show-icon="true"
			@change="change" />

		<view class="btn-view">
			<view>
				<text class="example-info">当前页：{{current}}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
			</view>

		</view>
		<view style="display: none;">
			<text>用户名：{{checkbox2}}</text>
		</view>

		<!--<button @click="edit">改名</button>-->
	</view>
</template>

<script>
	import store from '@/store/index.js'; //需要引入store
	import {
		tikulist
	} from '../../models/tiku.js'

	export default {
		components: {},
		computed: {
			checkbox2() {

				if (store.state.checkbox2.length > this.current - 1) {
					console.log('this.id')
					console.log(this.id)
					let myId
					myId = this.id
					let arr_an = store.state.checkbox2
					var findVal = {}
					//只返回一个对象
					// findVal = arr_an.find(item => {
					// 	return item.id === myId;
					// });
					//返回一个数组根据value值查询
					findVal = arr_an.filter(item => item.id === myId)
					console.log('arr_an')
					console.log(arr_an)
					console.log('arr_an')
					console.log('findVal')

					console.log(findVal.length)
					console.log('findVal')

                   //如果此题已经做过初始化已选择20220302
					if (findVal != undefined && findVal.length > 0) {

						if (this.id == findVal[findVal.length - 1].id) {
							this.checkbox1 = findVal[findVal.length - 1].answers
							this.showAnswer = true

							return findVal[findVal.length - 1].answers
						}
					}


				} else {

					//return store.state.username

				}

			},
			checkString() {

				return JSON.stringify(this.checkbox1)
			}
		},
		data() {
			return {
				showAnswer: false,
				answer: '',
				exp: '',
				list: [],
				current: 1,
				total: 8,
				pageSize: 1,
				title: '题库列表页',
				papersum: 987,
				liveperson: 72,
				id: 0,
				tikuid: 0,
				option: [],
				checkbox1: [],
				//checkString:'',
				hobby: [{
					text: '足球',
					value: 0
				}, {
					text: '篮球',
					value: 1
				}, {
					text: '游泳',
					value: 2
				}]
			}
		},
		methods: {
			edit() {
				store.commit({
					type: 'editName',
					username: 'lyg'
				})
			},
			sub() {
				console.log('checkbox1开始')
				console.log(this.checkbox1)
				console.log('checkbox1结束')
				//console.log(JSON.stringify(this.checkbox1))
				//let reg = new RegExp('"','g') //g代表全部
				//let newMsg = JSON.stringify(this.checkbox1).replace(reg,'')
				let chstr = JSON.stringify(this.checkbox1)
				let anscheck = this.checkbox1
				let result = chstr.replace(/\[|\]|,|'|"/g, function(matchStr) {
					var tokenMap = {
						'[': '',
						']': '',
						',': '',
						"'": '',
						'"': ''
					};
					return tokenMap[matchStr];
				});
				//console.log(result)

				let ans = '回答错误'
				if (result == this.answer) {
					ans = '回答正确'
					console.log('ok')
				}
				uni.showToast({
					title: ans,
					duration: 2000
				});
				this.showAnswer = true
				store.commit({
					type: 'saveAnswer',
					checkbox2: {
						"id": this.id,
						"answer": result,
						"answers": anscheck
					},
				})
				let myId
				myId = this.id
				let arr_an = store.state.checkbox2
				var findVal = {}
				findVal = arr_an.find(item => {
					return item.id === myId;
				});
				// if(this.findVal!=undefined){
				// 	this.findVal.answers =anscheck
				//console.log('findVal')
				//console.log(arr_an)
				//console.log('findVal')
				// }
				//console.log(this.checkbox2)


			},
			change(e) {
				this.current = e.current
				//console.log(e)
				this.showAnswer = false,
					this.answer = '',
					this.exp = '',
					this.option = [],
					//this.checkbox2 = [],
					this.checkbox1 = []

				//	console.log(this.list[this.current - 1].option)
				this.title = this.list[this.current - 1].title
				this.id = this.list[this.current - 1].id
				this.option = this.list[this.current - 1].option
				this.answer = this.list[this.current - 1].answer
				this.exp = this.list[this.current - 1].exp

			},
			//页面中的 methods 里面就可以直接调用了
			Login() {
				//这里可以设置需要传递的参数
				let uid = uni.getStorageSync('userId')
				validateCode(uid).then((res) => {
					console.log(res.name)
					this.title = res.name;
				}).catch(err => {
					console.log(err)
				})
			},
			Tikulist() {

				tikulist(this.tikuid).then((res) => {
					//	console.log(res.data)
					this.list = res.data
					this.title = res.data[this.current - 1].title
					this.id = this.list[this.current - 1].id
					this.option = res.data[this.current - 1].option
					this.answer = this.list[this.current - 1].answer
					this.exp = this.list[this.current - 1].exp
					console.log(res.data[this.current - 1].option)

				}).catch(err => {
					console.log(err)


				})

			},
			getTest() {
				uni.request({
					url: '/api/test', //仅为示例，并非真实接口地址。
					//#ifdef MP-WEIXIN
					url: 'https://api.coding60.com/api/test', //仅为示例，并非真实接口地址。
					//#endif
					method: 'GET',
					data: {

					},
					success: res => {
						//console.log(JSON.stringify(res))
						var cdata = {};
						cdata = res.data
						//this.data=res.data;
						this.title = res.data.name;
						console.log(cdata.name)

					},
					fail: () => {},
					complete: () => {


					}
				});
			},
			//页面中的 methods 里面就可以直接调用了

			onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数

				//this.getTest();
				//  this.Login()
				//  console.log('afc'+option.id); //打印出上个页面传递的参数。\
				this.tikuid = option.id
				this.Tikulist()
				console.log('store开始')
				console.log(store.state.checkbox2)
				console.log('store完成')

			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 98%;
		margin: 0px auto;
		padding: 6rpx;
		font-size: 14px;
		line-height: 24px;
	}

	.top {
		padding: 100rpx;

	}

	.welcome {
		margin-top: 160rpx;

	}
</style>
