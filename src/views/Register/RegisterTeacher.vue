<template>
	<div class="register-teacher">
		<v-form class="register-teacher__form" v-model="form">
			<h2>Регистрация учителя</h2>
			<div class="input register-teacher__fio">
				<v-text-field
					label="ФИО преподавателя"
					:rules="[rules.required]"
					outlined
					dense
				/>
			</div>
			<model-select
				class="register-teacher__select search-select"
				:options="options"
				v-model="item"
				placeholder="Предмет"
			>
			</model-select>
			<model-select
				class="register-teacher__select search-select"
				:options="options"
				v-model="item"
				placeholder="Роль"
			>
			</model-select>
			<model-select
				class="register-teacher__select search-select"
				:options="options"
				v-model="item"
				placeholder="Класс"
			>
			</model-select>

			<Button
				class="register-teacher__button"
				:disabled="!form"
				@click="createTeacher"
			>
				Получить логин и пароль</Button
			>
		</v-form>
	</div>
</template>
//TODO сделать стрелочку селекту

<script>
import Button from "@/components/Button/Button";
import { ModelSelect } from "vue-search-select";

export default {
	data() {
		return {
			item: null,
			form: false,
			success: false,
			error: null,
			options: [
				{ value: "1", text: "aa" + " - " + "1" },
				{ value: "2", text: "ab" + " - " + "2" },
				{ value: "3", text: "bc" + " - " + "3" },
				{ value: "4", text: "cd" + " - " + "4" },
				{ value: "5", text: "de" + " - " + "5" },
			],
			rules: {
				required: function (value) {
					return !!value || "Необходимо заполнить поле";
				},
				fio: (len) => (v) =>
					(v || "").length >= len || `Минимальная длина ${len}`,
			},
		};
	},
	computed: {
		match() {
			return this.password === this.passwordRepeat;
		},
	},
	methods: {
		createTeacher() {
			return true;
		},
	},
	components: {
		Button,
		ModelSelect,
	},
};
</script>
<style lang="scss">
.register-teacher {
	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 369px;
		height: 531px;
		padding-top: 56px;
		padding-bottom: 80px;
		box-shadow: 0px 22px 44px -15px rgba(0, 0, 0, 0.25);
	}
	&__fio {
		margin-top: 25px;
	}
	&__select ~ &__select {
		margin-top: 24px;
	}
	&__button {
		margin-top: 48px;
	}
}
</style>


