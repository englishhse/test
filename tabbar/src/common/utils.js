export function debounce(fuc,delay){
				let timer = null
				return function (...args){
					if (timer) clearTimeout(timer)
					timer=setTimeout(()=>{
						fuc.apply(this,args)
					},delay)
				}
			}