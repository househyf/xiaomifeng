<template>
	<view>
		<product-list :dataList="productList" @click="toProductPage"></product-list>
	</view>
</template>

<script>
	import { moreGoods } from '@/api/myCenter.js'
	import { getGoodsByType } from '@/api/myShop.js'
	export default {
		data() {
			return {
				productList:[],
				type:'',
				shopId:''
			}
		},
		onLoad(){
			let data = {
				pageIndex:1,pageSize:10
			}
			this.type = wx.getStorageSync('typeId')
			console.log(this.type)
			if(!this.type||this.type===''){
				this.moreGoodsAsk(data)
			}else{
				this.shopId = wx.getStorageSync('shopId')
				data.businessId = this.shopId ||''
				data.classifyId = this.type
				this.getGoodsByType(data)
			}
			
		},
		methods: {
			// 更多按钮的请求
			moreGoodsAsk(data){
				moreGoods(data)
					.then(res=>{
						console.log('moreGodds',res)
						this.productList = res.page.list
					})
			},
			// 
			getGoodsByType(data){
				getGoodsByType(data)
					.then(res=>{
						console.log('moreGodds',res)
						this.productList = res.goodsList.records
					})
			}
		}
	}
</script>

<style>

</style>
