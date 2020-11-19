<template>
	<div class="reset-password">
		<v-form class="reset-password__form">
			<v-text-field
				:type="isVisible ? 'text' : 'password'"
				label="Новый пароль"
				name="password"
				id="password"
				:rules="[rules.required, rules.minLength]"
				v-model="password"
				:append-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
				@click:append="() => (isVisible = !isVisible)"
				outlined
				dense
			/>
			<v-text-field
				:type="repeatIsVisible ? 'text' : 'password'"
				label="Повторите пароль"
				name="password-repeat"
				id="password-repeat"
				v-model="passwordRepeat"
				:error-messages="error"
				:append-icon="repeatIsVisible ? 'mdi-eye' : 'mdi-eye-off'"
				@click:append="() => (repeatIsVisible = !repeatIsVisible)"
				outlined
				dense
			/>

			<Button :disabled="!match" @click="resetPassword">
				Восстановить пароль</Button
			>
		</v-form>
	</div>
</template>

<script>
import Button from "@/components/Button/Button";

export default {
	data() {
		return {
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
				minLength: function (value) {
					return (
						(value || "").length >= 5 ||
						"Пароль должен быть не менее 5 символов"
					);
				},
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


