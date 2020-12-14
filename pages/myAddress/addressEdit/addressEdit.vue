<template>
	<view>
		<form @submit="formSubmit">
			<view class="uni-form-item formlabelItem">
				<view class="title">收货人</view>
				<input class="uni-input" name="name" :value="form.name" placeholder="" />
			</view>
			<view class="uni-form-item formlabelItem">
				<view class="title">手机号码</view>
				<input class="uni-input" name="phone" :value="form.phone" placeholder="" />
			</view>
			<!-- <view class="uni-form-item formlabelItem">
				<view class="title">所在地区</view>
				<span class="uni-input" name="area" placeholder="" >点击选择</span>
			</view> -->
			<view  class="uni-form-item  address">
				<view class="title">收货地址</view>
				<textarea @blur="bindTextAreaBlur" placeholder="" :value="form.address"/>
			</view>
			<view  class="uni-form-item setDefault">
				<view class="title" style="min-width: 240upx;">设为默认地址 </view>
				<switch @change="switch2Change" :checked="form.default" />
			</view>
			<view class="delAd">
				删除收货地址
			</view>
			<view class="uni-btn-v baocun">
		        <button form-type="submit">保存</button>
		    </view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					default:false,
					address:'你的好好读书莱德基',
					name:'2222',
					phone:'13413462624'
				}
			}
		},
		onLoad:function(option){
			console.log(option)
		},
		methods: {
			formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                var formdata = e.detail.value
				this.form = Object.assign(this.form,formdata)
				uni.showToast({
				    title: '保存成功',
				    duration: 1000,
					success:function(){
						setTimeout(()=>{
							uni.navigateBack({
								
							})
						},1000)
					}
				});
				
            },
			 bindTextAreaBlur: function (e) {
				this.form.address = e.detail.value
			 },
			 switch2Change:function(e){
				 console.log(e.detail.value,'switch')
				 this.form.default = e.detail.value
			 },
		}
	}
</script>

<style lang="scss" scoped>
.formlabelItem{
	display: flex;
	height:120upx;
	margin:0 30upx;
	display: flex;
	align-items: center;
	border-bottom:1px solid #e2e1e1;
	.title{
		margin-right:30upx;
		// width:250upx;
	}
}
.address{
	// height:300upx;
	display: flex;
	margin:30upx 30upx;
	height:200upx;
	border-bottom:1px solid #e2e1e1;
	.title{
		width:180upx;
	}
	textarea{
		height:200upx;
		margin-top: 2upx;
	}
}
.baocun{
	// margin: 10upx 100upx;
	position: absolute;
	bottom:300upx;
	width:90%;
	left:50%;
	transform: translateX(-50%);
	// border-radius: 40upx;
	// border:1px solid #ccc;
	// overflow: hidden;
	/deep/
	button{
		background-color: #da5d05;
		// border:1px solid #;
		border-radius: 40upx;
		color:white;
		height:80upx;
		line-height: 80upx;
	}
	/deep/
	uni-button:after{
		border:none;
	}
}
.setDefault{
	height:120upx;
	border-bottom:1px solid #e2e1e1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin:0 30upx;
}
.delAd{
	color:#da5d05;
	margin:30upx;
}
</style>
