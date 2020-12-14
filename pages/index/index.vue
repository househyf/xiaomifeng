<template>
	<d2-container>
			<sort-bar></sort-bar>
			<!-- <dt-dropdown></dt-dropdown> -->
			<!-- <search @focus="focusSearch"></search> -->
			<view class="searchBar" @click="focusSearch">
				<icon type="search" size="16"/>
				<span>请输入你想搜索的内容</span>
			</view>
			<!-- 轮播图 -->
			<view class="uni-padding-wrap swiperListBox">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(item,index) in swiperList" :key = "index">
								<img :src="item.bannerPhoto" alt="">
								<!-- <view class="swiper-item uni-bg-red">
								{{item.bannerName}}
								</view> -->
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 分类 -->
			<view class="typeListBox">
				<view class="typeItemBox" v-for="(item,index) in typeItemList" :key = "index" @click="intoGoods(item)">
					<img :src="item.classifyPhoto" alt="">
					<view class="typeItemLabel">
						{{item.classifyName}}
					</view>
				</view>
			</view>
			<div class="marginCss">
				<d2-box title="发现好物" @getMore="getMore">
					<product-list :dataList="restaurantList" @click="toProductPage"></product-list>
				</d2-box>
			</div>
			
			<!-- 视频 -->
			<view class="videoBox">
			   <video id="myVideo"
				  @error="videoErrorCallback" :danmu-list="danmuList" autoplay enable-danmu danmu-btn controls></video>
			</view>
		<view class="navigation">
				<view class="navItem" v-for="(item,index) in navList" :key = "index" @click="$router.push(item.router)">
						<img :src="item.url" alt="">
						<view>{{item.name}}</view>
				</view>
		</view>
		
		<!-- <navigation></navigation> -->
	</d2-container>
</template>
<script>
	import { getBannerList,getHotGoods,getType } from '@/api/myCenter.js'
	export default {
		data() {
			return {
				 option1: [
				      { text: '全部商品', value: 0 },
				      { text: '新款商品', value: 1 },
				      { text: '活动商品', value: 2 },
				    ],
				    option2: [
				      { text: '默认排序', value: 'a' },
				      { text: '好评排序', value: 'b' },
				      { text: '销量排序', value: 'c' },
					  ],
					  value1:0,
					  value0:'a',
				swiperList:[],
				background: ['red', 'green', 'yellow'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				restaurantList:[],
				duration: 500,           
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				typeItemList:[
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'装修'
					},
					
					{
						url:require('@/pages/index/images/icon1.png'),
						label:'全部分类'
					},
				],
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
		onLoad:function(options){
			// wx.getSetting({
			//   success (res) {
			//     console.log(res.authSetting)
			//     wx.authorize({
			// 		scope:'scope.userInfo',
			// 		success(res){
						
			// 		}
			// 	})
			//   }
			// })
			let data = {
				id:1111
			}
			this.getBanner()
			this.getHotGoods()
			this.getType()
		},
		onReady(){
			// this.$refs.popup.open()
		},
		methods: {
			focusSearch(){
				wx.navigateTo({
					url:'/pages/searchGoods/searchGoods'
				})
				wx.setStorageSync('shopId','')
			},
			getMore(){
				console.log('更多')
				wx.setStorageSync('typeId','')
				wx.redirectTo({
					url:'/pages/moreGoods/moreGoods'
				})
			},
			getType(){
				getType()
					.then(res=>{
						if(res.code===0){
							this.typeItemList = res.goodsTypeList
							// this.restaurantList = res.bannerList
						}
					})
			},
			getHotGoods(){
				getHotGoods()
					.then(res=>{
						if(res.code===0){
							this.restaurantList = res.hotGoodsDTOList
							console.log(this.restaurantList,'this.restaurantList')
						}
					})
			},
			getBanner(){
				getBannerList()
					.then(res=>{
						console.log(res)
						if(res.code===0){
							this.swiperList = res.bannerList
						}
				})
			},
			 videoErrorCallback: function(e) {
			    // uni.showModal({
			    //     content: e.target.errMsg,
			    //     showCancel: false
			    //  })
			},
			intoGoods(item){
				console.log(item)
				wx.setStorageSync('typeId',item.id)
				wx.setStorageSync('shopId','')
				wx.redirectTo({
					url:'/pages/moreGoods/moreGoods'
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
				console.log(val)
				wx.navigateTo({
				    url: '/pages/productDetail/productDetail?id='+val.id
				});
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
	.marginCss{
		margin:30upx;
		width:calc(100% - 60upx);
	}
	.searchBar{
		// background-color:#ececec;
		// border-radius: 40upx;
		// height:60upx;
		margin:20upx 30upx;
		// display: flex;
		// align-items: center;
			color:#ccc;
		// icon{
		// 	// line-height: 60upx;
		// 	margin-left:30upx;
		
		// }
		background-color:#f0f0f0;
		display: flex;
		// width:calc(100% - 40upx);
		// border:1upx solid #ccc;
		align-items: center;
		height:70upx;
		border-radius:20px;
		icon{
			padding-left:20upx;
			color:#CCCCCC
		}
	}
	
</style>
