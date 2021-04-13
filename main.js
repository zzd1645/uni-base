import Vue from 'vue'
import App from './App'

//过滤器加载
import filters from '@/filters/index.js'
Object.keys(filters).forEach((item,index)=>{
	Vue.filter(item,filters[item]);
})


//vuex
import store from './store'
Vue.prototype.$store = store

//http服务
import httpService from './services/httpService.js'
Vue.prototype.$http = httpService

//本地服务
import nativeService from './services/nativeService.js'
Vue.prototype.$native = nativeService;

Vue.config.productionTip = false

App.mpType = 'app'



const app = new Vue({
	...App
})
app.$mount()
