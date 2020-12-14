<template>
	<d2-container>
		<view class="carTitle">
			<span>购物车</span>
			<span>共111件宝贝</span>
		</view>
		<view class="carBox">
			<!-- 商铺 -->
			<view class="oneShop">
				<!-- 商铺名字 -->
				<view  v-for="(shop,index) in carList" :key="shop.value" class="shopBox">
					<view class="shopTitleBox">
						<checkbox :value="shop.id" 
						class="checkBoxCss" 
						color="orange" style="transform:scale(1.2)" :checked="shop.checked" @click="setShop(shop,index)"/>
						<span class="shopTitle">
							{{shop.name}}
						</span>
					</view>
					<view  v-for="(product,index1) in shop.productList" :key="product.value" class="productBox">
						<checkbox 
						class="checkBoxCss"
						:value="product.value" :checked="product.checked" style="transform:scale(1.2)"
						@click=setProduct(shop,product,index,index1)
						/>
						<view class="imgBox">
							<img :src="product.image" alt="">
						</view>
						<view class="productMsg">
							<view class="productMsg">
								<!-- <view>
									{{shopIds.includes(shop.value)}}
								</view> -->
								<view>{{product.name}}</view>
								<view>{{product.detail}}</view>
								<view>¥{{product.price}}</view>
							</view>
						</view>
						<view class="count">
							<span @click="countjian(shop,index,product,index1)">-</span>
							<input type="text" v-model="product.number" @blur="inputblur(shop,index,product,index1)"/>
							<span @click="countjia(shop,index,product,index1)">+</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="setAccount">
			<view>
				<checkbox 
				:checked="checkAll" style="transform:scale(1.2)" @click="selectAll"/>
				<span class="shopTitle" >
					全选
				</span>
			</view>
			<view class="account">
				<view>合计：{{allMoney}}</view>
				<view>结算（{{productAccount}}）</view>
			</view>
		</view>
	</d2-container>
</template>
<script>
	export default {
		computed:{
		},
		data() {
			return {
				checkAll:false,
				productAccount:0,
				checkShopAll:false,
				carList:[{
					value:'2222',
					name:'买买买',
					productList:[{
                        value:'1',
                        name:'白色衬衫',
                        detail:'长袖/v领。37L',
                        price:35,
						 number:2,
                        // checked: 'true',
						image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603970675641&di=f337e3e6f846e8f20abcaccd371c8501&imgtype=0&src=http%3A%2F%2Fs16.mogucdn.com%2Fb1%2Fbao%2F111024%2F19l9c_kqytkuskkrbg2ytwgfjeg5sckzsew_899x900.jpg"
                    },
                    {
                       value:'2',
                       name:'笔记本',
                       detail:'猫咪',
                       price:35,
					    number:2,
                       // checked: 'true',
					   image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603970675641&di=f337e3e6f846e8f20abcaccd371c8501&imgtype=0&src=http%3A%2F%2Fs16.mogucdn.com%2Fb1%2Fbao%2F111024%2F19l9c_kqytkuskkrbg2ytwgfjeg5sckzsew_899x900.jpg"
                    },
                    {
                      value:'3',
                      name:'笔记本',
                      detail:'猫咪',
					  number:2,
                      price:35,
                      // checked: 'true',
					  image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603970675641&di=f337e3e6f846e8f20abcaccd371c8501&imgtype=0&src=http%3A%2F%2Fs16.mogucdn.com%2Fb1%2Fbao%2F111024%2F19l9c_kqytkuskkrbg2ytwgfjeg5sckzsew_899x900.jpg"
                    }]
				},
				{
					value:'22223',
					name:'一家商店',
					productList:[{
						value:'4',
						name:'笔记本',
						detail:'猫咪',
						 number:4,
						price:35,
						// checked: 'true'
					},
					{
						value:'5',
						name:'笔记本2',
						detail:'长袖/平纹',
						price:35,
						 number:4,
					},
					{
						value:'6',
						name:'白色衬衫3',
						detail:'长袖/平纹',
						price:35,
						 number:4,
					}]
				}],
				navIndex:2,
				shopIds:'',
				productIds:[],
				currentProductList:[],
				allMoney:0,
			}
		},
		methods: {
			setProduct(shop,product,index,index1){
				product.checked = !product.checked
				// console.log(shop,'shop',product,'product')
				let checkAll = true
				shop.productList.forEach(res=>{
					if(!res.checked){
						checkAll =  false
					}
				})
				this.$set(this.carList[index],'checked',checkAll)
				this.setProductAccount()
			},
			setShop(shop,index){
				shop.checked  = !shop.checked
				let items = this.carList[index].productList
				if(shop.checked){
					items.forEach(res=>{
						this.$set(res,'checked',true)
					})
				}else{
					items.forEach(res=>{
						this.$set(res,'checked',false)
					})
				}
				
				this.setProductAccount()
				
			},
			controlShopCk(val,index){
				if(val.checked){
					items.forEach(res=>{
						res.checked = true
						this.$set(res,"checked",true)
					})
				}else{
					items.forEach(res=>{
						this.$set(res,"checked",true)
					})
				}
			},
			setProductAccount(){
				this.isSelectAll()
				let number = 0
				let money = 0
				this.carList.forEach(res=>{
					res.productList.forEach(product=>{
						if(product.checked){
							  number += parseInt(product.number)
							  money += product.price*parseInt(product.number)
						}
					})
				})
				this.productAccount =  number
				this.allMoney = money
			},
			selectAll(){
				this.checkAll = !this.checkAll
				console.log(this.checkAll)
				if(this.checkAll){
					this.carList.forEach(res=>{
						this.$set(res,'checked',true)
						res.productList.forEach(res1=>{
							this.$set(res1,'checked',true)
						})
					})
				}else{
					this.carList.forEach(res=>{
						this.$set(res,'checked',false)
						res.productList.forEach(res1=>{
							this.$set(res1,'checked',false)
						})
					})
				}
				this.setProductAccount()
			},
			isSelectAll(){
				let select = true
				this.carList.forEach(res=>{
					if(!res.checked){
						select = false
					}
				})
				console.log(select,'checked')
				this.checkAll = select
			},
			countjian(shop,index,product,index1){
				if(product.number===0){
					return 
				}else{
					let number = product.number-1
					this.$set(this.carList[index].productList[index1],'number',number)
				}
				this.setProductAccount()
			},
			countjia(shop,index,product,index1){
				if(product.number===0){
					return 
				}else{
					let number = product.number+1
					this.$set(this.carList[index].productList[index1],'number',number)
				}
				this.setProductAccount()
			},
			inputblur(shop,index,product,index1){
				console.log(product.number)
				if(product.checked){
					this.setProductAccount()
				}
			}
		},
		
		
	}
</script>
<style lang="scss" scoped>
	checkbox{
		margin-right:10upx;
	}
	.setAccount{
		z-index: 2000;
		position: fixed;
		bottom:0upx;
		border-top:1px solid rgba($color: #000000, $alpha: 0.1);
		background-color: white;
		height:100upx;
		align-items: center;
		justify-content: space-between;
		display: flex;
		width:100%;
		color:#807e7e;
		font-size: 28upx;
		.account{
			padding:0 10upx;
			display: flex;
			line-height: 80upx;
			view:last-child{
				margin-left:20upx;
				width:150upx;
				color:white;
				background: orange;
				height:80upx;
				line-height: 80upx;
				text-align: center;
				border-radius: 40upx;
			}
		}
	}
	.carBox{
		// margin:100upx 0;
		// z-index: 2000;
	}
	.oneShop{
		margin:30upx;
		.shopBox{
			padding:20upx;
			display: flex;
			background-color: white;
			border-radius: 20upx;
			margin-top:20upx;
		}
		.shopTitleBox{
			display: flex;
		}
		view{
			
		}
		.shopTitle{
			// font-size: upx;
			font-weight: bold;
			// padding-top:20upx;
		}
	}
	.productBox{
		display: flex;
		margin:30upx 0;
		position: relative;
		.imgBox{
			width:200upx;
			border-radius: 10upx;
			height:200upx;
			overflow: hidden;
			img{
				width:200upx;
				height:200upx;
			}
		}
		.productMsg{
			display: flex;
			flex-direction: column;
			view{
				margin: 10upx 20upx;
				margin-top:0;
			}
			view:nth-child(2){
				background-color: #f7f7f7;
				color:#807e7e;
				font-size: 28upx;
				text-align: center;
				padding: 8upx;
			}
			view:nth-child(3){
				color:orange;
				// font-size: upx;
				font-weight: 500;
			}
		}
	}
	.carTitle{
		width:100%;
		display: flex;
		// height:160upx;
		// background-color: red;
		flex-direction: column;
		// margin:20upx;
		padding:20upx;
		// position: absolute;
		// top:0;
		// left:0;
		span:nth-child(1){
			font-size:40upx;
			font-weight: 450;
		}
		span:nth-child(2){
			font-size:28upx;
			// font-weight: 450;
			color:#C0C0C0;
		}
	}
	.shopBox{
		display: flex;
		flex-direction: column;
	}
	.productBoxItem{
		display: flex;
	}
	.productMsg{
		flex:1
	}
	.count{
		position: absolute;
		bottom:10upx;
		right:20upx;
		
		// width:200upx;
		display: flex;
		font-size: 32upx;
		span{
			border:1px solid #ccc;
			width:50upx;
			height:45upx;
			line-height: 45upx;
			text-align: center;
		}
		input{
			border:1px solid #ccc;
			border-left:0px solid #ccc;
			border-right:0px solid #ccc;
			width:80upx;
			// height:28upx;
			// padding:10upx 0;
			display: block;
			text-align: center;
		}
	}
</style>
<style>
.uni-list-cell {
    justify-content: flex-start
}
.uni-label-pointer{
	display: flex;
}
</style>
