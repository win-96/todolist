<template>
	<h2>APP父组件</h2>
	<h3>msg:{{msg}}</h3>
	<button @click="msg += '=='">更新数据</button>
	<hr>
	<Child :msg="msg"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子级组件 Child
import Child from './components/Child.vue'
export default defineComponent({
	name: 'App',
	// 注册组件
	components: {
		Child
	},
	setup() {
		const msg = ref('what are you no sha lei')
		return {
			msg
		}
	}
})
</script>

<style>
</style>
