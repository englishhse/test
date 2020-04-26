<template>
	<div class="detail">
		<detail-nav-bar class="nav-bar" 
		@navBarItemClick="navBarClick"
		 ref="navBar"></detail-nav-bar>
		<scroll class="content-scroll"
		 ref="detailScroll"
		 :probe-type="3"
		 @scroll="detailScroll">
			<detail-swiper :swiperImage="topImage" @ImgLoad="ImgLoad"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imgLoad="ImgLoad"></detail-goods-info>
			<detail-goods-params :itemParams="itemParams" ref="params"></detail-goods-params>
			<detail-common :common="common" :commonDate="commonDate" ref="common"></detail-common>
			<goods-list :goods="recommend" 
			 ref="recommend"
			 id="detail-recommend"></goods-list>
		</scroll>
		<detail-bottom-bar @addClick="addCart"></detail-bottom-bar>
			<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
	</div>
</template>

<script>
	// 导入网络请求
	import {
		getDetail,
		GoodsInfo,
		Shop,
		Params,
		getRecommend
	} from 'network/detail.js'
	//导入子组件
	import DetailNavBar from './detailChild/DetailNavBar.vue'
	import DetailSwiper from './detailChild/DetailSwiper.vue'
	import DetailBaseInfo from './detailChild/DetailBaseInfo.vue'
	import DetailShopInfo from './detailChild/DetailShopInfo.vue'
	import DetailGoodsInfo from './detailChild/DetailGoodsInfo.vue'
	import DetailGoodsParams from './detailChild/DetailGoodsParams.vue'
	import DetailCommon from './detailChild/DetailCommon.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import DetailBottomBar from './detailChild/DetailBottomBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	import {debounce} from 'common/utils.js'

	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailGoodsParams,
			DetailCommon,
			GoodsList,
			DetailBottomBar,
			Scroll,
			BackTop
		},
		data() {
			return {
				iid: null,
				topImage: [],
				goods: {},
				shop: {},
				detailInfo: {},
				itemParams: {},
				common: {},
				commonDate: null,
				recommend:[],
				topYs:[0],
				getTopYs:null,
				isShowBackTop:false,
			}
		},
		methods: {
			ImgLoad() {
				this.$refs.detailScroll.refresh()
				this.getTopYs()
			},
			navBarClick(index){
				this.$refs.detailScroll.scroll.scrollTo(0,-this.topYs[index],200)
			},
			backClick(){
				this.$refs.detailScroll.scroll.scrollTo(0,0,500)
			},
			addCart(){
				const product = {}
				product.image = this.topImage[0]
				product.title = this.goods.title
				product.desc = this.goods.desc
				product.price = this.goods.realPrice
				product.iid = this.iid
				// console.log(product)
				this.$store.dispatch('addcart',product).then(
				res=>{
					this.$toast.show(res,2000)
				})
			},
			detailScroll(position){
				// console.log(position)
				if(-position.y<this.topYs[1]){
					this.$refs.navBar.currentIndex = 0
				}else if(-position.y>this.topYs[1]&&-position.y<this.topYs[2]){
					this.$refs.navBar.currentIndex = 1
				}else if(-position.y>this.topYs[2]&&-position.y<this.topYs[3]){
					this.$refs.navBar.currentIndex = 2
				}else if(-position.y>this.topYs[3]){
					this.$refs.navBar.currentIndex = 3
				}
				
				//监听滚动判断回到顶部按钮是否显示
				-position.y>1000?this.isShowBackTop=true:this.isShowBackTop=false
			}
		},
		created() {
			this.iid = this.$route.params.iid

			//根据iid请求数据并把数据保存
			getDetail(this.iid).then(
				res => {
					this.topImage = res.data.result.itemInfo.topImages
					//获取商品信息
					const data = res.data.result
					//创建包含所有商品信息对象
					this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
					//创建包含所有店铺信息对象
					this.shop = new Shop(data.shopInfo)
					//商品详情图
					this.detailInfo = data.detailInfo
					//商品参数
					this.itemParams = new Params(data.itemParams.info, data.itemParams.rule)
					// console.log(res)
					//商品评论
					this.common = data.rate
					//为获取navbar对应组件offsettop加防抖
					this.getTopYs = debounce(()=>{
						this.topYs = [0]
						this.topYs.push(this.$refs.params.$el.offsetTop)
						this.topYs.push(this.$refs.common.$el.offsetTop)
						this.topYs.push(this.$refs.recommend.$el.offsetTop)
					},200)
					//顶部nabbar联动 (错误：dom渲染完成但是图片没有加载)
					// this.$nextTick(()=>{
					// 	this.topYs = [0]
					// 	this.topYs.push(this.$refs.params.$el.offsetTop)
					// 	this.topYs.push(this.$refs.common.$el.offsetTop)
					// 	this.topYs.push(this.$refs.recommend.$el.offsetTop)
					// 	console.log(this.topYs)
					// })
					
					//商品评论创建日期
					if(data.rate.list){
						const date = new Date(data.rate.list[0].created * 1000)
						Date.prototype.toLocaleString = function() {
							function addZero(num) {
								if (num < 10) {
									return "0" + num;
								}
								return num;
							}
							// 按自定义拼接格式返回
							return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate())
						}
						this.commonDate = date.toLocaleString()
					}
				
					//请求推荐数据
					getRecommend().then(
						res =>{
							this.recommend = res.data.data.list
						}
					)
				}
			)
		},
		mounted() {
			//加防抖
			const refresh = debounce(this.$refs.detailScroll.refresh, 300)
			//事件总线监听刷新图片加载完成调用刷新
			this.$bus.$on('DetialimgLoad', () => {
				refresh()
			})
		},
	}
</script>

<style scoped>
	.nav-bar {
		overflow: hidden;
		background-color: #FFFFFF;
		border-bottom: 2px solid #969799;
		position: relative;
		z-index: 9;
	}

	.content-scroll {
		position: absolute;
		top: 49px;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	#detail-recommend {
		margin-top: 50px;
	}
</style>
