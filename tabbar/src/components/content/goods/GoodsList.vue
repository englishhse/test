<template>
	<div class="goods-list">
		<goods-list-item 
		v-for="item in goods" 
		:goodsitem ='item' 
		class="item"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	
	export default {
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		}
	}
</script>

<style scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly
	}
</style>
