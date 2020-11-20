<template>
	<div class="input">
		<v-text-field
			:type="type"
			label="Повторите пароль"
			name="password-repeat"
			id="password-repeat"
			v-model="passwordRepeat"
			:error-messages="error"
			:append-icon="appendIcon"
			@click:append="() => (repeatIsVisible = !repeatIsVisible)"
			outlined
			dense
		/>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		type: { type: String, default: "text", required: true },
		label: { type: String, required: true },
		appendIcon: { type: String },
	},
};
</script>
<style lang="scss">
.input {
	width: 306px;
}
</style>