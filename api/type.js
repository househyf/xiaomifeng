
import request from '../request/request.js'
export function getType() {
 return request({
	 url:'/app/shop/businessClassifylist',
	 method:'get',
	 // params:data,
 })
}

export function getShopByType(classifyId) {
 return request({
	 url:'/app/shop/businessList/'+classifyId,
	 method:'get',
	 // params:data,
 })
}