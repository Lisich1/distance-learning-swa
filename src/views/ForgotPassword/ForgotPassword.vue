<template>
	<div class="forgot-password">
		<v-form class="forgot-password__form">
			<v-text-field
				type="text"
				label="Логин или email"
				name="login"
				id="login"
				:rules="[rules.required]"
				v-model="login"
			/>
			<v-input :error-messages="message" error disabled></v-input>
			<v-btn :disabled="!login" @click="sendEmail"> Восстановить пароль</v-btn>
		</v-form>
	</div>
</template>

<script>
export default {
	data: () => ({
		login: null,
		message: null,
		rules: {
			required: (value) => !!value || "Необходимо заполнить поле",
		},
	}),
	methods: {
		sendEmail() {
			// Отправляет на серв
			// типа ответ
			let sucsess = true;
			if (sucsess) {
				this.message = "На мыло отпраленно письмо, больше не тупите";
			} else this.message = "Неверный email или email не привязан к аккаунту";
			console.log(this.message);
		},
	},
};
</script>

<style lang="scss">
@import url("./forgot-password.scss");
</style>
