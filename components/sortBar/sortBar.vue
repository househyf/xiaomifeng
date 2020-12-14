<template>
	<view class="sortBar">
		<view class="barTitle">
			<view @click="openOptions">综合</view>
			<view>销量</view>
		</view>
		<view class="dropWrap">
			<view v-for="(item,index) in options" :key="index" v-show="optionsVisit"
			>
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				optionsVisit:false,
				options:[
					{
					    'name':'价格从高到底',
						value:111
					},
					{'name':'价格从低到高',value:222},
				]
			}
		},
		methods: {
			openOptions(){
				this.optionsVisit = !this.optionsVisit
			}
		}
	}
</script>

<style lang="scss" scoped>
.barTitle{
	position: relative;
	display: flex;
	align-items: center;
	height:80upx;
	view{
		width:100upx;
		text-align: center;
	}
}
.dropWrap{
	position: absolute;
}
</style>
