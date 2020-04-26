<template>
	<div class="shop-info">
		<div class="shop-logo">
			<img :src="shop.logo" alt="">
			<span>{{shop.name}}</span>
		</div>
		<div class="score">
			<div class="mount">
				<p>{{shop.sells}}</p>
				<p>总销量</p>
			</div>
			<div class="all-goods">
				<p>{{shop.goodsCount}}</p>
				<p>全部宝贝</p>
			</div>
			<div class="grade" v-if="shop.score">
				<div>
					<span>{{shop.score[0].name}}</span>
					<span class="geeen" :class="{red:shop.score[0].isBetter}">{{shop.score[0].score}}</span>
					<span class="hight" v-if="shop.score[0].isBetter">高</span>
					<span class="low" v-else>低</span>
				</div>
				<div>
					<span>{{shop.score[1].name}}</span>
					<span class="geeen" :class="{red:shop.score[1].isBetter}">{{shop.score[1].score}}</span>
					<span class="hight" v-if="shop.score[1].isBetter">高</span>
					<span class="low" v-else>低</span>
				</div>
				<div>
					<span>{{shop.score[2].name}}</span>
					<span class="geeen" :class="{red:shop.score[2].isBetter}">{{shop.score[2].score}}</span>
					<span class="hight" v-if="shop.score[2].isBetter">高</span>
					<span class="low" v-else>低</span>
				</div>
			</div>
		</div>
		<div class="button">进店逛逛</div>
	</div>
</template>

<script>
	export default {
		props:{
			shop:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped>
	.shop-info {
		border-bottom: 3px solid #F4F3F4;
	}
	
	.shop-logo {
		position: relative;
		color: #333836;
	}
	
	.shop-logo img {
		width:55px;
		height:55px;
		border-radius: 50%;
		border: 1px solid #272628;
		margin: 20px 0 0 10px;
	}
	.shop-logo span {
		position: absolute;
		top:35px;
		margin-left: 15px;
		color: #7B8189;
		font-size: 18px;
	}
	
	.score {
		margin-top: 10px;
		padding-right: 10px;
		display: flex;

	}
	.mount {
		margin-left: 20px;
	}
	.all-goods {
		margin: 0 12px 0 35px;
		border-right: 1px solid #EEEDEF;		
		padding-right: 15px;
		text-align: center;
	}
	.grade span {
		font-size: 12px;
		display: inline-block;
		margin-bottom:8px;
		margin-right: 8px;
	}
	.geeen {
		color: #7A9845;
		display: inline-block;
		width: 25px;
	}
	.red {
		color: red;
		display: inline-block;
		width: 25px;
	}
	
	.hight {
		color: #FFFFFF;
		background-color: #FF0000;
		padding: 0 2px;
	}
	.low {
		color: #FFFFFF;
		background-color:#7A9845;
		padding: 0 2px;
	}
	
	.button {
		text-align:  center;
		background-color: #F4F4FC;
		border-radius: 10px;
		width: 180px;
		height: 30px;
		line-height: 30px;
		position: relative;
		left: 50%;
		margin-left: -90px;
		margin-top: 20px;
		margin-bottom: 25px;
		}
		
</style>
