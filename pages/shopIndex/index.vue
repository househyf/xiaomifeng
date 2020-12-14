<template>
	<view>
		<shou-ye v-show="visitTab===1" :shopId="shopId" 
		:typeItemList="typeItemList" 
		:restaurantList="restaurantList"
		@getMore="getMore"
		></shou-ye>
		<my-shop v-show="visitTab===2" :shopId="shopId"></my-shop>
		<navigation @navClick="getNav" :navIndex="navIndex"></navigation>
	</view>
</template>

<script>
	import {getShopType,shopHotGoods} from '@/api/myShop.js'
	import shouYe from './shopIndex.vue'
	import myShop from '@/pages/myShop/myShop.vue'
	export default {
		data() {
			return {
				navIndex:0,
				visitTab:1,
				shopId:'',
				typeItemList:[],
				restaurantList:[]
			}
		},
		components:{
			shouYe,myShop
		},
		onLoad(option){
			console.log(11111)
			this.shopId =  wx.getStorageSync('shopId')
			this.getShopType(this.shopId)
			this.shopHotGoods(this.shopId)
		},
		methods: {
			getMore(){
				console.log(1111,'getmore')
				this.visitTab = 2
				this.navIndex = 1
			},
			shopHotGoods(data){
				shopHotGoods(data)
					.then(res=>{
						console.log(res)
						if(res.code===0){
							this.restaurantList = res.hotGoodslist
						}
					})
			},
			getShopType(id){
				getShopType(id)
					.then(res=>{
						if(res.code===0){
							this.typeItemList = res.ClassifyEntityList
						}
					})
			},
			getNav(item){
				if(item.name==='首页'){
					this.visitTab=1
				}else if(item.name==='全部宝贝'){
					this.visitTab=2
				}else{
					uni.navigateTo({
						url:item.router
					})
				}
				// this.visitTab = item.index
			}
		}
	}
</script>

<style>

</style>
