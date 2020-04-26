<template>
	<div class="goods-item"  @click="itemClick">
		<img :src="showImages" alt="" @load="imgLoad">
		<div class="good-info">
			<p>{{goodsitem.title}}</p>
			<span class="price">{{goodsitem.price}}</span>
			<span class="collect">{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			showImages(){
				return this.goodsitem.image || this.goodsitem.show.img
			},
			myIid(){
				return this.goodsitem.iid || this.goodsitem.item_id
			}
		},
		methods:{
			imgLoad(){
				if(this.$route.path.indexOf('/home')!==-1){
					this.$bus.$emit('homeItemImgLoad')
				} else if(this.$route.path.indexOf('/detail')!==-1){
					this.$bus.$emit('DetialimgLoad')
				}
			},
			itemClick(){
				this.$router.push('/detail/'+this.myIid)
			}
		}
	}
</script>

<style scoped>
	.goods-item {
		width: 47%;
		position: relative;
		padding-bottom: 40px;
		padding-left: 4px;
		padding-right: 4px;
	}
	.goods-item img {
		width: 100%;
		border-radius: 5px;
	}
	.good-info {
		color: #969799;
		font-size: 12px;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5px;
		text-align: center;
		overflow: hidden;
	}
	.good-info p {
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
		overflow: hidden;
	}
	.good-info .price{
		margin-right: 20px;
	}
	.good-info .collect {
		position: relative;
	}
	.good-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
	}
</style>
