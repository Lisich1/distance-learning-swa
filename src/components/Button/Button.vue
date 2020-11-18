<template>
	<v-btn
		:disabled="disabled"
		:loading="loading"
		active-class="v-btn--active"
		@click="$emit('click')"
	>
		Восстановить пароль</v-btn
	>
</template>

<script>
export default {
	name: "Button",
	props: {
		disabled: { type: Boolean, default: false },
		active: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
	},
};
</script>

<style>
</style>