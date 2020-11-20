<template>
	<v-app id="app" class="red">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/register-teacher">Регистрация учителя</router-link> |
			<router-link to="/forgot-password">Забыли пароль?</router-link> |
			<router-link to="/reset-password">Восстановление пароля</router-link> |
			<router-link to="/sign-in">Авторизация</router-link>
		</div>
		<router-view />
	</v-app>
</template>


<style lang="scss">
@import "./assets/style.scss";
@import "./views/Auth/auth.scss";
</style>