<template>
	<view class="container">
		<!-- <search class="sousuo"></search> -->
			<view class="shopName">
			<span>
				{{shop.name}}
			</span>
			<span class="label">
				<span>店铺</span>
			</span>
		</view>
		<view class="allProduct" >
			<view class="typelist">
				<span>销量</span>
				<span class="price" @click="setActive">价格
				<view class="opra" >
					<span  :class="priceActive==''?'top':priceActive?'topActive':'top1'"></span>
					<span  :class="priceActive===''?'bottom':!priceActive?'bottomActive':'bottom1'"></span>
				</view>
				</span>
				
			</view>
			<view  class="procuctBox">
				<product-list :dataList="restaurantList" @click="toProductPage"></product-list>
			</view>
		</view>
		<!-- <navigation @click="getItem"></navigation> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				priceActive:'',
				shop:{
					name:'美的专卖店'
				},
				restaurantList:[{
					id:1,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:2,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:3,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:2,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:3,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:2,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:3,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:2,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:3,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:2,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					id:3,
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				},
				{
					name:'？？是个很厉害的装修店',
					url:require('@/pages/index/images/res.png')
					
				}],
			}
		},
		methods: {
			setActive(){
				console.log(this.priceActive)
				this.priceActive = !this.priceActive
			},
			getItem(item){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
			background-color: #F6F7FB;
			position: absolute;
			width:100%;
			min-height: 100%;
			.sousuo{
				background-color: white;
			}
			.shopName{
				padding-top:20upx;
				background-color:#ccc;
				display: flex;
				flex-direction: column;
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
			.typelist{
				padding:10upx 0;
				display: flex;
				color:#706969;
				span{
					margin:10upx;
				}
				.price{
					display: flex;
					.opra{
						display: flex;
						flex-direction: column;
						margin-top:-8upx;
						span{
							display: block;
							width:0;
						    height:0;
						    border:10upx solid;
						}
						.top{
							 border-color:  transparent transparent #C0C0C0 transparent
						}
						.bottom{
							border-color: #C0C0C0 transparent transparent transparent;
							margin-top:4upx;
						}
						.top1{
							 border-color:  transparent transparent red transparent
						}
						.bottom1{
							border-color: #C0C0C0 transparent transparent transparent;
							margin-top:4upx;
						}
						.topActive{
							 border-color:  transparent transparent red transparent
						}
						.bottomActive{
							border-color: red transparent transparent transparent;
							margin-top:4upx;
						}
						
					}
				}
				
			}
			.procuctBox{
				background-color: white;
				padding:20upx;
			}
		}
</style>
