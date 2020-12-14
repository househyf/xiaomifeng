import Vue from 'vue'
import App from './App'
import d2Box from '@/components/d2-box/index/index.vue'
import search from '@/components/search/search.vue'
import d2Container from '@/components/d2-container/index.vue'
import productList from '@/components/productList/productList.vue'
import navigation from '@/components/navigation/navigation.vue'
Vue.component('d2Box',d2Box)
Vue.component('d2Container',d2Container)
Vue.component('productList',productList)
Vue.component('navigation',navigation)
Vue.component('search',search)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
