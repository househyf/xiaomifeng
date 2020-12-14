<template>
	<view class="addressee">
		<view  class="addressBox">
			<view class="firstName">
				收
			</view>
			<view class="msg" :style="{'fontSize':fontSize}">
				<view>
					<span class="name">{{user.name}}</span>
					<span class="phone">{{user.phone}}</span>
				</view>
				<view>
					<span>{{user.address}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			user:{
				type:Object,
				default:()=>{
					return {}
				}
			},
			fontSize:{
				type:String,
				default:'28upx'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import '@/pages/myAddress/address.scss';
.addressee{
	margin:20upx;
	background-color: white;
	overflow: hidden;
	border-radius: 20upx;
	display: flex;
	.firstName{
		background-color: orange;
	}
	.addressBox{
		
		.msg{
			// font-size:32upx;
			// width:90%;
			max-width: 100%;
			.name{
				font-size:32upx;
			}
		}
	}
}
</style>
