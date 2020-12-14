
import request from '../request/request.js'
export function getProductDetail(goodsId) {
 return request({
	 url:'/app/shop/goodsDetails/'+goodsId,
	 method:'get',
	 // params:data,
 })
}