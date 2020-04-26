<template>
	<div class="tabbar-items" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon" ></slot>
		</div>
		<div  v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :class="{active:isActive}">
			<slot name="item-text" ></slot>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:['path'],
		data (){
			return{
			}
		},
		methods:{
			itemClick(){
				if(this.path!=this.$route.path){
						this.$router.replace(this.path)
				}
			}
		},
		computed:{
			isActive(){
				return  this.$route.path.indexOf(this.path)!==-1
			}
		}
		
	}
</script>

<style>
	.tabbar-items {
		height:49px;
		flex: 1;
	}
	.tabbar-items img {
		width: 24px;
		height: 24px;
	}
	.active {
		color: red;
	}
</style>
