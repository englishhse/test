<template>
	<div id="base-info" v-if="goods">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<p class="new-price">{{goods.newPrice}}</p>
			<p class="old-price">{{goods.oldPrice}}</p>
			<p class="discount">{{goods.discount}}</p>
		</div>
		<div class="sell-date" v-if="goods.columns">
			<p class="voiume">{{goods.columns[0]}}</p>
			<p class="collect">{{goods.columns[1]}}</p>
			<div class="sevices" v-if="goods.sevices">
				<img :src="goods.sevices[0].icon" alt="">
				{{goods.sevices[0].name}}
			</div>
		</div>
		<div class="more" v-if="goods.sevices">
			<div v-for="item in goods.sevices.slice(1)">
				<img :src="item.icon" alt="">
				{{item.name}}
			</div>
		</div>
	</div>

</template>

<script>
	
	export default {
		props:{
			goods:{
				type:Object,
				default:{}
			}
		}
	}
	
</script>

<style scoped>
	.info-title {
		padding: 10px 8px;
		font-family: Microsoft YaHei;
		font-size: 15px;
		color: #272628;
	}
	.info-price {
		position: relative;
		margin-bottom: 10px;
	}
	.info-price  p {
		display: inline-block;
	}
	.info-price .new-price  {
		margin: 0 0 0 10px;
		color: #FF889C;
		font-size: 22px;
	}
	.old-price {
		padding-left: 10px;
		font-size: 12px;
		text-decoration: line-through;
		color: #A5A4A5;
		text-align: center;
		margin-right: 10px;
	}
	.discount {
		background-color: #FB747F;
		color: #FFFFFF;
		padding: 0 5px;
		border-radius: 20px;
		font-size: 14px;
		position: absolute;
		bottom:8px;
	}
	
	
	.sell-date {
		display: flex;
		padding: 0 8px;
		font-size: 10px;
		color: #B5B3B5;
		padding-bottom: 10px;
		border-bottom: 1px solid #F4F3F4;
	}
	
	.voiume {
		margin: 0 0 0 2px;
		flex: 1;
	}
	
	.collect {
		margin: 0;
		flex:1;
		text-align: center;
	}
	
	.sevices {
		flex:1;
		text-align: right;

	}

	.sevices img {
		width: 12px;
		height: 12px;
	}
	
	.more {
		font-size: 14px;
		color: #737368;
		padding: 15px 0 15px 10px;
		display: flex;
		border-bottom: 3px solid #F4F3F4;
	}
	.more div {
		flex: 1;
	}
	
	.more img {
		width: 12px;
		height: 12px;
	}
	.more div {
		flex: 1;
	}
	
	.more .right {
		text-align: right;
	}
</style>
