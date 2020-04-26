<template>
	<div class="home-recommend">
		<div class="home-recommend-item" v-for="item in recommend">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div class="title">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props:['recommend']
	}
</script>

<style scoped>
	img {
		width: 65px;
		height: 65px;
	}
	.home-recommend {
		display: flex;
		text-align: center;
		padding: 15px 0 20px;
		border-bottom: 10px solid #eee;
	}
	.home-recommend-item {
		flex: 1;
	}
	.title {
		color: #000000;
	}
</style>
