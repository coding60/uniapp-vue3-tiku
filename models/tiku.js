import { apiResquest } from '../utils/http.js'

//GET 获取题库列表
export const tikulist  = (query) => {
	
	let str = query
	//console.log(str)
	return apiResquest({
		url: '/api/tikulist/id/'+str,
		//url: '/api/tikulist/id/1',
		method: 'GET'
	})
}
//GET 获取分类列表
export const classlist  = () => {
	
	
	console.log('/api/navi')
	return apiResquest({
		url: '/api/navi',
		method: 'GET'
	})
}