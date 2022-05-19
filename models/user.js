import { apiResquest } from '../utils/http.js'

//GET 注册会员
export const reguser  = (username,userpass) => {
	let userid = username
	let userpwd=userpass
	
	
	//console.log(str)
	return apiResquest({
		url: '/api/reguser?username='+userid+'&pass='+userpwd,
		method: 'GET'
	})
}
//登录
export const userlogin  = (username,userpass) => {
	let userid = username
	let userpwd=userpass
	
	
	//console.log(str)
	return apiResquest({
		url: '/api/login?username='+userid+'&pass='+userpwd,
		method: 'GET'
	})
}