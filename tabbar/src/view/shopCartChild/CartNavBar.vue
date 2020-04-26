<template>
	<div class="cart-navbar">
		<nav-bar>
			<div class="title" slot="center">
				<span>购物车</span>
				<span>({{selectedMount}})</span>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/content/NavBar.vue'
	
	export default {
		components:{
			NavBar
		},
		data(){
			return {

			}
		},
		computed:{
			selectedMount(){
				return this.$store.state.cartList.length
			}
		}
	}
</script>

<style scoped>
	.cart-navbar{
		background-color: #FFC0CB;
		color: #F6F5F6;
	}
	.title span {
		margin-right: 10px;
		font-weight: 700;
	}
</style>
