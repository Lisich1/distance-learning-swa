<template>
	<div class="auth-panel">
		<v-form
			ref="form"
			v-model="form"
			class="sign-in__form"
			@submit.prevent="auth"
		>
			<div class="auth-panel__header">
				<h2>Вход в систему</h2>
			</div>
			<div class="auth-panel__inputs">
				<v-text-field
					class="auth-panel__input"
					v-model="login"
					:rules="[rules.required]"
					label="Логин"
					type="text"
					outlined
					dense
					v-on:change="onChange"
				></v-text-field>
				<v-text-field
					class="auth-panel__input"
					:type="isVisible ? 'text' : 'password'"
					label="Пароль"
					:rules="[rules.required, rules.length(4)]"
					v-model="password"
					:append-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="() => (isVisible = !isVisible)"
					outlined
					dense
					:messages="passwordMessage"
					v-on:change="onChange"
				/>
			</div>
			<div class="auth-panel__second-text">
				<span
					>Забыли пароль?
					<router-link class="red--text" to="/forgot-password"
						>Восстановить</router-link
					></span
				>
			</div>
			<div class="auth-panel__buttons">
				<Button
					class="auth-panel__button"
					:disabled="!form"
					:loading="isLoading"
					type="submit"
				>
					Войти</Button
				>
			</div>
		</v-form>
	</div>
</template>

<script>
export default {
	data: () => ({
		form: false,
		login: "",
		loginMessage: "",
		password: "",
		passwordMessage: "",
		isLoading: false,
		isVisible: false,
		rules: {
			length: (len) => (v) =>
				(v || "").length >= len || `Минимальная длина ${len}`,
			required: (v) => !!v || "Это обязательное поле",
		},
	}),
	methods: {
		auth() {
			this.isLoading = true;
			let username = this.login;
			let password = this.password;
			this.$store
				.dispatch("login", { username, password })
				.then(() => {
					this.$router.push(this.$route.query.redirect || "/lk");
				})
				.catch((err) => {
					switch (err.response.status) {
						case 400: {
							this.passwordMessage = "Неверный логин или пароль";
						}
					}
				})
				.finally(() => (this.isLoading = false));
		},
		onChange() {
			this.passwordMessage = "";
			this.loginMessage = "";
		},
	},
};
</script>
