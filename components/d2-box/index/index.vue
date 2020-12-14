<template>
		<view class="restaurantHappen">
			<view class="titleBox">
				<view class="titleText">
					{{title}}
				</view>
				<view class="andMore" @click="getMore" :style="{'color':rightColor}">
					{{rightText}}
				</view>
			</view>
			<slot></slot>
		</view>
</template>

<script>
	export default {
		props:{
			rightText:{
				type:String,
				default:'更多'
			},
			title:{
				type:String,
				default:'发现好店'
			},
			rightColor:{
				type:String,
				default:'black'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			getMore(){
				this.$emit('getMore')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.restaurantHappen{
		box-sizing: border-box;
		background-color: white;
		// margin:20upx;
		padding:20upx;
		// border-radius: 20upx;
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

</style>
