<template>
	<h2>CustomRef的使用</h2>
	<input
		type="text"
		v-model="keyword"
	>
	<p>{{keyword}}</p>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from 'vue'
function useDebouncedRef<T>(value: T, delay = 200) {
	let timeOutId: number
	return customRef((track, trigger) => {
		return {
			// 返回数据的
			get() {
				// 告诉vue追踪数据
				track()
				return value
			},
			// 设置数据的
			set(newValue: T) {
				// 清理定时器
				clearTimeout(timeOutId)
				// 开启定时器
				timeOutId = setTimeout(() => {
					value = newValue
					// 告诉vue更新界面
					trigger()
				}, delay)
			}
		}
	})
}
export default defineComponent({
	name: 'App',
	setup() {
		// const keyword = ref('abc')
		const keyword = useDebouncedRef('abc', 500)
		return {
			keyword
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>