import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "../firebase.config";
import "vue-search-select/dist/VueSearchSelect.css";
import "vue-search-select";
Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			vuetify,
			router,
			store,
			render: (h) => h(App),
		}).$mount("#app");
	}
});
