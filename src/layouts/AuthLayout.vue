<template>
	<div class="d-flex align-center justify-center auth-layout">
		<router-view />
	</div>
</template>

<script>
export default {
	name: "auth-layout",
};
</script>

<style lang="scss">
.auth-layout {
	height: 100vh;
}
</style>