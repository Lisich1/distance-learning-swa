<template>
	<v-row>
		<v-col class="col-3">
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/register-teacher">Регистрация учителя</router-link> |
				<router-link to="/forgot-password">Забыли пароль?</router-link> |
				<router-link to="/reset-password">Восстановление пароля</router-link> |
				<router-link to="/sign-in">Авторизация</router-link>
			</div>
		</v-col>
		<v-col class="col-9">
			<router-view />
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "main-layout",
};
</script>

<style>
</style>