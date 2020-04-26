<template>
	<div class="detail-goods-info">
		<div class="desc" v-if="detailInfo.desc">
			<div class="top">
				<span class="block"></span>
				<span class="line"></span>
			</div>
			<div class="service">
				{{detailInfo.desc}}
			</div>
			<div class="bottom">
				<span class="line"></span>
				<span class="block"></span>
			</div>
		</div>
		<div class="key" v-if="detailInfo.detailImage">
			{{detailInfo.detailImage[0].key}}
		</div>
		<div class="img" v-if="detailInfo.detailImage">
			<img :src="item" alt="" 
			v-for="item in detailInfo.detailImage[0].list" 
			@load="imgLoad">
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			detailInfo:{
				type:Object,
				default:{}
			}
		},
		methods:{
			imgLoad(){
				this.$emit('imgLoad')
			}
		}
	}
	
</script>

<style scoped>
	
	
	.desc {
		position: relative;
		height: 150px;
		
	}
	.service {
		font-size: 14px;
		padding: 10px 9px;
		color: #7E7D7E;
		margin-bottom: -5px;
	}
	
	.top {
		margin-left: 2%;
	}
	.bottom {
		margin-left: 70%;
	}
	.block {
		display: inline-block;
		width: 4px;
		height: 4px;
		background-color: #000;
	}
	.line {
		display: inline-block;
		width: 85px;
		height: 1px;
		background-color: #000000;
	}
	.key {
		margin-left: 8px;
		margin-bottom: 15px;
	}
	
	.img img {
		width: 100%;
		border-bottom: 3px solid #F4F3F4;
	}
</style>
