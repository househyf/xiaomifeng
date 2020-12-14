<template>
	<d2-container>
		<view style="display: flex;align-items: center;">
			<search @blur="search" style="flex:1"></search>
			<span style="display: block;width:100upx" @click="naviback" v-show="cancelVisit">取消</span>
		</view>
		<product-list :dataList="productList"></product-list>
		<view v-show="searchKong">
			没有找到相关宝贝
		</view>
	</d2-container>
</template>

<script>
	import {searchGoodslist} from '@/api/myCenter.js'
	export default {
		data() {
			return {
				cancelVisit:true,
				searchKong:false,
				page:{
					pageSize:10,
					pageIndex:1
				},
				productList:[],
				searchContent:''
			}
		},
		methods: {
			search(val){
				console.log(11111,val)
				let query = Object.assign(this.page,{})
				query.goodsName = val
				query.businessId = wx.getStorageSync('shopId')
				searchGoodslist(query)
					.then(res=>{
						if(res.code === 0){
							this.productList = res.page.list
							this.searchKong = this.productList.length === 0
							console.log('...')
							this.cancelVisit = false
						}
					})
			},
			naviback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
