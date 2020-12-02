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
		meta: { layout: "main", requiresAuth: true, role: "admin" },

		component: () => import("../views/Admin/RegisterTeacher.vue"),
	},
	{
		path: "/my-class",
		name: "MyClass",
		meta: { layout: "main", requiresAuth: true, role: "classTeacher" },

		component: () => import("../views/ClassroomTeacher/MyClass.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});
router.beforeEach((to, from, next) => {
	// console.log(to.fullPath);
	// console.log("Токен " + store.getters.token);
	// console.log("Logged in: " + store.getters.isLoggedIn);

	// Если авторизован и хочет зайти на страницу авторизации
	// то не разрешать это сделать
	if (
		to.matched.some(
			(record) => record.path === "/sign-in" && store.getters.isLoggedIn
		)
	) {
		next(false);
		return;
	}

	// Если страница требует авторизации
	// и пользователь не авторизован то перенаправить на авторизацию
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!store.getters.isLoggedIn) {
			next({
				path: "/sign-in",

				query: { redirect: to.fullPath },
			});
		} else next();
	} else {
		next();
	}
});

export default router;
