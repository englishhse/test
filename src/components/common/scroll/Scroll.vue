<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>

</template>

<script>
	import BScroll from '@better-scroll/core'
	import Pullup from '@better-scroll/pull-up'
	BScroll.use(Pullup)
	
	export default {
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				scroll: {}
			}
		},
		methods:{
			refresh(){
				// this.scroll&&this.scroll.refresh()
				if(this.scroll)this.scroll.refresh()
			},
			scrollTo(x,y,delay){
				if(this.scroll)this.scroll.scrollTo(x,y,delay)
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper,{
				scrollY: true,
				pullUpLoad:this.pullUpLoad,
				probeType:this.probeType,
				click:true
			})
	
			this.scroll.on('scroll',(position)=>{
				this.$emit('scroll',position)
				})
				
			if(this.pullUpLoad) {
				this.scroll.on('pullingUp',()=>{
					this.$emit('pullingUp')
				})
			}
		}
	}
</script>

<style scoped>
</style>
