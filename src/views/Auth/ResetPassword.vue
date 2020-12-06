<template>
	<div class="auth-panel">
		<v-form
			class="reset-password__form"
			v-model="form"
			@submit.prevent="resetPassword"
		>
			<div class="auth-panel__header">
				<h2>Восстановление пароля</h2>
			</div>
			<div class="auth-panel__inputs">
				<v-text-field
					class="auth-panel__input"
					:type="isVisible ? 'text' : 'password'"
					label="Новый пароль"
					:rules="[rules.required, rules.length(6)]"
					v-model="password"
					:append-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="() => (isVisible = !isVisible)"
					outlined
					dense
				/>
				<v-text-field
					class="auth-panel__input"
					:type="repeatIsVisible ? 'text' : 'password'"
					label="Повторите пароль"
					v-model="passwordRepeat"
					:error-messages="error"
					:append-icon="repeatIsVisible ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="() => (repeatIsVisible = !repeatIsVisible)"
					outlined
					dense
				/>
			</div>
			<div class="auth-panel__buttons">
				<Button
					class="auth-panel__button"
					:disabled="!match || !form"
					type="submit"
				>
					Восстановить</Button
				>
			</div>
		</v-form>
	</div>
</template>

<script>
import Button from "@/components/Button/Button";
// import Input from "@/components/Input/Input";

export default {
	data() {
		return {
			form: false,
			password: null,
			passwordRepeat: null,
			isVisible: false,
			repeatIsVisible: false,
			success: false,
			error: null,
			rules: {
				required: function (value) {
					return !!value || "Необходимо заполнить поле";
				},
				length: (len) => (v) =>
					(v || "").length >= len || `Минимальная длина ${len}`,
			},
		};
	},
	computed: {
		match() {
			return this.password === this.passwordRepeat;
		},
	},
	methods: {
		resetPassword() {
			if (!this.match) {
				this.error = "Пароли не совпадают";
				return;
			}
		},
	},
	components: {
		Button,
	},
};
</script>


