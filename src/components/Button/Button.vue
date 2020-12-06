<template>
	<v-btn
		class="button"
		:class="!secondary ? 'white--text' : ''"
		height="40px"
		:disabled="disabled"
		:loading="loading"
		@click="$emit('click')"
		:color="secondary ? '#E8E8E8' : '#7A76FF'"
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
		secondary: { type: Boolean, default: false },
	},
};
</script>
<style lang="scss">
@import "./button.scss";
</style>