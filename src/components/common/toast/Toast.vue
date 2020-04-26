<template>
	<div class="toast">
		<div class="messege" v-show="isShow">
			{{messege}}
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				messege:'',
				isShow:false
			}
		},
		methods:{
			show(msg,delay=2000) {
				this.messege = msg
				this.isShow = true
				setTimeout(()=>{
					this.isShow = false
				},delay)
			}
		}
	}
</script>

<style scoped>
	.messege {
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 999;
		transform: translate(-50%,-50%);
		background-color:rgba(0,0,0, .75);
		color: #fff;
		padding: 10px;
	}
</style>
