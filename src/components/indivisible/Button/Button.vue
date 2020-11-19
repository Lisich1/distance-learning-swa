<template>
	<v-btn
		class="button"
		:disabled="disabled"
		:loading="loading"
		@click="$emit('click')"
		elevation=""
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
// @import "./button.scss";
</style>