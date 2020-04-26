<template>
	<nav-bar>
		<div class="left" slot="left" @click="back">
			<img src="@/assets/img/common/back.svg" alt="">
		</div>
		<div slot="center" class="center">
			<div v-for="(item,index) in titles" 
			class="item"
			@click="DetailitemClick(index)"
			:class="{active:index==currentIndex}">{{item}}</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/content/NavBar.vue'
	
	export default {
		components:{
			NavBar
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			DetailitemClick(index){
				this.currentIndex = index
				this.$emit('navBarItemClick',index)
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.center {
		display: flex;
		font-size: 13px;
	}
	.item {
		flex: 1;
	}
	.active {
		color: #FFC0CB;
	}
	.left img {
		margin-top: 13px;
		width: 20px;
		height: 20px;
	}
</style>
