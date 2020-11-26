<template>
	<div class="panel" :style="style">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		width: { type: Number, default: 369 },
	},
	computed: {
		style() {
			return "width:" + this.width + "px";
		},
	},
};
</script>

<style lang="scss">
.panel {
	padding: 56px 31px 77px;
	box-shadow: 0px 22px 44px -15px rgba(0, 0, 0, 0.25);
}
</style>