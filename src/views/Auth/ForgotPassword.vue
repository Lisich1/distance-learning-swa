<template>
	<div>
		<InfoPanel v-if="isSent"
			>В течении минуты на ваш e-mail придет письмо для подтверждения
			электронного адреса, следуйте инструкции в письме</InfoPanel
		>

		<div class="auth-panel" v-else>
			<v-form v-model="form" @submit.prevent="sendEmail">
				<div class="auth-panel__header">
					<h2>Восстановление пароля</h2>
				</div>
				<div class="auth-panel__inputs">
					<v-text-field
						class="auth-panel__input"
						type="text"
						label="E-mail"
						:rules="[rules.required]"
						:messages="message"
						outlined
						dense
					/>
				</div>
				<div class="auth-panel__buttons">
					<Button class="auth-panel__button" :disabled="!form" type="submit"
						>Восстановить</Button
					>
				</div>
			</v-form>
		</div>
	</div>
</template>


<script>
import InfoPanel from "@/components/InfoPanel";
import Button from "@/components/Button/Button";
export default {
	components: {
		InfoPanel,
		Button,
	},
	data: () => ({
		message: null,
		success: false,
		form: false,
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
			} else this.message = "Неверный email или email не привязан к аккаунту";
		},
	},
};
</script>
