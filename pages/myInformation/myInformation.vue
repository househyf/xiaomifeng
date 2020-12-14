<template>
	<view class="container">
		<view class="myHead">
			<view>
				<img :src="require('@/pages/myCenter/head.png')" alt="">
			</view>
		</view>
		<form @submit="formSubmit">
			<view class="uni-form-item formlabelItem">
				<view class="title">昵称</view>
				<input class="uni-input" name="input" placeholder="" />
			</view>
			<view class="uni-form-item formlabelItem">
				<view class="title">性别</view>
				<input class="uni-input" name="input" placeholder="" />
			</view>
			<view class="uni-form-item formlabelItem">
				<view class="title">个性签名</view>
				<input class="uni-input" name="input" placeholder="" />
			</view>
			<view class="uni-btn-v">
                <!-- <button form-type="submit">保存</button> -->
            </view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.myHead{
	display: flex;
	justify-content: center;
	margin:40upx 0;
	view{
		border-radius: 50%;
		width:200upx;
		height:200upx;
		overflow: hidden;
	}
	img{
		width:200upx;
		height:200upx;
	}
}
.formlabelItem{
	display: flex;
	height:120upx;
	margin:0 30upx;
	display: flex;
	align-items: center;
	border-bottom:1px solid #CCCCCC;
	view{
		margin-right:20upx;
	}
	input{
		color:#3F536E
	}
}
.uni-btn-v{
	margin:50upx 100upx;
}
</style>
