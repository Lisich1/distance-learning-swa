<template>
	<v-app id="app">
		<component :is="layout">
			<router-view />
		</component>
	</v-app>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import EmptyLayout from "@/layouts/EmptyLayout";

export default {
	computed: {
		layout() {
			return (this.$route.meta.layout || "main") + "-layout";
		},

		created: function () {
			// Если токе просрочен
			this.$http.interceptors.response.use(undefined, function (err) {
				return new Promise(function (resolve, reject) {
					if (
						err.status === 401 &&
						err.config &&
						!err.config.__isRetryRequest
					) {
						this.$store.dispatch("logout");
					}
					throw err;
				});
			});
		},
	},
	components: {
		AuthLayout,
		MainLayout,
		EmptyLayout,
	},
};
</script>
<style lang="scss">
@import "./assets/style.scss";
@import "./views/Auth/auth.scss";
</style>