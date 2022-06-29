<template>
	<h2>toRef的使用及特点</h2>
	<h3>state:{{state}}</h3>
	<h3>age:{{age}}</h3>
	<h3>money:{{money}}</h3>
	<button @click="updata">更新数据</button>
	<hr>
	<Child :age="age"></Child>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
	name: 'App',
	setup() {
		const state = reactive({
			age: 5,
			money: 100
		})
		const age = toRef(state, 'age')
		const money = ref(state.money)
		console.log(age)
		console.log(money)

		const updata = () => {
			state.age += 2
			// age.value += 3
			money.value += 10
		}
		return {
			state,
			age,
			money,
			updata
		}
	},
	components: {
		Child
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>