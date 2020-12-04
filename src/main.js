import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import Axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "../firebase.config";
import "vue-search-select/dist/VueSearchSelect.css";
import "vue-search-select";
import Panel from "./components/Panel.vue";
import Button from "./components/Button/Button.vue";
import IconBase from "./components/Icons/IconBase.vue";

// Для авторизации и реквестов
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
// Глобальная регистрация компонентов
Vue.component("panel", Panel);
Vue.component("Button", Button);
Vue.component("IconBase", IconBase);
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
