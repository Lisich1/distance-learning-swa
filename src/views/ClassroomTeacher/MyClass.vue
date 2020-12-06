<template>
	<div class="my-class d-flex flex-column">
		<h1>Мой класс</h1>
		<nav class="my-class__nav d-flex flex-nowrap">
			<div class="my-class__select-class">
				<v-select outlined dense append-icon="mdi-chevron-down">Класс</v-select>
			</div>

			<Button @click="openDialog('add')">Добавить нового ученика</Button>
		</nav>
		<v-simple-table class="my-class__table">
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left">ФИО</th>
						<th class="text-left">Логин</th>
						<th class="text-left">Пароль</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in students" :key="item.password">
						<td>{{ item.fio }}</td>
						<td>{{ item.login }}</td>
						<td>
							<input
								readonly
								:value="item.password"
								:type="item.isVisibile ? 'text' : 'password'"
							/>
							<v-icon
								class="my-class__table__tool"
								v-if="!item.isVisible"
								@click="() => (item.isVisibile = !item.isVisibile)"
							>
								{{ item.isVisibile ? "mdi-eye" : "mdi-eye-off" }}
							</v-icon>
						</td>
						<td class="text-right">
							<v-icon @click="editStudent" class="my-class__table__tool"
								>mdi-square-edit-outline</v-icon
							>
							<v-icon @click="deleteStudent" class="my-class__table__tool"
								>mdi-trash-can-outline</v-icon
							>
						</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<Button class="align-self-end my-class__print-btn"
			>Печать логинов и паролей</Button
		>
		<v-dialog v-model="dialog" width="fit-content">
			<modal-panel
				v-on:cancel="modalCancel"
				v-on:action="modalAction"
				v-bind="modalProps"
			>
			</modal-panel>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		action: "",
		students: [
			{
				fio: "Хер с горы",
				login: "HerSgory",
				password: "pwjf;kwjef",
				isVisibile: false,
			},
			{
				fio: "Хер с горы 2",
				login: "HerSgory",
				password: "pwjf;kwjedsdff",
				isVisibile: false,
			},
		],
		modalProps: {},
		modalValidateRules: {
			required: function (value) {
				return !!value || "Необходимо заполнить поле";
			},
		},
	}),
	methods: {
		editStudent() {},
		deleteStudent() {},
		modalCancel() {
			this.dialog = false;
		},
		modalAction(data) {
			this.dialog = false;
			console.log(data);
			switch (this.action) {
				case "add": {
					let student = { name: data.inputs[0].value };
					this.addStudent(student);
					break;
				}
			}
		},
		openDialog(action) {
			this.action = action;
			switch (action) {
				case "add": {
					this.modalProps = {
						title: "Зарегистрировать ученика",
						inputs: [
							{
								label: "ФИО ученика",
								rules: [this.modalValidateRules.required],
								value: "",
							},
						],
					};
					break;
				}
			}
			this.dialog = true;
		},
		addStudent(student) {
			console.log(student);
		},
	},
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
.my-class {
	&__nav {
		margin-bottom: 43px;
	}
	h1 {
		margin-bottom: 20px;
	}
	&__select-class {
		width: 130px;
		margin-right: 26px;
	}
	&__table {
		background-color: #ffffff;
		border-radius: 5px;
		tbody {
			tr:hover {
				background-color: $purple !important;
				color: #ffffff !important;
				input,
				.my-class__table__tool {
					color: #ffffff !important;
				}
			}
			tr:hover {
				color: #ffffff !important;
			}
			tr:hover .my-class__table__tool {
				visibility: visible;
			}
			td {
				input {
					width: max-content;
					outline: none;
				}
			}
		}
		&__tool {
			visibility: hidden;
		}
	}
	&__print-btn {
		margin-top: 50px;
	}
}
</style>