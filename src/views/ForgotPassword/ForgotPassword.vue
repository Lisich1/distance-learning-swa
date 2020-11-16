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

// TODO
// Когда письмо отправлено, убрать поле валидации

<script>
export default {
	data: () => ({
		login: null,
		message: null,
		success: false,
		rules: {
			required: function (value) {
				return !!value || "Необходимо заполнить поле";
			},
		},
	}),
	methods: {
		sendEmail() {
			// Отправляет на серв
			// типа ответ
			this.success = true;
			if (this.success) {
				this.message = "На мыло отпраленно письмо, больше не тупите";
				this.login = "";
			} else this.message = "Неверный email или email не привязан к аккаунту";
			console.log(this.message);
		},
	},
};
</script>

<style lang="scss">
@import url("./forgot-password.scss");
</style>
