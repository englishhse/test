<template>
	<div class="home-swiper">
		<van-swipe 
		class="my-swipe" 
		:autoplay="3000" 
		indicator-color="white"
		:stop-propagation="false">
		  <van-swipe-item v-for="item in banner">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="imgLoad">
				</a>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	
	export default {
		props:['banner'],
		methods:{
			imgLoad(){
				this.$emit('swiperImgLoad')
			}
		}
	}
</script>

<style scoped>
	.home-swiper {
	}
	.my-swipe .van-swipe-item {
		width: 100%;
	  color: #fff;
	  font-size: 20px;
	  /* line-height: 150px; */
	  text-align: center;
	}
	img {
		width: 100%;
	}
</style>
