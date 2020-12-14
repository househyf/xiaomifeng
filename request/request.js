	
	export default function request(options){
		let baseUrl = 'http://yaf.natapp1.cc'
		// if (process.env.NODE_ENV === 'development') {
		//     baseUrl = 'http://development'
		// }
		// // uEnvProd
		// if (process.env.NODE_ENV === 'production') {
		//     // TODO
		// 	baseUrl = 'http://production'
		// }
		let config = {
			header:{
				'contentType':'application/json',
				'X-TOKEN':'',
			},
			method:'GET',
			timeout:30000,
			dataType:'json',
		}
		options.url = baseUrl + options.url,
		options.dataType = options.dataType || config.dataType,
		options.method = options.method || config.method,
		options.header = {...options.header, ...config.header},
		options.data = options.data
		return new Promise((resolve, reject) => {
		      options.success = function (res) {
				  // console.log('2222222',res)
		        resolve(res.data)
		      }
		      options.fail= function (err) {
		        reject(err)
		      }
		      uni.request(options)
		})
}
  