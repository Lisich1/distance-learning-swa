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
export default {
	computed: {
		layout() {
			return (this.$route.meta.layout || "main") + "-layout";
		},
	},
	components: {
		AuthLayout,
		MainLayout,
	},
};
</script>
<style lang="scss">
@import "./assets/style.scss";
@import "./views/Auth/auth.scss";
</style>