<template>
	<view class="footer">
		<view v-for="(item,index) in list" :key="index">
			{{item.label}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:() => {
					return []
				}
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
.footer{
	display: flex;
	justify-content: flex-end;
	view{
		width:200upx;
		border:1px solid #ccc;
		border-radius: 40upx;
		text-align: center;
		padding:10upx 0;
		margin-left:10upx;
		color:#626060;
	};
}
</style>
