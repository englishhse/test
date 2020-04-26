<template>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
	  <van-swipe-item v-for = "item in swiperImage">
			<img :src="item" alt="" @load="imgLoad">
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	
	export default {
		props:{
			swiperImage:{
				type:Array,
				default:[]
			}
		},
		methods:{
			imgLoad(){
				this.$emit('ImgLoad')
			}
		}
	}
</script>

<style scoped>
	.my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
			height: 300px;
	  }
		.my-swipe img {
			height: 300px;
			width: 100%;
		}
</style>
