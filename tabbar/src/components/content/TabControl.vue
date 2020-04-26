<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in options">
			<span 
			@click="itemClick(index)"
			:class="{'item-active':index==indexNow}"
			>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			options:{
				type:Array,
				default (){
					return []
				}
			}
		},
		data(){
			return {
				indexNow:0
			}
		},
		methods:{
			itemClick(index){
				this.indexNow = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		display: flex;
		text-align: center;
		line-height: 44px;
		background-color: #fff;
	}
	.tab-control-item {
		flex: 1;
	}
	.item-active {
		color:#FFC0CB ;
		border-bottom: 2px solid #FFC0CB;
	}
</style>
