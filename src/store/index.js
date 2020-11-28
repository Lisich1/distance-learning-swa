import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// Авторизация
		status: "",
		token: localStorage.getItem("token") || "",
		user: {},
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		token: (state) => state.token,
		authStatus: (state) => state.status,
	},
	mutations: {
		auth_request(state) {
			state.status = "loading";
		},
		auth_success(state, token, user) {
			state.status = "success";
			state.token = token;
			state.user = user;
		},
		auth_error(state) {
			state.status = "error";
		},
		logout(state) {
			state.status = "";
			state.token = "";
		},
	},
	actions: {
		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				commit("auth_request");
				axios({
					url: "https://eschool123.herokuapp.com/oauth/token",
					data: {
						...user,
						grant_type: "password",
						client_id: 2,
						client_secret:
							"xbkEdI2EjZrGWYb0TpGrsbydPZ4ssKwUEBuFcsUi",
					},
					method: "POST",
				})
					.then((resp) => {
						console.log(resp.data);
						const token = resp.data.access_token;
						const user = resp.data.user;
						localStorage.setItem("token", token);
						axios.defaults.headers.common["Authorization"] = token;
						commit("auth_success", token, user);
						resolve(resp);
					})
					.catch((err) => {
						commit("auth_error");
						localStorage.removeItem("token");
						reject(err);
					});
			});
		},
		logout({ commit }) {
			return new Promise((resolve) => {
				commit("logout");
				localStorage.removeItem("token");
				delete axios.defaults.headers.common["Authorization"];
				resolve();
			});
		},
	},
	modules: {},
});
