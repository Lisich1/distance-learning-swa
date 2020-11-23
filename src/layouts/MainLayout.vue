<template>
	<div fluid class="main-layout d-flex">
		<nav id="nav" class="d-flex flex-column align-center">
			<div class="main-layout__logo">LOGO</div>
			<div class="main-layout__teacher">
				<h3>Марья Ивановна</h3>
			</div>
			<div class="main-menu d-flex flex-column align-center mb-auto">
				<router-link
					v-for="link in links"
					:key="link.route"
					class="main-menu__link d-flex align-center"
					active-class="main-menu__link-active"
					:to="link.route"
					:exact="link.exact"
				>
					<img :src="getIconUrl(link.icon)" />
					<div>{{ link.title }}</div>
				</router-link>
			</div>
			<div
				class="main-layout__help d-flex flex-column align-center justify-space-between"
			>
				<img src="" alt="" />
				<div class="d-flex align-center flex-column">
					<span>Нужна помощь?</span>
					<router-link to="/">Техническая поддержка</router-link>
				</div>
			</div>
		</nav>
		<header class="main-layout__header">
			<nav class="d-flex justify-end">
				<div class="">dd</div>
			</nav>
		</header>
		<div class="main-layout__content">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "main-layout",
	data: () => ({
		links: [
			{
				title: "Расписание",
				route: "/rasp",
				exact: true,
				icon: "calendar",
			},
			{
				title: "Cooбщения",
				route: "/messages",
				icon: "message",
				exact: true,
			},
			{
				title: "Мои предметы",
				route: "/sujects",
				icon: "study",
				exact: true,
			},
			{
				title: "Журнал",
				route: "/teacher-book",
				icon: "calendar",
				exact: true,
			},
			{
				title: "Настройки",
				route: "/settings",
				icon: "settings",
				exact: true,
			},
			{ title: "Регистрация учит", route: "/register-teacher" },
			{ title: "Забыли пароль?", route: "/forgot-password" },
			{ title: "Восстановление пароля", route: "/reset-password" },
			{ title: "Авторизация", route: "/sign-in" },
		],
	}),
	methods: {
		//TODO вынести метод в отдельный модуль
		getIconUrl(iconName) {
			if (iconName) {
				var images = require.context("@/assets/icons", false, /\.svg$/);
				return images("./" + iconName + ".svg");
			}
		},
	},
};
</script>

<style lang="scss">
@import "./main-layout.scss";
</style>