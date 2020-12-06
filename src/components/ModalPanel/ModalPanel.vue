<template>
	<div class="white modal-panel" :style="style">
		<v-form class="" v-model="form" @submit.prevent="$emit('action', formData)">
			<div class="modal-panel__header">
				<slot name="title">
					<h2>
						{{ title }}
					</h2>
				</slot>
				<slot name="text" v-if="text">
					<span>
						{{ text }}
					</span>
				</slot>
			</div>
			<div class="modal-panel__inputs">
				<slot name="inputs">
					<v-text-field
						class="modal-panel__input"
						v-for="(input, index) in inputs"
						:key="index"
						:label="input.label"
						:rules="input.rules"
						v-model="input.value"
						dense
						outlined
						full-width
					></v-text-field>
				</slot>
			</div>
			<div v-if="secondText" class="modal-panel__second-text">
				<slot name="second-text"> </slot>
			</div>
			<div class="modal-panel__buttons">
				<slot name="buttons">
					<Button
						v-for="(button, index) in buttons"
						:key="index"
						class="modal-panel__button"
						:disabled="!form"
						@click="$emit(button.action, formData)"
						:loading="isLoading"
					>
						{{ button.text }}
					</Button>
				</slot>
				<Button
					v-if="!noActionBtn"
					class="modal-panel__button"
					:disabled="!form"
					type="submit"
					:loading="isLoading"
				>
					<slot name="action-btn-text">{{ actionBtnText }}</slot>
				</Button>
				<Button
					secondary
					class="modal-panel__button"
					v-if="!noCancelBtn"
					@click="$emit('cancel')"
				>
					Отмена</Button
				>
			</div>
		</v-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: false,
			formData: {
				inputs: this.inputs,
			},
			isLoading: false,
		};
	},
	props: {
		width: { type: Number, default: 369 },
		title: { type: String },
		text: { type: String },
		secondText: { type: String },
		inputs: { type: Array },
		buttons: { type: Array },
		actionBtnText: { type: String, default: "Сохранить" },
		noActionBtn: { type: Boolean, default: false },
		noCancelBtn: { type: Boolean, default: false },
	},
	computed: {
		style() {
			return "width:" + this.width + "px";
		},
	},
	methods: {
		//rules for validation
		required: function (value) {
			return !!value || "Необходимо заполнить поле";
		},
		minLength: (len) => (v) =>
			(v || "").length >= len || `Минимальная длина ${len}`,

		// methods
		// submit(){

		// }
	},
};
</script>

<style lang="scss">
@import "./modal-panel.scss";
</style>