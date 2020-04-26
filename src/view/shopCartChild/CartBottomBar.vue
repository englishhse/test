<template>
	<div class="cart-bottom-bar">
		<check-button 
		class="bottom-bar-button"
		:class="{active:isAllChecked}"
		@click.native="bottomBarClick"></check-button>
		<span>全选</span>
		<div class="total"> 合计:￥{{totalMoney}}</div>
		<div class="go-buy">去结算({{totalChecked}})</div>
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkButton/CheckButton.vue'
	export default {
		components:{
			CheckButton
		},
		data(){
			return {
				isAllChecked:true,
				// checkedCount:0
			}
		},
		methods:{
			bottomBarClick(){
			this.isAllChecked = !this.isAllChecked
			this.$store.commit('change',this.isAllChecked)
			}
		},
		computed:{
			totalMoney(){
				let money = 0
				for(let item of this.$store.state.cartList){
					if(item.checked){
						money += item.price* item.count
					}
				}
				return  Math.floor(money*100)/100
			},
			totalChecked(){
				let count = 0
				for(let item of this.$store.state.cartList){
					if(item.checked){
						count++
					}
				}
				return count
			}
		},
		mounted() {
			this.$bus.$on('isAllCkeck',()=>{
				let count = 0
				for(let item of this.$store.state.cartList){
					if(item.checked){
						count++
					}
				}
				this.checkedCount = count
				count === this.$store.state.cartList.length?this.isAllChecked=true:this.isAllChecked=false
			})
		}
	}
</script>

<style scoped>
	.cart-bottom-bar {
		font-size: 14px;
		position: fixed;
		display: flex;
		align-items: center;
		height: 40px;
		background-color: #ffd;
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
		padding:  0 0 0 15px;
	}
	.check-button {
		margin-right: 5px;
		width: 18px;
		height: 18px;
	}
	.total {
		margin-left: 8px;
	}
	.go-buy {
		width: 80px;
		background-color: orange;
		height: 100%;
		line-height:40px;
		text-align: center;
		position: absolute;
		right: 0;
	}
	.active {
		background-color: #FF0000;
	}
</style>
