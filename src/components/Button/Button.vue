<template>
	<v-btn
		class="button"
		height="40px"
		:disabled="disabled"
		:loading="loading"
		@click="$emit('click')"
		color="#c4c4c4"
	>
		<slot></slot
	></v-btn>
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
<style lang="scss">
@import "./button.scss";
</style>