<template>
	<div class="info-panel">
		<img :src="iconUrl" alt="" />
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script>
export default {
	name: "InfoPanel",
	data() {
		// один из способов динамичемк подгружать иконки
		return { iconUrl: require("@/assets/icons/" + this.icon + ".svg") };
	},
	props: {
		// success, danger
		icon: {
			type: String,
			default: "success",
			required: false,
		},
	},
};
</script>

<style lang="scss">
.info-panel {
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