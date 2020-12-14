<template>
	<view class="container">
		<search></search>
		<view class="tab">
			<view v-for="(item,index) in tabList" :key = "index" @click="getTab(item,index)">
				<span :class="currentIndex===index?'activeTabColor':'mormalTabColor'">
					{{item.label}}
				</span>
			</view>
		</view>
		<product-box :list="productList" rightText="等待买家付款" rightColor="orange">
			<template slot="footer">
				<footer-tab :list="daifukuan"></footer-tab>
			</template>
		</product-box>
	</view>
</template>

<script>
	import productBox from '@/pages/squareAccount/productBox/productBox.vue'
	import footerTab from './footer/footer.vue'
	export default {
		components:{
			productBox,footerTab
		},
		data() {
			return {
				footerList:[],
				daifukuan:[{
					label:'取消订单'
				},{
					label:'待付款'}
				],
				daifahuo:[{
					label:'提醒发货'
				}
				],
				daifahuo:[{
					label:'确认收货'
				}
				],
				daipingjia:[{
					label:'评价'
				}
				],
				tabList:[{
					label:'全部'
				},{
					label:'待付款'
				},
				{
					label:'待发货'
				},
				{
					label:'待收获'
				},
				{
					label:'待评价'
				}],
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
				currentIndex:0
			}
		},
		methods: {
			getTab(item,index){
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #F6F7FB;
	position: absolute;
	.tab{
		display: flex;
		view{
			width:20%;
			text-align: center;
		}
		margin-bottom: 30upx;
	}
}
.activeTabColor{
	border-bottom:3px solid orange;
	color:orange
}
.normalTabColor{
	border-bottom:3px solid rgba($color: #000000, $alpha: 0.0);
	color:black
}
.restaurantHappen{
	margin-top:10upx;
}
.restaurantHappen .titleBox .andMore{
	color:orange
}
</style>
