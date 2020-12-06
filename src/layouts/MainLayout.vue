<template>
	<div fluid class="main-layout">
		
		<nav class="sidebar d-flex flex-column align-center">
			<div class="sidebar__logo">
				<img src="@/assets/images/logo-purple.svg" />
			</div>
			<div class="sidebar__teacher">
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
					<icon-base :icon-name="link.icon" class="main-menu__icon">
						<component v-bind:is="link.icon" />
					</icon-base>
					<div>{{ link.title }}</div>
				</router-link>
			</div>
			<div
				class="sidebar__help d-flex flex-column align-center justify-space-between"
			>
				<img src="" alt="" />
				<div class="d-flex align-center flex-column">
					<span>Нужна помощь?</span>
					<router-link to="/">Техническая поддержка</router-link>
				</div>
			</div>
		</nav>
		<header class="main-header d-flex align-center">
			<nav class="d-flex align-center ml-auto">
				<div class="main-header__notify d-flex align-center justify-center">
					<icon-base
						icon-name="Оповещения"
						width="18"
						height="20"
						icon-color="#ffffff"
						><icon-bell
					/></icon-base>
				</div>
				<a
					class="main-header__auth d-flex align-center justify-space-between"
					@click="logout"
				>
					<icon-base icon-name="logout" width="24" height="24">
						<icon-logout />
					</icon-base>
					<span>Выйти</span>
				</a>
			</nav>
		</header>
		<section class="content">
			<div class="content__center"><router-view /></div>
		</section>
	</div>
</template>

<script>
import Calendar from "../components/Icons/IconCalendar";
import Message from "../components/Icons/IconMessage";
import Study from "../components/Icons/IconStudy";
import TeacherBook from "../components/Icons/IconTeacherBook";
import Settings from "../components/Icons/IconSettings";
import IconBell from "../components/Icons/IconBell";
import IconLogout from "../components/Icons/IconLogout";
export default {
	name: "main-layout",
	components: {
		Calendar,
		Message,
		Study,
		TeacherBook,
		Settings,
		IconBell,
		IconLogout,
	},
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
				icon: "teacherBook",
				exact: true,
			},
			{
				title: "Настройки",
				route: "/settings",
				icon: "settings",
				exact: true,
			},
			{ title: "Регистрация учит", route: "/register-teacher" },
			{ title: "Мой класс", route: "/my-class" },
			{ title: "Забыли пароль?", route: "/forgot-password" },
			{ title: "Восстановление пароля", route: "/reset-password" },
			{ title: "Авторизация", route: "/sign-in" },
		],
	}),
	methods: {
		//TODO вынести метод в отдельный модуль
		// один из способов динамичеcкb подгружать иконки
		getIconUrl(iconName) {
			if (iconName) {
				var images = require.context("@/assets/icons", false, /\.svg$/);
				return images("./" + iconName + ".svg");
			}
		},
		logout() {
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/sign-in");
			});
		},
	},
};
</script>

<style lang="scss">
@import "./main-layout.scss";
</style>