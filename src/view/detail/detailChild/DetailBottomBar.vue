<template>
	<div class="bottom-bar">
		<div class="bottom-bar-content">
			<div class="kefu">
				<div class="img"></div>
				<div>客服</div>
			</div>
			<div class="shop">
				<div class="img"></div>
				<div>店铺</div>
			</div>
			<div class="collect" @click="collectClick">
				<div class="img-active" v-if="isCollectActive"></div>
				<div class="img" v-else></div>
				<div>收藏</div>
			</div>
			<div class="addcart" @click="addCartClick">
				加入购物车
			</div>
			<div class="buy">
				购买
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isCollectActive : false
			}
		},
		methods:{
			collectClick(){
				this.isCollectActive = !this.isCollectActive
			},
			addCartClick(){
				this.$emit('addClick')
			}
		}
	}
</script>

<style scoped>
	.bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9;
		height: 49px;
		background-color: #F6F5F6;
	}
	.bottom-bar-content {
		display: flex;
		padding-left: 14px;
	}
	.kefu,.shop,.collect {
		flex: 1;
		font-size: 14px;
	}
	
	 .kefu .img {
		width: 30px;
		height: 30px;
		background: url(../../../assets/img/detail/detail_bottom.png)  0 -73px/100%;
	}

	.shop .img {
		width: 30px;
		height: 30px;
		background: url(../../../assets/img/detail/detail_bottom.png)  0 -135px/100%;
	}
	
	.collect .img {
		width: 30px;
		height: 30px;
		background: url(../../../assets/img/detail/detail_bottom.png)  0 0px/100%;
	}
	.collect .img-active {
		width: 30px;
		height: 30px;
		background: url(../../../assets/img/detail/detail_bottom.png)  0 -35px/100%;
	}
	.addcart{
		width: 90px;
		background-color:#C5AC0D ;
		line-height: 49px;
		text-align: center;
	}
	.buy {
		width: 90px;
		background-color:#CE607D ;
		line-height: 49px;
		text-align: center;
		color: #F6F5F6;
	}
</style>
