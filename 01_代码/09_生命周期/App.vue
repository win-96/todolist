<template>
	<h2>App父级组件</h2>
	<button @click="isShow=!isShow">切换组件</button>
	<hr>
	<Child v-if="isShow"></Child>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子级组件Child
import Child from './components/Child.vue'
export default defineComponent({
	name: 'App',
	components: {
		// 注册组件
		Child
	},
	setup() {
		const isShow = ref(true)
		return {
			isShow
		}
	}
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>