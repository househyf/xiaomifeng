<template>
	<view class="container">
		<!-- <div class="title">
			<span>''</span>
			<span class="center">我的收货地址</span>
			<span>添加新地址</span>
		</div> -->
		<view v-for="(item,index) in addressData" :key = "index" class="addressBox">
			<view class="firstName">
				{{item.name.substr(0,1)}}
			</view>
			<view class="msg">
				<view>
					<span>{{item.name}}</span>
					<span class="phone">{{item.phone}}</span>
				</view>
				<view>
					<span class="default" v-if="item.default">
							默认
					</span>
					<span>
						{{item.province}}
					</span>
					<span>
						{{item.city}}
					</span>
					<span>{{item.address}}
					</span>
				</view>
			</view>
			<view class="edit" @click="edit(item)">
				编辑
			</view>
		</view>
		<view class="add">
			<view @click="add">
				添加新地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressData:[{
					id:1,
					name:'小房子',
					phone:'13119863194',
					province:'广东省',
					city:'广州市',
					address:'海珠区赤岗edosjdsdkhdflhfkdhvkdhvvb vb街道222222',
					default:true
				},
				{
					id:2,
					name:'小房子',
					phone:'13119863194',
					province:'广东省',
					city:'广州市',
					address:'海珠区赤岗edosjdsdkhdflhfkdhvkdhvvb vb街道222222'
				},
				{
					id:3,
					name:'小房子',
					phone:'13119863194',
					province:'广东省',
					city:'广州市',
					address:'海珠区赤岗edosjdsdkhdflhfkdhvkdhvvb vb街道222222'
				},
				{
					id:4,
					name:'小房子',
					phone:'13119863194',
					province:'广东省',
					city:'广州市',
					address:'海珠区赤岗edosjdsdkhdflhfkdhvkdhvvb vb街道222222'
				},
				{
					name:'小房子',
					phone:'13119863194',
					province:'广东省',
					city:'广州市',
					address:'海珠区赤岗edosjdsdkhdflhfkdhvkdhvvb vb街道222222'
				}]
			}
		},
		methods: {
			edit(item){
				wx.redirectTo({
					url:'/pages/myAddress/addressEdit/addressEdit?id='+item.id
				})
			},
			add(){
				wx.redirectTo({
					url:'/pages/myAddress/addressEdit/addressEdit'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './address.scss';
	.container{
		width:100%;
		min-height: 100vh;
		background-color: #f9f9f9;
		}
		
		.title{
			// height: 160upx;
		}
		.edit{
			font-size:28upx;
			padding-left:20upx;
			border-left: 1px solid #ccc;
			color:#C0C0C0;
		}
	.title{
		// margin:20upx;
		height:100upx;
		padding:0 20upx;
		background-color: rgba($color: #ccc, $alpha: 0.5);
		color:black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span:last-child{
			color:#ccc;
			font-size:20upx;
		}
		.center{
			position: absolute;
			left:50%;
			transform: translateX(-50%);
		}
	}
	.default{
		font-size: 24upx;
	}
	.add{
		height:140upx;
		width:100%;
		background-color: white;
		position: fixed;
		bottom:0;
		display: flex;
		align-items: center;
		justify-content: center;
		view{
			// margin:0 auto;
			text-align: center;
			color:white;
			background-color: #be2828;
			width:550upx;
			border-radius:50upx;
			height:80upx;
			line-height: 80upx;
		}
	}
</style>
