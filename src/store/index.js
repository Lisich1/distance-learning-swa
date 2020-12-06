import Vue from "vue";
import Vuex from "vuex";
import authModule from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: authModule,
    },
    state: {
        isLoading: false,
    },
    getters: {},
    mutations: {
        toggleLoading(state) {
            state.isLoading = !state.isLoading;
        },
    },
    actions: {
        toggleLoading(context) {
            context.commit("toggleLoading");
        },
    },
});
