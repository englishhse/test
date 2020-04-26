<template>
	<div class="cart-item">
		<check-button
		:isChecked="product.checked" 
		@click.native="click"
		class="list-button"></check-button>
		<div class="img">
			<img :src="product.image" alt="">
		</div>
		<div class="content">
			<p class="title">{{product.title}}</p>
			<p class="desc">{{product.desc}}</p>
			<p class="price">
			<span class="top">￥{{product.price}}</span>
			<span class="count">x{{product.count}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkButton/CheckButton.vue'
	
	export default {
		components:{
			CheckButton
		},
		props:{
			product:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			click(){
				this.$store.commit('changChecked',this.product.iid)
				this.$bus.$emit('isAllCkeck')
			}
		}
	}
</script>

<style scoped>
	.cart-item {
		display: flex;
		align-items:center;
		padding:20px 0 10px 10px;
		border-bottom:1px solid #969799 ;
	}
	.img {
		margin: ;
	}
	img {
		width: 60px;
		border-radius: 5px;
	}
	.content {
		margin-left: 15px;
	}
	.cart-item .title {
		width: calc(100vw - 100px);
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 18px;
	}
	.cart-item .desc {
		width: calc(100vw - 100px);
		margin: 10px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #969799;
	}
	.cart-item .price .top {
		margin: 0;
		color: orange;
	}
	.count {
		margin-left: calc(100% - 40%);
	}
</style>
