<template>
	<div class="forgot-password">
		<InfoPanel v-if="isSent"
			>В течении минуты на ваш e-mail придет письмо для подтверждения
			электронного адреса, следуйте инструкции в письме</InfoPanel
		>
		<v-form v-else class="forgot-password__form" v-model="form">
			<h2>Восстановление пароля</h2>
			<div class="input forgot-password__email">
				<v-text-field
					class="input"
					type="text"
					label="E-mail"
					:rules="[rules.required]"
					:messages="message"
					outlined
					dense
				/>
			</div>
			<Button
				class="forgot-password__button"
				:disabled="!form"
				@click="sendEmail"
				>Восстановить</Button
			>
		</v-form>
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
