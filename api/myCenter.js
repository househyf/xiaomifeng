import request from '../request/request.js'
export function getUserInfo(data) {
 return request({
	 url:'/nihao/'+data.id,
	 method:'get',
	 // params:data,
 })
}
// 搜索商品
export function searchGoodslist(data) {
 return request({
	 url:'/app/shop/searchGoodslist',
	 method:'POST',
	 data:data,
 })
 }
// 更多商品列表
export function moreGoods(data) {
 return request({
	 url:'/app/shop/goodsList',
	 method:'post',
	 data
	 // params:data,
 })
 }
export function getBannerList() {
 return request({
	 url:'/app/shop/bannerList',
	 method:'get',
	 // params:data,
 })
}
// 首页商品列表

export function getHotGoods() {
 return request({
	 url:'/app/shop/hotGoodsList',
	 method:'get',
	 // params:data,
 })
}
// 分类
export function getType() {
 return request({
	 url:'/app/shop/homeGoodsClassifylist',
	 method:'get',
	 // params:data,
 })
}