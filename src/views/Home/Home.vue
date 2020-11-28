<template>
	<div class="home">
		<div class="nav d-flex align-center justify-end">
			<router-link to="/sign-in" v-if="!isLoggedIn">
				<div class="nav__button-signin d-flex align-center justify-center">
					Войти
				</div>
			</router-link>
			<!-- TODO поменять на личный кабинет когда появится -->
			<router-link to="/lk" v-else>
				<div class="nav__button-signin d-flex align-center justify-center">
					Личный кабинет
				</div>
			</router-link>
		</div>
		<div class="header">
			<div class="header__title">
				<h2>Перемена - современная платформа для онлайн-обучения!</h2>
			</div>
		</div>
		<div class="for-whom d-flex">
			<whom-panel>Для учителя</whom-panel>
			<whom-panel>Для учеников</whom-panel>
			<whom-panel>Для родителей</whom-panel>
		</div>
		<div class="about">
			<div class="about__title"><h3>O нас</h3></div>
			<div class="about__content d-flex justify-space-between">
				<div class="about__image"></div>
				<span
					>Название платформы - платформа, направленная на помощь в проведении
					дистанционного обучения.
				</span>
			</div>
		</div>
		<div class="advantages">
			<div class="advantages__title"><h3>Преимущества</h3></div>
			<div class="advantages__content"></div>
		</div>
		<div class="footer">
			<div class="footer__content d-flex">
				<div class="footer__contacts d-flex flex-column">
					<span>Контактная информация</span>
					<span>+ 7 999 654 32 32</span>
					<span>eluniversity@gmail.com</span>
				</div>
				<div class="footer__questions d-flex flex-column">
					<span>Остались вопросы?</span>
					<router-link to="#">Техническая поддержка</router-link>
				</div>

				<div class="footer__social ml-auto">
					<v-icon>mdi-instagram</v-icon>
					<v-icon>mdi-facebook</v-icon>
					<v-icon>mdi-vk</v-icon>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import WhomPanel from "@/components/WhomPanel";
export default {
	data: () => ({}),
	computed: {
		isLoggedIn() {
			return this.$store.getters.isLoggedIn;
		},
	},
	components: {
		WhomPanel,
	},
};
</script>

<style lang="scss">
@import "./home.scss";
</style>
