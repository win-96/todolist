<template>
	<h2>toRefs 的使用</h2>
	<!-- <h3>name:{{state.name}}</h3>
	<h3>age:{{state.age}}</h3> -->
	<h3>name:{{name}}</h3>
	<h3>age:{{age}}</h3>

	<h3>name2:{{name2}}</h3>
	<h3>age2:{{age2}}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
function userFeatureX() {
	const state = reactive({
		name2: '自来也',
		age2: 47
	})
	return {
		...toRefs(state)
	}
}
export default defineComponent({
	name: 'App',
	setup() {
		const state = reactive({
			name: '自来也',
			age: 47
		})

		const { name, age } = toRefs(state)
		// console.log(state2)

		// toRefs可以把reactive包裹的数据变化成普通的对象包裹的ref对象
		// 定时器,更新数据,(如果数据变化了,界面也会随之变化,肯定是响应式数据)
		setInterval(() => {
			// state.name += '=='
			name.value += '==='
		}, 1000)
		const { name2, age2 } = userFeatureX()
		return {
			// state
			// 下面的方式不行了
			...state, //不是响应式数据了,
			// ...state2 toRefs返回的对象
			name,
			age,
			name2,
			age2
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>