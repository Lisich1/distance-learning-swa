<template>
	<div class="sign-in">
		<v-form ref="form" v-model="form" class="sign-in__form">
			<h2>Вход в систему</h2>
			<div class="input sign-in__login">
				<v-text-field
					v-model="login"
					:rules="[rules.required]"
					label="Логин"
					type="text"
					outlined
					dense
				></v-text-field>
			</div>
			<div class="input sign-in__password">
				<v-text-field
					:type="isVisible ? 'text' : 'password'"
					label="Пароль"
					:rules="[rules.required, rules.length(6)]"
					v-model="password"
					:append-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="() => (isVisible = !isVisible)"
					outlined
					dense
				/>
			</div>
			<span
				>Забыли пароль?
				<router-link class="red--text" to="/forgot-password"
					>Восстановить</router-link
				></span
			>
			<Button
				class="sign-in__button"
				:disabled="!form"
				@click="auth"
				:loading="isLoading"
			>
				Войти</Button
			>
		</v-form>
	</div>
</template>

<script>
import Button from "@/components/Button/Button";

export default {
	data: () => ({
		form: false,
		login: undefined,
		password: undefined,
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
		},
	},
	components: {
		Button,
	},
};
</script>
