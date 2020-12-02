<template>
	<div class="auth-layout">
		<header class="auth-layout__logo">
			<img src="@/assets/images/logo-purple.svg" />
		</header>
		<div class="auth-layout__image">
			<img v-if="$route.name == 'signIn'" src="@/assets/images/auth.svg" />
			<img v-else src="@/assets/images/reset-password.svg" />
		</div>
		<div class="auth-layout__content">
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
@import "@/scss/colors.scss";
.auth-layout {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		". . logo ."
		". image content ."
		"footer footer footer footer";
	height: 100vh;

	&__logo {
		place-self: end end;
		grid-area: logo;
	}
	&__image {
		grid-area: image;
		place-self: center;
	}
	&__content {
		grid-area: content;
		place-self: center end;
	}
	&__footer {
		grid-area: footer;
	}
}
</style>