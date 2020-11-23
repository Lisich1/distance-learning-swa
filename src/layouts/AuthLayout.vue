<template>
	<div class="auth-layout">
		<header class="auth-layout__logo d-flex justify-end align-center">
			<div>logo</div>
		</header>
		<div class="auth-layout__image"></div>
		<div class="auth-layout__content d-flex justify-end align-center">
			<router-view />
		</div>
		<footer class="auth-layout__footer"></footer>
	</div>
</template>

<script>
export default {
	name: "auth-layout",
};
</script>

<style lang="scss">
.auth-layout {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"logo logo"
		"image content"
		"footer footer";
	height: 100vh;

	&__logo {
		grid-area: logo;
	}
	&__image {
		grid-area: image;
		width: 558px;
		height: 693px;

		background: #7b92e3;
	}
	&__content {
		grid-area: content;
	}
	&__footer {
		grid-area: footer;
	}
}
</style>