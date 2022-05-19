// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			// #endif

			// #ifdef VUE3
			import {
				createStore
			} from 'vuex'
			const store = createStore({
				// #endif
				state: {
					checkbox2: [],
					"age": 18,

				},
				mutations: {
					saveAnswer(state, payload) {
						state.checkbox2.push(payload.checkbox2)
					},

				},


			})

			export default store
