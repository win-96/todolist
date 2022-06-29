<template>
	<div>
		<h2>setup 和ref 的基本使用</h2>
		<h3>{{count}}</h3>
		<button @click="updataCount">更新数据</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'App',
	// 需求:页面打开后可以直接看到一个数据,点击按钮后,该数据会发生变化
	// vue2 的方式实现
	// data() {
	// 	return {
	// 		count: 0
	// 	}
	// },
	// methods: {
	// 	updataCount() {
	// 		this.count++
	// 	}
	// }
	// vue3 的方式实现
	// setup是组合api的入口函数
	setup() {
		// ref 是一个函数,作用:定义一个响应式数据
		const count = ref(0)
		console.log(count)

		function updataCount() {
			// count++
			count.value++
		}
		return {
			count,
			updataCount
		}
	}
})
</script>

<style>
</style>
