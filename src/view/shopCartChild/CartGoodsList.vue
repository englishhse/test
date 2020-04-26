<template>
	<div class="cart-goods-list">
		<scroll class="cart-scroll" ref="cartScroll">
			<list-item 
			v-for="(item,index) in cartList" 
			:product="item"
			:key="index"></list-item>
		</scroll>	
	</div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import ListItem from './ListItem.vue'
	export default {
		components:{
			Scroll,
			ListItem
		},
		computed:{
			cartList(){
				return this.$store.state.cartList
			}
		},
		activated() {
			this.$refs.cartScroll.refresh()
		}
	}
</script>

<style scoped>
	.cart-goods-list {
		height: calc(100vh - 44px - 49px - 40px);
	}
	
	.cart-scroll {
		height: 100%;
		overflow: hidden;
	}

</style>
