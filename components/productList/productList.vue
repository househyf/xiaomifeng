<template>
		<view class="restaurantList">
			<view class="restaurantItem" v-for="(item,index) in dataList" :key = "index" @click="productDetail(item)">
				<view class="imgItem" @click="getProduct(item)">
					<img :src="item.goodsPhoto" alt="">
				</view>
				<view>
					{{item.goodsName}}
				</view>
				<view>
					¥{{item.currentPrice}}
					<span class="priceItem">¥{{item.originalPrice}}</span>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		props:{
			dataList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log(this.dataList,'this.dataList')
		},
		methods: {
			getProduct(item){
				this.$emit('click',item)
			},
			productDetail(item){
				wx.redirectTo({
					url:'/pages/productDetail/productDetail'
				})
				// sessionStorage.setItem('productId',item.id)
				 wx.setStorageSync('productId', item.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
.restaurantList{
				display: flex;
				flex-wrap: wrap;
				width:100%;
				.restaurantItem:nth-child(1){
					height:100%;
				}
				.restaurantItem{
					width:calc(50% - 20upx);
					border-radius: 20upx;
					padding:10upx;
					font-size:28upx;
					font-weight:400;
					.imgItem{
						width:100%;
						height:260upx;
						border-radius: 40upx;
						overflow: hidden;
						img{
							width:100%;
							height: 100%;
						}
						margin-bottom:10upx;
					}
				}
				.priceItem{
					text-decoration: line-through;
					font-size: 32upx;
					color:#ccc
				}
			}
</style>
