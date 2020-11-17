<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/forgot-password">Забыли пароль?</router-link> \
			<router-link to="/reset-password">Восстановление пароля</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
@import "./assets/Style.scss";
</style>

<style lang="scss">
@import url("./views/Auth/auth.scss");
</style>