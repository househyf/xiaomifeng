<template>
	<d2-container>
		<view class="banner">
			买家已付款
		</view>
		<address-msg :user="user" fontSize="32upx"></address-msg>
		<product-box :list="productList" class="restaurantHappen">
			<template slot="button">
				<view class="tuikuan">
					<span>
						退款
					</span>
				</view>
			</template>
			<template slot="footer">
				<view class="footer">
					<!-- <view>
						<span></span>
						<span>1111</span>
					</view> -->
					<view>
						<span>实付金额</span>
						<span>1111</span>
					</view>
				</view>
			</template>
		</product-box>
		<view class="baseMsg">
			<view class="title">订单信息</view>
			<view>
				<view>订单编号：2838484994949</view>
				<view>交易编号：2083848492838483334994949</view>
				<view>创建时间：2020-19-29</view>
				<view>付款时间：2020-01-29</view>
				<view>发货时间：2030-29-33</view>
			</view>
		</view>
		<footer-tab :list="footerList" class="fixedFooter"></footer-tab>
	</d2-container>
</template>

<script>
	import addressMsg from '@/pages/addressMsg/addressMsg'
	import footerTab from '@/pages/myOrder/footer/footer.vue'
	import productBox from '@/pages/squareAccount/productBox/productBox'
	export default {
		components:{
			addressMsg,productBox,footerTab
		},
		data() {
			return {
				footerList:[{
					label:'待付款'
				}],
				user:{
					name:'小房子',
					address:'广东省天河区中海康城花园郁金香2号201',
					phone:'12387477499'
				},
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
			}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.addressee{
	margin:0;
	border-radius:0;
	.addressBox .msg{
		font-size: 16px;
	}
}
.baseMsg{
	.title{
		font-size: 36upx;
	}
	background: white;
	margin:20upx 0;
	padding:20upx;
	view{
		margin-top:10upx;
	}
}
.restaurantHappen{
	margin-top:20upx;
	border-radius:0;
}
.addressBox .msg span{
	font-size:32upx;
}
.banner{
	height:140upx;
	line-height:140upx;
	width:calc(100% - 40upx);
	background: orange;
	font-size: 40upx;
	color:white;
	padding:20upx;
}
.tuikuan{
	display: flex;
	justify-content: flex-end;
	color:#ccc;
	// width:140upx;
	color:#7a7777;
	text-align: center;
	// float:right;
	position: relative;
// 	right:20upx;
	span{
		border:1px solid #ccc;
		padding:5upx 60upx;
		// border:1px solid #ccc;
		// display: block;
		border-radius: 30upx;
	}
}
.footer{
	margin-top:20upx;
	color:#575454;
	view{
		display: flex;
		justify-content: space-between;
	}
}
.fixedFooter{
	position: fixed;
	bottom:0;
	width:calc(100% - 40upx);
	// height:100upx;
	background-color: white;
	padding:20upx;
	border-top:1px solid #efe9e9;
	
}
</style>
