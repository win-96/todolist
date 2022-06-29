<template>
	<h2>toRaw和MarkRaw</h2>
	<h3>state:{{state}}</h3>
	<hr>
	<button @click="testToRaw">测试toRaw</button>
	<button @click="testMarkRaw">测试MarkRaw</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue'
interface UserInfo {
	name: string
	age: number
	likes?: string[]
}
export default defineComponent({
	name: 'App',

	setup() {
		const state = reactive<UserInfo>({
			name: '小明',
			age: 20
		})
		const testToRaw = () => {
			const user = toRaw(state)
			user.name += '=='
			console.log(user)
		}
		const testMarkRaw = () => {
			// state.likes = ['吃', '喝']
			// state.likes[0] += '=='
			const likes = ['吃', '喝']
			state.likes = markRaw(likes)
			setInterval(() => {
				if (state.likes) {
					state.likes[0] += '=='
					console.log('===')
				}
			}, 1000)
		}
		return {
			state,
			testToRaw,
			testMarkRaw
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>