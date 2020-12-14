<template>
	<d2-container>
		<view class="myMsg">
			<view class="myHead">
				<view class="headBox">
					<img src="@/pages/myCenter/head.png" alt="">
				</view>
				<view>
					<view class="nameBox">
						<!-- <button open-type="getUserInfo" @getuserinfo="getuserinfo">
							{{user.name?user.name:'点击登陆'}}
						</button> -->
						<!-- <button open-type="getPhoneNumber" @bindgetphonenumber="getphone">
							点击登陆
						</button> -->
						<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
							点击获取手机号码
						</button>
					</view>
					<view class="growBox">
						极致装修，极致服务～
					</view>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="myOrder">
			<view class="orderContainer">
				<view>
					<span class="iconfont icon-daifukuan1"></span>
					<span>全部</span>
					<span class="numberCss"></span>
				</view>
				<view>
					<span class="iconfont icon-daifukuan1"></span>
					<span>待付款</span>
					<span class="numberCss"></span>
				</view>
				<view>
					<span class="iconfont">&#xe613;</span>
					待发货
					<span class="numberCss"></span>
				</view>
				<view>
					<text class="iconfont">&#xe680;</text>
					待收货
					<span class="numberCss"></span>
				</view>
			<!-- 	<view>
					<text class="iconfont">&#xe602;</text>
					评价
					<span class="numberCss">1</span>
				</view> -->
				<view>
					<text class="iconfont">&#xe6bb;</text>
					退款/售后
					<span class="numberCss"></span>
				</view>
			</view>
		</view>
		<view class="centerCss">
			<view v-for="(item,index) in list" :key = "index" class="borderCss" @click="toClickEvent(item,index)">
				<view>
					<text class="iconfont" v-html="item.icon"></text>
					{{item.name}}
				</view>
				<text class="iconfont">&#xe635;</text>
			</view>
			
		</view>
		<!-- <navigation :navIndex="navIndex"></navigation> -->
	</d2-container>
</template>

<script>
	import {getBannerList} from '@/api/myCenter.js'
	export default {
		data() {
			return {
				navIndex:3,
				list:[{
					id:1,
					name:'我的订单',
					icon:'&#xe652;'
				},
				// {
				// 	id:2,
				// 	name:'退换货',
				// 	icon:''
				// },
				
				// {
				// 	id:3,
				// 	name:'我的评价',
				// 	icon:'&#xe60e;'
				// },
				{
					id:4,
					name:'地址管理',
					icon:'&#xe601;'
				},
				{
					id:5,
					name:'个人信息',
					icon:'&#xe617;'
				},
				{
					id:6,
					name:'在线客服',
					icon:'&#xe621;'
				},
				{
					id:6,
					name:'在线客服',
					icon:'&#xe621;'
				}],
				user:{
					name:''
				},
				orderContent:[]
			}
		},
		onLoad(){
			this.bannerAsk()
		},
		methods: {
			bannerAsk(){
				getBannerList()
					.then(res=>{
						console.log(res)
					})
			},
			toClickEvent(item,index){
				if(item.id===5){
					wx.navigateTo({
					    url: '/pages/myInformation/myInformation'
					});
				}else if(item.id===4){
					uni.navigateTo({
					    url: '/pages/myAddress/myAddress'
					});
				}
			},
			getuserinfo(res){
				// console.log(res)
				// wx.getuserinfo({
				// 	success(res){
				// 		console.log(res)
				// 	}
				// })
			},
			getPhoneNumber(e){
				console.log(e)
				wx.login({
					success(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
$color:#654a40;
.numberCss{
	    position: absolute;
	    top: -6px;
	    right: 36upx;
	    width: 30upx;
		color:$color;
	    height: 30upx;
	    border: 1px solid $color;
	    text-align: center;
	    border-radius: 50%;
	    font-size: 24upx;
	    background: white;
}
.myMsg{
	height:222upx;
	background-color: $color;
	display: flex;
	justify-content: space-between;
	padding:0 30upx;
	// background-image: linear-gradient(270deg, #FFC246 0%, #FFB216 100%);
	padding-bottom:60upx;
	align-items: center;
	.myHead{
		display: flex;
		align-items: center;
	}
	.headBox{
		width:132upx;
		height:132upx;
		border-radius: 50%;
		overflow: hidden;
		margin:0 30upx;
		img{
			width:100%;
			height:100%
		}
	}
	.nameBox{
		font-size:40upx;
		font-weight:400;
	}
	.growBox{
		font-size:24upx;
		color:#C0C0C0;
	}
	
}
.myOrder{
	
	// height:300upx;
	background-color: white;
	margin:0 20upx;
	border-radius: 30upx;
	position: relative;
	top:-50upx;
	.orderTitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color:black;
		// margin:20upx;
		padding:30upx;
		padding-bottom: 20upx;
		border-bottom:1px solid rgba(0,0,0,0.1) ;
		span:nth-child(2){
			color:#a2a2a2;
			font-size: 26upx;
		}
	}
	.orderContainer{
		color:$color;
		display: flex;
		font-size:28upx;
		view{
			position: relative;
			width:20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin:40upx 0;
		}
		.iconfont{
			font-size:40upx;
		}
	}
}
.centerCss{
	display: flex;
	background-color: white;
	flex-direction: column;
	color:$color;
	border-radius: 40upx;
	margin:0 20upx;
	margin-bottom: 30upx;
	font-size: 28upx;
	view{
		// margin:20upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin:20upx 10upx;
		padding-bottom: 10upx;
		.iconfont{
			font-size:36upx;
			margin-right: 20upx;
		}
	}
}
.borderCss{
	border-bottom:1px solid rgba(0,0,0,0.1) ;
}
.borderCss:last-child{
	border-bottom:none;
}
</style>
