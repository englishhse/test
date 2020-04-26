<template>
  <div id="shop-cart">
		<cart-nav-bar class="cart-nav-bar"></cart-nav-bar>
		<cart-goods-list></cart-goods-list>
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
	
	import CartNavBar from './shopCartChild/CartNavBar.vue'
	import CartGoodsList from './shopCartChild/CartGoodsList.vue'
	import CartBottomBar from './shopCartChild/CartBottomBar.vue'
	

	
	export default {
		name: "Shopcart",
		components:{
			CartNavBar,
			CartGoodsList,
			CartBottomBar
		}
	}
</script>

<style scoped>
	.cart-nav-bar {
		/* margin-bottom: 10px; */
	}
</style>