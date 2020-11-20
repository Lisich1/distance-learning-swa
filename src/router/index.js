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
		path: "/sign-in",
		name: "signIn",
		component: () => import("../views/Auth/SignIn"),
	},
	{
		path: "/forgot-password",
		name: "ForgotPassword",
		component: () => import("../views/Auth/ForgotPassword.vue"),
	},
	{
		path: "/reset-password",
		name: "ResetPassword",
		component: () => import("../views/Auth/ResetPassword.vue"),
	},
	{
		path: "/register-teacher",
		name: "RegisterTeacher",
		component: () => import("../views/Register/RegisterTeacher.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
