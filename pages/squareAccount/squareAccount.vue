<template>
	<view class="container">
		<!-- <view class="addressee">
			<view  class="addressBox">
				<view class="firstName">
					收
				</view>
				<view class="msg">
					<view>
						<span class="name">{{user.name}}</span>
						<span class="phone">{{user.phone}}</span>
					</view>
					<view>
						<span>{{user.address}}</span>
					</view>
				</view>
			</view>
		</view> -->
		<address-msg :user="user"></address-msg>
		<product-box :list="productList">
			<template slot="footer">
				<view>
					<view class="otherMsg">
						<span>配送方式</span>
						<span>快递</span>
					</view>
					<view class="otherMsg1">
						<span>订单备注</span>
						<input type="text"/>
					</view>
					<view class="acc">
						<span>共9件</span>
						<span>小计：</span>
						<span>¥5353</span>
					</view>
				</view>
			</template>
		</product-box>
		<view class="bottomBox">
			<view class="acc">
				<span>共9件</span>
				<span>小计：</span>
				<span>¥5353</span>
				<view>
					提交订单
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import productBox from './productBox/productBox'
	import addressMsg from '@/pages/addressMsg/addressMsg'
	export default {
		components:{
			productBox,addressMsg
		},
		data() {
			return {
				productList:[
					{
						shopname:'旗舰店',
						children:[{
							name:'水龙头',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						},
						{
							name:'水龙头',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						},
						{
							name:'水龙头',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						}]
					},
					{
						shopname:'旗舰店2',
						children:[{
							name:'水龙头2',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						},
						{
							name:'水龙头',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						},
						{
							name:'水龙头',
							label:'不锈钢',
							price:'484',
							img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604566120183&di=9d1332347ac43ccc883a99d89c5f6ea1&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2F80%2F34%2FwKgGTFfRAxiAbnseAAA4lG5V_9s859.jpg'
						}]
					}
				],
				user:{
					name:'小房子',
					phone:'13413462624',
					address:'广东省广州市海珠区赤岗街道利安花园39号383'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import '@/pages/myAddress/address.scss';
.container{
	padding-bottom: 110upx;
	position: absolute;
	background: #f9f9f9;
	width:100%;
}

.otherMsg{
		display: flex;
		justify-content: space-between;
		margin-left:60upx;
		height:80upx;
		// margin-right: 30upx;
		align-items: center;
	}
	.otherMsg1{
		margin-left:60upx;
		display: flex;
		input{
			margin:0 30upx;
		}
	}
.bottomBox{
		background: white;
		position: fixed;
		bottom:0;
		width:100%;
		// display: flex;
		// align-items: center;
	}
	.acc{
		padding:10upx 0;
		display: flex;
		// position: absolute;
		// bottom:0;
		// flex-: right;
		text-align: right;
		// float:right;
		justify-content:flex-end;
		align-items: center;
		view{
			// width:200upx;
			text-align: center;
			background-color: orange;
			padding:20upx;
			border-radius: 40upx;
			color:white;
			margin-right: 20upx;
			margin-left: 10upx;
		}
		span{
			margin:0 4upx;
		}
		span:nth-child(1){
			color:#C0C0C0
		}
		span:nth-child(3){
			color:orange
		}
	}
</style>
