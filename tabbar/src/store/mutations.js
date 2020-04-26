export default {
	addcount(state,payload){
		let oldProduct = state.cartList.find(item=>{
			return item.iid === payload.iid
		})
		oldProduct.count += 1
	},
	addnew(state,payload) {
		payload.count = 1
		payload.checked = true
		state.cartList.push(payload)
	},
	changChecked(state,payload){
		let temp = state.cartList.find(item=>{
			return item.iid == payload
		})
		temp.checked = !temp.checked
	},

	change(state,payload){
		for(let i of state.cartList){
				i.checked = payload
		}
	}
}