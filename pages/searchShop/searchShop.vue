<template>
	<d2-container>
		<view style="display: flex;align-items: center;">
			<search @blur="search" style="flex:1"></search>
			<span style="display: block;width:100upx" @click="naviback">取消</span>
		</view>
	</d2-container>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search(val){
				
			},
			naviback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>

</style>
