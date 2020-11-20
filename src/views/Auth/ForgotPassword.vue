<template>
	<div class="forgot-password">
		<SuccessPanel v-if="isSent"
			>В течении минуты на ваш e-mail придет письмо для подтверждения
			электронного адреса, следуйте инструкции в письме</SuccessPanel
		>
		<v-form v-else class="forgot-password__form">
			<h2>Восстановление пароля</h2>
			<div class="forgot-password__email">
				<v-text-field
					class="input"
					type="text"
					label="E-mail"
					name="email"
					id="email"
					:rules="[rules.required]"
					v-model="email"
					:messages="message"
					outlined
					dense
				/>
			</div>
			<Button
				class="forgot-password__button"
				:disabled="!email"
				@click="sendEmail"
				>Восстановить</Button
			>
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
		email: null,
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
				this.email = "";
			} else this.message = "Неверный email или email не привязан к аккаунту";
		},
	},
};
</script>
