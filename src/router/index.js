import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/forgot-password",
		name: "ForgotPassword",
		component: () => import("../views/ForgotPassword/ForgotPassword.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
