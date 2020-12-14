<template>
	<view class="navigation">
			<view class="navItem" v-for="(item,index) in navList" :key = "index" @click="navClick(item,index)"
			:class="navIndex === index?'css1':'css2'" >
						<!-- <img :src="item.url" alt=""> -->
				<text class="iconfont" :class="item.url"></text>
				<view>{{item.name}}</view>
			</view>
	</view>
</template>

<script>
	export default {
		// props:{
		// 	navIndex:{
		// 		type:Number,
		// 		default:0
		// 	}
		// },
		data() {
			return {
				navIndex:0,
				navList:[{
					router:'/pages/shopIndex/shopIndex',
					name:'首页',
						url:'icon-shouye'
					},
					{
						router:'/pages/myShop/myShop',
						name:'全部宝贝',
						url:'icon-leimupinleifenleileibie',
					},
					{
						router:'/pages/myCar/index1',
						name:'购物车',
						url:'icon-icon7',
					},
				],
				// currentIndex:0
			}
		},
		computed:{
		 // someCss(){
			//  this.currentIndex === 
		 // }
		},
		methods: {
			navClick(item,index){
				// uni.navigateTo({
				// 	url:item.router
				// })
				this.navIndex = index
				console.log(item,'navnav',index)
				this.$emit('navClick',item)
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.css1{
		color:#562a1a
	}
	.css2{
		color:#847b7b
	}
	.navigation{
		padding-bottom:50upx;
		display: flex;
		color:#c0c0c0;
		width:100%;
		height:100upx;
		position: fixed;
		box-shadow: 2px 0px 8px 10px rgba(0, 0, 0, 0.08);
		// padding-bottom:30upx;
		 bottom:0;
		 // border-top:1px solid #797b7e;
		 background-color: white;
		 z-index: 100000;
		 font-size:28upx;
		 .iconfont{
			 font-size:44upx;
		 }
		.navItem{
			flex:1;
			display: flex;
			flex-direction: column;
			width:20%;
			justify-content: center;
			align-items: center;
			img{
				width:30%;
			}
		}
	}
</style>
