<template>
	<view class="seachContainer">
		<view class="searchClass">
			<icon type="search" size="16"/>
			<input class="uni-input" v-model="seachContent" 
			focus
			placeholder="请输入搜索内容" 
			@focus="$emit('focus')"
			@blur="$emit('blur',seachContent)"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachContent:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.seachContainer{
		background-color: #F6F7FB;
		padding:30upx 20upx;
	}
	.searchClass{
		background-color:#f0f0f0;
		display: flex;
		width:calc(100% - 40upx);
		// border:1upx solid #ccc;
		align-items: center;
		height:70upx;
		border-radius:20px;
		icon{
			padding-left:20upx;
			color:#CCCCCC
		}
		/deep/
		.uni-input{
			height:70upx;
			padding:0 25upx;
			// line-height:70upx;
		}
	}
</style>
