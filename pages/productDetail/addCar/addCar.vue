<template>
		<view class="house-sheet" v-show="carVisit">
			<div class="mask">
				<div class="title">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607429349421&di=6ad38b55ead437850c6a74ee1a0f9770&imgtype=0&src=http%3A%2F%2Fimg02.hc360.com%2Fwujin%2F201708%2F201708011139571607.jpg" alt="">
					<span>
						{{product.price}}
					</span>
				</div>
				<div>
					<div>产品规格：</div>
					<div>
						
					</div>
				</div>
				<div class="bottom">
					<div>
						加入购物车
					</div>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		props:['value'],
		data() {
			return {
				carVisit:true,
				product:{
					price:40
				}
			};
		},
		watch:{
			carVisit(val){
				this.$emit('input')
			},
			value(val){
				this.carVisit = val
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		position: fixed;
		width:100%;
		// height:90%;
		bottom:0;
		background: white;
		padding:20upx;
		
	}
.house-sheet{
	
	position: fixed;
	width:100%;
	height:100%;
	background: rgba(0,0,0,0.3);
	bottom:0;
	.title{
		img{
			width:140upx;
			height:140upx
		}
	}
}
</style>
