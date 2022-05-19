import {
	config
} from '../config.js'

export const apiResquest = (prams) => { //prams 接口API的参数

	// 判断请求类型
	let headerData = {
		'content-type': 'application/json'
	}

	let dataObj = null
	//GET和POST请求处理
	if (prams.method === "GET") {
		headerData = {
			'content-type': 'application/json',
		}
	} else {
		dataObj = {
			'data': prams.query,
		}
	}
	return new Promise((resolve, reject) => {
		let url = config.base_url + prams.url; //请求的网络地址和api地址组合
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		return uni.request({
			url: url,
			data: dataObj,
			method: prams.method,
			header: headerData,
			success: (res) => {
				uni.hideLoading()
				//成功的返回码
				if (res.data.code !== 200) {

					uni.showToast({
						title: '获取数据失败:' + res.data.msg,
						duration: 1000,
						icon: "none"
					})
					return;
				}
				resolve(res.data);

				//console.log(url)

				//console.log(res.data)
			},
			fail: (err) => {
				reject(err);
				console.log(err)
				uni.hideLoading()
			},
			complete: () => {
				console.log('请求完成')
				uni.hideLoading()
			}
		});
	})
}
