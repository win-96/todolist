<template>
	<h2>shallowReactive和shallowRef</h2>
	<h3>m1:{{m1}}</h3>
	<h3>m2:{{m2}}</h3>
	<h3>m3:{{m3}}</h3>
	<h3>m4:{{m4}}</h3>
	<hr>
	<button @click="updata">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
	name: 'App',
	setup() {
		const m1 = reactive({
			name: '鸣人',
			age: 20,
			car: {
				name: '奔驰',
				color: 'red'
			}
		})
		const m2 = shallowReactive({
			name: '鸣人',
			age: 20,
			car: {
				name: '奔驰',
				color: 'red'
			}
		})
		const m3 = ref({
			name: '鸣人',
			age: 20,
			car: {
				name: '奔驰',
				color: 'red'
			}
		})
		const m4 = shallowRef({
			name: '鸣人',
			age: 20,
			car: {
				name: '奔驰',
				color: 'red'
			}
		})
		const updata = () => {
			// 更改m1的数据--- reactive方式
			// m1.name += '=='
			// m1.car.name += '=='
			// 更改m2的数据--- shallowReactive方式
			// m2.name += '=='
			// m2.car.name += '=='
			// 更改m3的数据--- ref方式
			// m3.value.name += '=='
			// m3.value.car.name += '=='
			// 更改m4的数据--- shallowRef方式
			// m4.value.name += '=='
			// m4.value.car.name += '=='
		}
		return {
			m1,
			m2,
			m3,
			m4,
			updata
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>