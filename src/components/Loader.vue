<template>
	<v-dialog
		v-model="$store.state.isLoading"
		fullscreen
		hide-overlay
		persistent
		transition="false"
	>
		<div class="d-flex align-center justify-center loader">
			<v-progress-circular
				:size="70"
				:width="7"
				color="#7A76FF"
				indeterminate
			></v-progress-circular>
		</div>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.loader {
	width: inherit;
	height: inherit;
}
</style>