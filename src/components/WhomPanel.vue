<template>
	<div class="whom-panel d-flex justify-center">
		<span class="align-self-end">
			<slot class="" />
		</span>
	</div>
</template>

<script>
export default {
	props: {},
};
</script>

<style lang="scss">
.whom-panel {
	width: 215px;
	height: 277px;
	padding-bottom: 23px;
	background: #7b92e3;
	span {
		font-size: 18px;
		line-height: 21px;
	}
}
</style>