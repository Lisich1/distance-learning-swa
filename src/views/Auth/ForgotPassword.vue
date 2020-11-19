<template>
	<div class="forgot-password">
		<SuccessPanel v-if="isSent"
			>В течении минуты на ваш e-mail придет письмо для подтверждения
			электронного адреса, следуйте инструкции в письме</SuccessPanel
		>
		<v-form v-else class="forgot-password__form">
			<v-text-field
				class="input"
				type="text"
				label="Логин или email"
				name="login"
				id="login"
				:rules="[rules.required]"
				v-model="login"
				:messages="message"
				outlined
				dense
			/>
			<Button :disabled="!login" @click="sendEmail">Восстановить</Button>
		</v-form>
	</div>
</template>


<script>
import SuccessPanel from "@/components/SuccessPanel";
import Button from "@/components/Button/Button";
export default {
	components: {
		SuccessPanel,
		Button,
	},
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
			this.success = true;
			if (this.success) {
				this.isSent = true;
				this.login = "";
			} else this.message = "Неверный email или email не привязан к аккаунту";
		},
	},
};
</script>
