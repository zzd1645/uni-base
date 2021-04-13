import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		userInfo: null
	},
	getters: {

	},
	mutations: {
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo;
		},
		removeUserInfo(state) {
			state.userInfo = null;
		}
	},
	actions: {
		
	}
});
export default store;
