<template>
	<view>
		<d2-box v-for="(item,index) in list" :key = "index" :title="item.shopname" :rightText="rightText" :rightColor="rightColor">
			<view v-for="(item1,index1) in item.children" :key = "index1">
				<view class="productItem">
					<view class="productItemMsg">
						<view class="img" :style="{'background-image':'url('+item1.img+')'}">
						</view>
						<view class="labelBox">
							<view class="productName">{{item1.name}}hskhsdhfsdh出口市场看到VCD好vdh出口市场看到VCD好v好开森的好开森的v从v可视电话v吃可是v海口市v</view>
							<span class="label">{{item1.label}}</span>
						</view>
					</view>
					<view class="productItemPrice">
						<span>
							¥{{item1.price}}
						</span>
						<span>
							x{{item.number}}
						</span>
					</view>
				</view>
				<slot name="button">
					
				</slot>
			</view>
			<slot name="footer">
				
			</slot>
		</d2-box>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>{
					return []
				}
			},
			rightText:{
				type:String,
				default:'更多'
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
			
		}
	}
</script>

<style lang="scss" scoped>
.productItem{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top:20upx;
	font-size:32upx;
	.productItemPrice{
		display: flex;
		flex-direction: column;
	}
	.productItemMsg{
		display: flex;
		.img{
			width:200upx;
			height:200upx;
			background-size: cover;
		}
		.labelBox{
			max-width: 60%;
			// flex-direction: column;
			// display: flex;
			padding:0 15upx;
			.productName{
				width:180px;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
				-webkit-box-orient: vertical; /* 垂直排列 */
				word-break: break-all;  /* 内容自动换行 */
			}
			.label{
				font-size:30upx;
				background-color: #f9f9f9;
				color:#C0C0C0;
				padding:0 4upx;
				
			}
		}
	}
}

</style>
