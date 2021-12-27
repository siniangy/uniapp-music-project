import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		storeLogin(state, payload) {
			state.isLogin = payload
		}
	}
})

export default store
