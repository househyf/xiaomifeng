<template>
	<view class="viewContainer">
		<view class="container">
			<!-- 商品展示 -->
			<view class="uni-padding-wrap swiperListBox">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper">
							<swiper-item v-for="(item,index) in product.goodsBannerList||[]" :key = "index" :current="index">
								<img :src="item.url" alt="">
								<view class="currentPage">
									{{index+1}}/{{swiperList.length}}
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 商品描述 -->
			<view class="productMsg">
				<view>
					<span>¥</span>
					<span>{{product.currentPrice}}</span>
					<span>价格¥{{product.originalPrice}}</span>
				</view>
				<view>
					直通背心v领毛衣慵懒宽松
				</view>
			</view>
			<!-- 店铺描述 -->
			<view class="shop">
				<view class="shopTitle">
					<img :src="require('@/pages/myCenter/head.png')" alt="">
					JNBY旗舰店
				</view>
				<view class="opra">
					<span @click="intoShop">
						进店逛逛
					</span>
					<span>
						全部宝贝
					</span>
				</view>
			</view>
			<!-- 宝贝详情 -->
			<view class="detail">
				<view class="title">
					宝贝详情
				</view>
				<view>
					
				</view>
			</view>
			<!-- 地步导航栏 -->
			<view class="navigator">
				<view class="left">
					<span>
						<text class="iconfont">&#xe680;</text>
						店铺
					</span>
					<!-- <span>
						<text class="iconfont">&#xe680;</text>
						客服
					</span> -->
					<!-- <span>
						<text class="iconfont">&#xe680;</text>
						收藏
					</span> -->
				</view>
				<view class="oprator">
					<view @click="addCar">加入购物车</view>
					<view>购买</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view>
				
			</view>
		</uni-popup>
		<add-car></add-car>
	</view>
</template>

<script>
	import addCar from "./addCar/addCar.vue"
	import {getProductDetail} from '@/api/productDetail.js'
	export default {
		components:{
			addCar
		},
		data() {
			return {
				show:false,
				actions: [
				      {
				        name: '选项',
				      },
				      {
				        name: '选项',
				      },
				      {
				        name: '选项',
				        subname: '描述信息',
				        openType: 'share',
				      },
				 ],
				swiperList:[{
					name:'111',
					color:'red',
					url:'https://marketplace.canva.cn/EAEAo28bqZM/3/0/1600w/canva-%E8%93%9D%E9%BB%84%E8%89%B2%E6%B8%A9%E9%A6%A8%E6%AF%8D%E5%A9%B4%E7%94%B5%E5%95%86%E6%B8%85%E6%96%B0%E6%AF%8D%E5%A9%B4%E4%BF%83%E9%94%80%E4%B8%AD%E6%96%87%E7%94%B5%E5%95%86banner-aMA0-ygraqU.jpg'
				},{
					name:'222',
					url:'https://marketplace.canva.cn/EAELB0iOXbw/1/0/1600w/canva-%E6%A9%99%E9%BB%84%E8%89%B2%E5%8F%AF%E7%88%B1%E7%94%B7%E5%AD%A9%E7%9D%A1%E8%A7%89%E6%8F%92%E7%94%BB%E5%8F%AF%E7%88%B1%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E5%AD%A3%E6%AF%8D%E5%A9%B4%E4%BF%83%E9%94%80%E4%B8%AD%E6%96%87%E7%94%B5%E5%95%86banner-Op6VCIn1g2o.jpg',
				}],
				restaurantList:[{
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				}],
				productId:'',
				product:{}
			}
		},
		onLoad(options){
			console.log(options)
			this.productId = wx.getStorageSync('productId')
			console.log(this.productId)
			getProductDetail(this.productId)
				.then(res=>{
					console.log(res)
					if(res.code===0){
						this.product = res.dsGoodsEntity
					}
				})
		},
		methods: {
			addCar(){
				this.show = true
			},
			onClose(){},
			onSelect(){},
			intoShop(){
				console.log(this.product)
				wx.redirectTo({
					url:'/pages/shopIndex/index'
				})
				wx.setStorageSync('shopId',this.product.businessId)
			}
		}
	}
</script>

<style lang="scss" scoped>
.viewContainer{
	position: absolute;
	width:100%;
	background-color: #F6F7FB;;
	height:100%;
	overflow-y: scroll;
	.container{
		padding-bottom:120upx;
	}
	
}
.swiperListBox{
	height:375*2upx;
	.currentPage{
		position: absolute;
		bottom:40upx;
		right:40upx;
		font-size:28upx;
		color:white;
		background-color: rgba(0,0,0,0.3);
		border-radius: 30upx;
		padding:10upx 20upx;
	}
	img{
		width:100%;
		height:100%;
	}
	/deep/
	.swiper{
		height:375*2upx;
	}
}
.productMsg{
	display: flex;
	flex-direction: column;
	// margin:20upx;
	// border-radius: 20upx;
	background-color: white;
	padding:20upx;
	view:first-child{
		color:orange;
		span:first-child{
			font-size:24upx;
		}
		span:nth-child(2){
			font-size:40upx;
			margin-left:10upx;
		}
		span:last-child{
			text-decoration: line-through;
			color:#ccc;
			font-size:24upx;
			margin-left:10upx;
		}
	}
}
.navigator{
	display: flex;
	height:120upx;
	position: fixed;
	width:100%;
	bottom:0;
	background-color: white;
	border-top:1px solid #ccc;
	justify-content: space-between;
	align-items: center;
	text{
		color:pink;
	}
	.left{
		display: flex;
		span{
			color:#CCCCCC;
			font-size:24upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width:100upx;
			height:100upx
		}
	}
	
	.oprator{
		display: flex;
		height:80upx;
		line-height: 80upx;
		margin-right: 20upx;
		color:white;
		text-align: center;
		view:first-child{
			background-color: orange;
			width:220upx;
			border-top-left-radius: 40upx;
			border-bottom-left-radius: 40upx;
		}
		view:last-child{
			background-color: red;
			width:220upx;
			border-top-right-radius: 40upx;
			border-bottom-right-radius: 40upx;
			
		}
	}
}
.shop{
	// display: flex;
	// flex-direction: column;
	margin-top:20upx;
	background-color: white;
	padding:20upx;
	// border-radius: 20upx;
	.shopTitle{
		display: flex;
		img{
			width:100upx;
			height:100upx;
			margin-right:10upx;
		}
	}
	.opra{
		display: flex;
		justify-content: center;
		span{
			display: block;
			padding:10upx 20upx;
			margin-right:10upx;
			background-color: rgba($color: #000000, $alpha: 0.2);
			border-radius: 40upx;
			color:white;
			margin-top:20upx;
		}
	}
	
}
.detail{
	// height:40upx;
	width:100%;
		view:first-child{
			text-align: center;
			margin: 30upx 0;
		}
		view:last-child{
			// width:100%;
			height:1000upx;
			background: white;
		}
	}
</style>
