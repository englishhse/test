import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


const home = () => import('../view/Home.vue')
const category = () => import('../view/Category.vue')
const profile = () => import('../view/Profile.vue')
const shopcart = () => import('../view/Shopcart.vue')
const Detail = () => import('../view/detail/Detail.vue')

const routes = [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home,
		meta:{
			showTab:true
		}
	},
	{
		path:'/shopcart',
		component:shopcart,
		meta:{
			showTab:true
		}
	},{
		path:'/category',
		component:category,
		meta:{
			showTab:true
		}
	},{
		path:'/profile',
		component:profile,
		meta:{
			showTab:true
		}
	},{
		path:'/detail/:iid',
		component:Detail
	}
	
]

const router = new VueRouter({
	routes,
	mode: "history"
}
	
)

export default router