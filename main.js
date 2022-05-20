/*
// | Copyright (c) 2022- http://www.coding60.com All rights reserved.
 * Author: lyg   qq:724864363
 * Date: 2022/5/5
 * Time: 10:45
 */
import App from './App'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	return {
		app
	}
}
// #endif
//登陆拦截器
Vue.prototype.checkLogin = function() {
	const token = uni.getStorageSync('token')
	if (token === '') { // 本地没有token表示未登录
		console.log('未登录返回到登录页')
		uni.showToast({
			title: '请先登录',
			duration: 1000
		})
		setTimeout(function() {
			uni.reLaunch({
				url: '/pages/user/login/login'
			})
		}, 1000);
		//uni.reLaunch({url:'/pages/index/index'})
		return false
	}
}
