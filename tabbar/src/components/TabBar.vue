<template>
	<div id="tab-bar" class="ignore">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	#tab-bar {
		height: 49px;
		display: flex;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F6F5F6;
	}

</style>
