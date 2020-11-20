<template>
	<div class="success-panel">
		<img src="@/assets/tick-square.svg" alt="success" />
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script>
export default {
	name: "SuccessPanel",
};
</script>

<style lang="scss">
.success-panel {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: #ffffff;
	padding: 27px 9.5px 32px;
	border-radius: 15px;
	box-shadow: 0px 22px 44px -15px rgba(0, 0, 0, 0.25);
	span {
		text-align: center;
		width: 210px;
		margin-top: 1em;
		font-size: 11px;
		line-height: 13px;
	}
}
</style>