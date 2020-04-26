<template>
	<div class="goods-params" >
		<div class="table"  v-if="itemParams.size">
			<table>
				<tr v-if="itemParams.size" v-for="item in itemParams.size[0]" >
					<td v-for="it in item"  v-if="itemParams.size">{{it}}</td>
				</tr>
			</table>
		</div>
		<div class="data" >
			<table>
				<tr v-for="item in itemParams.info">
					<td class="key">{{item.key}}</td>
					<td class="value">{{item.value}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			itemParams:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped>
	.table {
		margin-left:20px ;
		font-size: 10px;
	}
	.table tr {
		height: 30px;
		line-height: 30px;
		display: block;
		border-bottom: 1px solid #F4F3F4;
	}
	.table td {
		display: inline-block;
		width: 50px;
		text-align: center;
	}
	.data {
		margin-top: 20px;
		margin-left: 35px;
		color: #696869;
		font-size: 14px;
	}
	.data table tr{
		display: block;
		border-bottom: 1px solid #F4F3F4;
		margin-bottom: 10px;
	}
	
	.key {
		white-space: nowrap;
	}
	.value {
		padding-left: 25px;
		color: #C16F7E;
	}
</style>
