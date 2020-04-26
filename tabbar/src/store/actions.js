export default {
	addcart(context,payload){
		return new Promise((resolve,reject)=>{
			let oldProduct = context.state.cartList.find(item=>{
				return item.iid === payload.iid
			})
			
			if(oldProduct) {
				// oldProduct.count +=1
				context.commit('addcount',payload)
				resolve('商品数量加1成功！')
			}else {
				payload.count = 1
				// context.state.cartList.push(payload)
				context.commit('addnew',payload)
				resolve('添加新商品成功！')
			}
		})
	}
}