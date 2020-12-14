<template>
	<view class="viewContainer">
		<view class="container">
			<slot></slot>
		</view>
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

<style lang="scss" scoped>
.viewContainer{
		position: absolute;
		width:100%;
		height:100%;
		overflow-y: scroll;
		background-color: #F6F7FB;
	}
	.container{
		background-color: #F6F7FB;
		position: absolute;
		width:100%;
		// min-height:100%;
		padding-bottom: 100upx;}
		
		
</style>
