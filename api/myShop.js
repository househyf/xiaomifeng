
import request from '../request/request.js'
export function getShopType(businessId) {
 return request({
	 url:'/app/shop/goodsClassifyListByBusId/'+businessId,
	 method:'get',
	 // params:data,
 })
}



// 点击分类的商品列表
export function getGoodsByType(data) {
 return request({
	 url:'/app/shop/findGoodsByClassifyId',
	 method:'post',
	 data:data
 })
}
export function shopHotGoods(businessId) {
 return request({
	 url:'/app/shop/goodsBusHot/'+businessId,
	 method:'get',
 })
}