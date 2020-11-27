import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		meta: { layout: "empty" },
		component: () => import("../views/Home/Home.vue"),
	},
	{
		path: "/sign-in",
		name: "signIn",
		meta: { layout: "auth" },
		component: () => import("../views/Auth/SignIn"),
	},
	{
		path: "/forgot-password",
		name: "ForgotPassword",
		meta: { layout: "auth" },

		component: () => import("../views/Auth/ForgotPassword.vue"),
	},
	{
		path: "/reset-password",
		name: "ResetPassword",
		meta: { layout: "auth" },

		component: () => import("../views/Auth/ResetPassword.vue"),
	},
	{
		path: "/register-teacher",
		name: "RegisterTeacher",
		meta: { layout: "main", requiresAuth: true },

		component: () => import("../views/Register/RegisterTeacher.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/sign-in");
	} else {
		next();
	}
});
export default router;
