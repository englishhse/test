<template>
	<div class="commom">
		<div class="title">
			<span>用户评价</span>
			<span>更多</span>
		</div>
		<div class="user-info" v-if="common.list">
			<img :src="common.list[0].user.avatar" alt="">
			<span >{{common.list[0].user.uname}}</span>
		</div>
		<div class="common-content"  v-if="common.list">
			{{common.list[0].content}}
		</div>
		<div class="date">
			{{commonDate}}
			<span v-if="common.list">{{common.list[0].style}}</span>
		</div>
		<div class="img" v-if="common.list">
			<img :src="item" alt="" v-for="item in common.list[0].images">
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			common:{
				type:Object,
				default:{}
			},
			commonDate:{
				type:String,
				default:""
			}
		}
	}
</script>

<style scoped>
	.title {
		margin-bottom: 40px;
	}
	
	.title span:nth-child(1) {
		 margin-left: 25px;
	}
	
 .title span:nth-child(2) {
	 margin-left: 60%;
 }
 
 .user-info img {
	 width: 50px;
	 height: 50px;
	 margin-left: 15px;
	 border-radius: 50%;
	 border: 1px solid #969799;
 }
 .user-info img:nth-child(1) {
	vertical-align: middle;
	margin-right: 15px;
 }
  .user-info span:nth-child(2) {		font-size: 14px;
  }
	
	.common-content {
		margin: 20px 0 10px 20px;
		font-size: 12px;
		color: #7D7C7D;
	}
	.date {
		font-size: 12px;
		color: #7D7C7D;
		margin-left:20px ;
	}
	.date span {
		margin-left: 10px;
	}
	.img {
		margin-left: 15px;
		margin-top: 10px;
	}
	.img img {
		width: 100px;
		height: 100px;
	}
</style>
