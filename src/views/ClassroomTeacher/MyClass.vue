<template>
	<div class="my-class d-flex flex-column">
		<h1>Мой класс</h1>
		<nav class="my-class__nav d-flex flex-nowrap">
			<div class="my-class__select-class">
				<v-select outlined dense append-icon="mdi-chevron-down">Класс</v-select>
			</div>
			<Button>Добавить нового ученика</Button>
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
						<td>{{ item.password }}</td>
						<td class="text-right">
							<v-icon @click="editStudent">mdi-square-edit-outline</v-icon>
							<v-icon @click="deleteStudent">mdi-trash-can-outline</v-icon>
						</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<Button class="align-self-end my-class__print-btn"
			>Печать логинов и паролей</Button
		>
	</div>
</template>

<script>
export default {
	data: () => ({
		students: [
			{
				fio: "Хер с горы",
				login: "HerSgory",
				password: "pwjf;kwjef",
			},
			{
				fio: "Хер с горы 2",
				login: "HerSgory",
				password: "pwjf;kwjedsdff",
			},
		],
	}),
	methods: {
		editStudent() {},
		deleteStudent() {},
	},
};
</script>

<style lang="scss">
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
		background-color: #e7e7e7 !important;
		border-radius: 5px;
	}
	&__print-btn {
		margin-top: 50px;
	}
}
</style>