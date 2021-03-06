 import {request} from './request.js'
 
 export function getDetail(iid){
	 return request({
		 url:'/detail',
		 params:{
			 iid
		 }
	 })
 }
 
 export  function getRecommend() {
		return request({
			url:'/recommend'
		})
 }
 
 export class GoodsInfo {
	 constructor(itemInfo,columns,sevices) {
	     this.title = itemInfo.title
			 this.desc =  itemInfo.desc
			 this.newPrice = itemInfo.price
			 this.oldPrice = itemInfo.oldPrice
			 this.realPrice = itemInfo.lowNowPrice
			 this.discount = itemInfo.discountDesc
			 this.columns = columns
			 if(sevices){
				 this.sevices = sevices
			 }
	 }
 }
 
 export class Shop {
	 constructor(shopInfo) {
	     this.logo = shopInfo.shopLogo
	     this.name = shopInfo.name
	     this.fans = shopInfo.cFans
			 this.sells = shopInfo.cSells
			 this.score = shopInfo.score
			 this.goodsCount = shopInfo.cGoods
	 }
 }
 
 export class Params {
	 constructor(info,rule) {
	     this.image = info.images? info.images[0] :'',
			 this.info = info.set
			 this.size = rule.tables
	 }
 }