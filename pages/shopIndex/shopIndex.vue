<template>
	<d2-container>
		<view class="shopName">
			<view class="name">
				<span>
					{{shop.name}}
				</span>
				<span class="label">
					<span>店铺</span>
				</span>
			</view>
			<icon type="search" size="16" @click="searchGoods"/>
		</view>
			<!-- <search></search> -->
			<!-- 轮播图 -->
			<view class="uni-padding-wrap swiperListBox">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(item,index) in swiperList" :key = "index">
								<img :src="item.url" alt="">
								<view class="swiper-item uni-bg-red">
								{{item.color}}
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 分类 -->
			<view class="typeListBox">
				<view class="typeItemBox" v-for="(item,index) in typeItemList" :key = "index"
				@click="intoDetail(item)">
					<img :src="item.classifyPhoto" alt="">
					<view class="typeItemLabel">
						{{item.classifyName}}
					</view>
				</view>
			</view>
			<view style="margin:30upx">
				<d2-box title="热门商品" @getMore="getMore" >
					<product-list :dataList="restaurantList" @click="toProductPage" ></product-list>
				</d2-box>
			</view>
		</view>
		
	</d2-container>
</template>
<script>
	import {getShopType,shopHotGoods} from '@/api/myShop.js'
	// import {shopHotGoods} from '@/api/myShop.js'
	export default {
		props:{
			shopId:{
				type:String || Number,
				default:''
			},
			typeItemList:{
				type:Array,
				default:()=>{
					return []
				}
			},
			restaurantList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				shop:{
					name:'美的专卖店'
				},
				swiperList:[{
					name:'111',
					color:'red',
					url:'https://marketplace.canva.cn/EAEAo28bqZM/3/0/1600w/canva-%E8%93%9D%E9%BB%84%E8%89%B2%E6%B8%A9%E9%A6%A8%E6%AF%8D%E5%A9%B4%E7%94%B5%E5%95%86%E6%B8%85%E6%96%B0%E6%AF%8D%E5%A9%B4%E4%BF%83%E9%94%80%E4%B8%AD%E6%96%87%E7%94%B5%E5%95%86banner-aMA0-ygraqU.jpg'
				},{
					name:'222',
					url:'https://marketplace.canva.cn/EAELB0iOXbw/1/0/1600w/canva-%E6%A9%99%E9%BB%84%E8%89%B2%E5%8F%AF%E7%88%B1%E7%94%B7%E5%AD%A9%E7%9D%A1%E8%A7%89%E6%8F%92%E7%94%BB%E5%8F%AF%E7%88%B1%E5%8F%8C%E5%8D%81%E4%B8%80%E8%B4%AD%E7%89%A9%E7%8B%82%E6%AC%A2%E5%AD%A3%E6%AF%8D%E5%A9%B4%E4%BF%83%E9%94%80%E4%B8%AD%E6%96%87%E7%94%B5%E5%95%86banner-Op6VCIn1g2o.jpg',
				}],
				background: ['red', 'green', 'yellow'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,           
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				danmuList: [{
			                    text: '第 1s 出现的弹幕',
			                    color: '#ff0000',
			                    time: 1
			                },
			                {
			                    text: '第 3s 出现的弹幕',
			                    color: '#ff00ff',
			                    time: 3
			                }
			 ],
			}
		},
		watch:{
			shopId(val){
				console.log(val,'shopId')
			}
		},
		methods: {
			getMore(){
				this.$emit('getMore')
			},
			getNav(item){
				console.log(item,'navnav')
			},
			 videoErrorCallback: function(e) {
			    // uni.showModal({
			    //     content: e.target.errMsg,
			    //     showCancel: false
			    //  })
			},
			searchGoods(){
				uni.navigateTo({
					url:'/pages/searchGoods/searchGoods'
				})
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			toProductPage(val){
				uni.navigateTo({
				    url: '/pages/productDetail/productDetail?id='+val.id
				});
			},
			intoDetail(item){
				uni.navigateTo({
				    url: '/pages/moreGoods/moreGoods'
				});
				wx.setStorageSync('typeId',item.id)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.viewContainer{
		position: absolute;
		width:100%;
		height:100%;
		overflow-y: scroll;
	}
	.container{
		background-color: #F6F7FB;
		position: absolute;
		width:100%;
		padding-bottom: 100upx;
		// height:100%;
		.typeListBox{
			background-color: white;
			display: flex;
			// width:100%;
			flex-wrap: wrap;
			box-shadow: 2px 8px 8px 0px rgba(0, 0, 0, 0.08);
			margin:40upx 30upx;
			border-radius: 10upx;
			padding-top: 20upx;
			// border:1px solid #ccc;
			.typeItemBox{
				display: flex;
				height:116upx;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				// margin:30upx;
				width:20%;
				margin-bottom: 28upx;
				img{
					width:60%;
					// width:70upx;
					// height:70upx;
				}
				.typeItemLabel{
					color:black;
					font-size: 24upx;
					
				}
			}
		}
		.swiperListBox{
			background-color: white;
			height:200upx;
			margin:40upx 30upx;
			border-radius: 50upx;
			overflow: hidden;
			img{
				width:100%;
				height:160upx;
			}
		}
		.restaurantHappen{
			background-color: white;
			margin:20upx 30upx;
			padding:20upx;
			border-radius: 20upx;
			.titleBox{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom:10upx;
				.titleText{
					font-size:36upx;
					color:#786f20
				}
				.andMore{
					font-size:28upx;
				}
			}
			
		}
		
	}
	.videoBox{
		width:calc(100% - 60upx);
		margin:30upx;
		#myVideo{
			width:100%;
		}
	}
	.shopName{
		// margin-top:5px;
		padding-top:25upx;
		background-color:#ccc;
		display: flex;
		// flex-direction: ;
		align-items: center;
		justify-content:space-between;
		.name{
			display: flex;
			flex-direction: column;
		}
		.label{
			background-color: red;
			color:white;
			// padding:0 20upx;
			border-radius: 20upx;
			width:100upx;
			font-size:24upx;
			text-align: center;
		}
		padding:30upx;
		padding-top:0upx;
	}
</style>
