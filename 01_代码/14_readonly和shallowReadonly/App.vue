<template>
	<h2>readonly和shallowReadonly</h2>
	<h3>state:{{state}}</h3>
	<button @click="updata">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
	name: 'App',
	setup() {
		const state = reactive({
			name: '佐助',
			age: 20,
			car: {
				name: '奔驰',
				color: 'yellow'
			}
		})
		// 只读的 ----深度只读的
		// const state2 = readonly(state)
		// 只读的 ----浅度只读的
		const state2 = shallowReadonly(state)

		const updata = () => {
			// state2.name += '=='
			state2.car.name += '=='
		}
		return {
			state,
			updata,
			state2
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>