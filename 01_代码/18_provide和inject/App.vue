<template>
	<h2>provide 和 inject</h2>
	<p>当前的颜色为:{{color}}</p>
	<button @click="color='red'">红色</button>
	<button @click="color='yellow'">黄色</button>
	<button @click="color='green'">绿色</button>
	<hr>
	<Son></Son>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from './components/Son.vue'
export default defineComponent({
	name: 'App',
	components: {
		Son
	},
	setup() {
		// 响应式的数据
		const color = ref('red')
		// 提供数据
		provide('color', color)

		return {
			color
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>