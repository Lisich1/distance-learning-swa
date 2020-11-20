<template>
	<div class="reset-password">
		<v-form class="reset-password__form" v-model="form">
			<h2>Восстановление пароля</h2>
			<div class="input reset-password__password">
				<v-text-field
					:type="isVisible ? 'text' : 'password'"
					label="Новый пароль"
					:rules="[rules.required, rules.length(6)]"
					v-model="password"
					:append-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="() => (isVisible = !isVisible)"
					outlined
					dense
				/>
			</div>
			<div class="input reset-password__password">
				<v-text-field
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
			<Button :disabled="!match || !form" @click="resetPassword">
				Восстановить</Button
			>
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


