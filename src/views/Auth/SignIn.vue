<template>
	<v-card class="sign-in mx-auto">
		<v-form ref="form" v-model="form" class="sign-in__form pa-4">
			<v-text-field
				v-model="login"
				:rules="[rules.required]"
				label="Логин"
				type="text"
				outlined
				dense
			></v-text-field>
			<v-text-field
				v-model="password"
				:rules="[rules.required, rules.length(6)]"
				label="Пароль"
				type="password"
				outlined
				dense
			></v-text-field>
			<span
				>Забыли пароль?
				<router-link to="/forgot-password"
					>Страница восстановления.</router-link
				></span
			>
		</v-form>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn block :disabled="!form" :loading="isLoading" class="white--text">
				Войти
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		form: false,
		login: undefined,
		password: undefined,
		rules: {
			length: (len) => (v) =>
				(v || "").length >= len || `Минимальная длина ${len}`,
			required: (v) => !!v || "Это обязательное поле",
		},
	}),
};
</script>
