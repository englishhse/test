<template>
  <div class="home">
		<nav-bar class="nav-bar">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control
		:options='["流行","新款","精选"]' 
		class="tab-control newtab-control "
		@tabClick='tabClick'
		ref="tabControl1"
		v-show="isTabFix">
		</tab-control>
		<scroll class="contentScroll" 
			ref="scroll"
			@scroll="contentScroll" 
			:probe-type="3"
			:pull-up-load="true"
			@pullingUp="loadMore">
			<home-swiper :banner='banner'
			@swiperImgLoad="swiperImgLoad"></home-swiper>
			<home-recommend :recommend='recommend'></home-recommend>
			<home-feature></home-feature>
			<tab-control 
			:options='["流行","新款","精选"]' 
			class="tab-control"
			@tabClick='tabClick'
			ref="tabControl2"></tab-control>
			<goods-list :goods='showGoods'></goods-list>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
	</div>
		
</template>

<script>
	//导入子组件
	import NavBar from 'components/content/NavBar.vue'
	import HomeSwiper from './homechild/HomeSwiper.vue'
	import HomeRecommend from './homechild/HomeRecommend.vue'
	import HomeFeature from './homechild/HomeFeature.vue'
	import TabControl from 'components/content/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	//导入网络请求数据
	// import axios from 'axios'
	import {getHomeDate,getHomeGoods} from 'network/home.js'
	//导入防抖函数
	import {debounce} from 'common/utils.js'
	export default {
		name: "Home",
		data(){
			return {
				banner:{
					type:Array,
					default:[]
				},
				recommend:{
					type:Array,
					default:[]
				},
				goods:{
					'pop':{page:0,'list':[]},
					'new':{page:0,'list':[]},
					'sell':{page:0,'list':[]}
				},
				currentType:'pop',
				scrollY:0,
				isShowBackTop:false,
				offSetTop:0,
				isTabFix:false,
				saveY:0
			}
		},
    components:{
			NavBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeature,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			//网络请求方法
			getHomeGoods (type){
				const page = this.goods[type].page+1
				getHomeGoods(type,page).then(
					(res)=>{
						// console.log(res)
						this.goods[type].list.push(...res.data.data.list)
						this.goods[type].page += 1 
						//完成上拉加载更多
						this.$refs.scroll.scroll.finishPullUp()
					}
				)
			},
			//事件监听方法
			tabClick(index){
				switch(index){
					case 0:
					this.currentType='pop'
					break		
					case 1:
					this.currentType='new'
					break		
					case 2:
					this.currentType='sell'
					break
				}
				this.$refs.tabControl1.indexNow=index
				this.$refs.tabControl2.indexNow=index
			},
			backClick(){
				this.$refs.scroll.scroll.scrollTo(0,0,500)
			},
			//决定返回顶部按钮是否隐藏以及tabcontrol的显示与隐藏
			contentScroll(position){
				 -position.y>1000?this.isShowBackTop=true:this.isShowBackTop=false
				 -position.y>this.offSetTop?this.isTabFix=true:this.isTabFix=false 
			},
			loadMore(){
				this.getHomeGoods(this.currentType)
			},
			swiperImgLoad(){
				this.offSetTop = this.$refs.tabControl2.$el.offsetTop
			}
			
		},
		activated() {
			this.$refs.scroll.refresh()
			this.$refs.scroll.scrollTo(0,this.saveY,0)
		},
		deactivated() {
			this.saveY =this.$refs.scroll.scroll.y
		},
		created() {
			getHomeDate({
				url:'/home/multidata'
			}).then(res => {
				// console.log(res)
				this.banner= res.data.data.banner.list
				this.recommend= res.data.data.recommend.list
			})
			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		
		},
		mounted() {
			// this.$refs.scroll.scroll.on('pullingUp',()=>{
			// 	// console.log('上拉加载更多')
			// 	this.getHomeGoods(this.currentType)
			// 	this.$refs.scroll.scroll.finishPullUp()
			// 	setTimeout(()=>{this.$refs.scroll.scroll.refresh()},500)
			// })
			
			//加防抖
			const refresh = debounce(this.$refs.scroll.refresh,300)
			
			//通过事件总线监听每一张图片加载完成并且调用refresh方法
			this.$bus.$on('homeItemImgLoad',()=>{
				refresh()
			})	
		}
	}
</script>

<style scoped>
	.nav-bar {
		background-color: pink;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}

	.contentScroll {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		touch-action: none;
	}
	.newtab-control {
		position: relative;
		top: 44px;
		left: 0;
		z-index: 9;
	}
</style>