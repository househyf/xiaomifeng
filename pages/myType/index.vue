<template>
	<view class="typeContainer">
		<!-- <search class="typeSearch" @focus="searchFocus"></search> -->
		<view class="content">
			<view class="type" >
				<view>
					<view v-for="(item,index) in typeList" :key = "index" class="typeItem"
					@click="typeClick(item,index)"
					:style="currentIndex===index?'background:#F6F7FB;color:orange':'background:white'">
						<view>{{item.classifyName}}</view>
						<view :style="currentIndex===index?'background:white;color:orange':''">{{item.id}}</view>
					</view>
				</view>
			</view>
			<view class="typeContent">
				<view>
					<view class="title">
						<!-- {{typeContentList.name}} -->
					</view>
					<view class="container-content">
						<view class="content">
							<view class="contentItem" v-for="(item1,index1) in typeContentList" :key ="index1"
							@click="intoShop(item1)">
								<img :src="item1.bussinessPhoto" alt="">
								<view class="detail">
									<span class="title1">{{item1.businessName}}</span>
									<!-- <span>月售9999</span> -->
									<span>免配送费</span>
									<span>支持预定</span>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- <view>2222</view> -->
			</view>
		</view>
		<!-- <navigation :navIndex="navIndex"></navigation> -->
	</view>
</template>

<script>
	import {getType,getShopByType} from '@/api/type.js'
	export default {
		data() {
			return {
				typeContentList1:[{
					name:'分类1',
					children:[
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店铺1',
						},
						{
							image:require('@/pages/index/images/icon2.png'),
							name:'店铺2',
						}
					]
				},{
					name:'分类1',
					children:[
						{
							image:require('@/pages/index/images/icon2.png'),
							name:'0000001',
						},
						{
							image:require('@/pages/index/images/icon1.png'),
							name:'店333333铺2',
						}
					]
				}
				],
				typeContentList:[],
				typeList:[{
					id:1,
					name:'分类1',
					
				},
				{
					id:1,
					name:'分类2',
				},
				{
					id:1,
					name:'分类3',
				},
				{
					id:1,
					name:'分类1',
					
				},
				{
					id:1,
					name:'分类2',
				},
				{
					id:1,
					name:'分类3',
				},
				{
					id:1,
					name:'分类5',
				}],
				currentIndex:0,
				navIndex:1,
			}
		},
		onLoad:function(option){
			 console.log(option.query)
			  const eventChannel = this.getOpenerEventChannel()
			  eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
			  eventChannel.emit('someEvent', {data: 'test'});
			  // 监听getInex事件，获取上一页面通过eventChannel传送到当前页面的数据
			  eventChannel.on('getIndex', function(data) {
			    console.log(data.data)
				// this.navIndex = data.data
			  })
			  getType()
				.then(res=>{
					if(res.code===0){
						this.typeList = res.businessTypeList
						console.log(res,'resdata')
						this.getShopByType(res.businessTypeList[0].id)
					}
				})
			  // this.typeContentList = this.typeContentList1[0]
		},
		methods: {
			searchFocus(){
				uni.redirectTo({
					url:'/pages/searchShop/searchShop'
				})
			},
			getShopByType(type){
				getShopByType(type)
					.then(res=>{
						console.log(res)
						this.typeContentList = res.businessList
					})
			},
			typeClick(item,index){
				this.currentIndex = index
				// if(this.typeContentList1[index]){
				// 	this.typeContentList = this.typeContentList1[index]
				// }
				// console.log(this.typeContentList)
				this.getShopByType(item.id)
			},
			intoShop(item1){
				console.log(1111)
				uni.redirectTo({
					url:'/pages/shopIndex/index',
				})
				// sessionStorage.setItem('shopId',item1.id)
				 wx.setStorageSync('shopId', item1.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.typeContainer{
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: absolue;
		width:100%;
			// height: 100vh;
			overflow-y: hidden;
	}
	.typeSearch{
		background-color: white;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		// padding:20upx 20upx;
		
		/deep/
		.searchClass{
			// border-radius: 20upx;
			margin-right: 0;
		}
	}
.container-content{
	// position: absolue;
	background-color: white;
	margin:20upx;
	// padding-bottom: 50upx;
	// width:100%;
		height: 100%;
		overflow-y: scroll;
	}
.content{
	// position: absolute;
	height: calc(100% - 120upx);
	display: flex;
	// height:700upx;
	.type{
		height: 100%;
	// padding-bottom: 100upx;
	overflow-y: scroll;
		width:30%;
		// background-color: skyblue;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		background-color: white;
		.typeItem{
			display: flex;
			flex-direction: column;
			// border-bottom: 1px solid rgba(0,0,0,0.2);
			align-items: center;
			justify-content: center;
			padding:20upx 0;
			view:last-child{
				font-size:20upx;
				width:80upx;
				height:30upx;
				line-height: 30upx;
				background-color: white;
				border-radius: 20upx;
				background-color: #f6f6f6;
				color:#c0c0c0
			}
		}
		view{
			width:100%;
			// height:100upx;
			text-align: center;
			// margin:0 aoto;
			// line-height:100upx;
		}
	}
	.typeContent{
		// width:70%;
		flex:1;
		// background-color: pink;
		// display: flex;
		// flex-direction: column;
		// margin:20upx;
		background-color: #F6F7FB;
		overflow-y:scroll;
		.title{
			margin:20upx;
		}
		.content{
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			margin:20upx;
			background-color: white;
			.contentItem:last-child{
				border:none;
			}
			.contentItem{
				display: flex;
				// align-items: center;
				margin:20upx;
				padding-bottom: 20upx;
				border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
				img{
					padding:0 20upx;
					width:100upx;
					height:100upx;
				}
				view{
					display: flex;
					flex-direction: column;
				}
				.detail{
					font-size:20upx;
					color:#C0C0C0;
					.title1{
						font-size:30upx;
						color:black;
					}
				}
			}
		}
	}
}
</style>
