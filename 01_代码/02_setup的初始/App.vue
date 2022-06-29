<template>
	<!-- vue2中 HTML模板中 必须要有一对根标签,vue3组件的HTML模板中可以没有跟标签 -->
	<!-- <img
		alt="Vue logo"
		src="./assets/logo.png"
	> -->
	<!-- 使用一个子级组件 -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
	<div>
		{{number}}
	</div>
</template>

<script lang="ts">
// 这里可以使用ts的代码

// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from 'vue'
// 引入一个子级组件
// import HelloWorld from './components/HelloWorld.vue'
// 暴露出去一个定义好的组件
export default defineComponent({
	// 当前组件的名字是APP
	name: 'App',
	setup() {
		const number = 10

		return {
			number
		}
	}
	// 注册组件
	// components: {
	// 	// 注册一个子组件
	// 	HelloWorld
	// }
})
</script>

<style>
</style>
