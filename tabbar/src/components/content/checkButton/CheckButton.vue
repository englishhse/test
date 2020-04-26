<template>
	<div class="check-button" :class="{active:isChecked}">
		<img src="@/assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
	export default {
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.check-button {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid #aaa;
	}
	.active {
		border-color: red;
		background-color: #FF0000;
	}
</style>
