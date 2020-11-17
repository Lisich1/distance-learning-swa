<template>
	<div class="forgot-password">
		<div v-if="isSent" class="forgot-password__success">
			<img src="../../assets/tick-square.svg" alt="success" />

			<span>
				В течении минуты на ваш e-mail придет письмо для подтверждения
				электронного адреса, следуйте инструкции в письме
			</span>
		</div>
		<v-form v-else class="forgot-password__form">
			<v-text-field
				type="text"
				label="Логин или email"
				name="login"
				id="login"
				:rules="[rules.required]"
				v-model="login"
				:messages="message"
			/>

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
		isSent: false,
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
			this.success = false;
			if (this.success) {
				this.isSent = true;
				this.message = "На мыло отпраленно письмо, больше не тупите";
				this.login = "";
			} else this.message = "Неверный email или email не привязан к аккаунту";
			console.log(this.message);
		},
	},
};
</script>
