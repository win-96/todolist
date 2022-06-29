<template>
	<h2>Child子级组件</h2>
	<h3>msg:{{msg}}</h3>
	<!-- <h3>count:{{count}}</h3> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Child',
	props: ['msg'],
	// setup细节问题:
	// setup是在beforeCreate生命周期回调之前就执行了一次
	// 由此可以推断出:setup在执行的时候,当前组件还没有创建出来,也就意味着:组件实例对象this根本就不能用
	// this是undefined,说明,就不能通过this再去调用data/computed/methods/props中的相关内容了
	// 其实所有的composition API相关回调函数中也都不可以

	// 数据初始化的生命周期回调
	// beforeCreate() {
	// 	console.log('beforeCreate执行了')
	// },
	setup(props, context) {
		// props参数,是一个对象,里面有父级组件向子级组件传递的数据,并且是在子级组件中使用props接收到的所有的属性

		// console.log(props.msg)
		console.log(context)
		console.log('==============')

		console.log('setup执行力', this)
		const showMsg1 = () => {
			console.log('setup中的showMsg1方法')
		}
		return {
			showMsg1
			// setup中一般都是返回一个对象,对象中的属性和方法都可以在HTML模板中直接使用
		}
	}
	// data() {
	// 	return {
	// 		count: 10
	// 	}
	// },
	// // 界面渲染后的生命周期回调
	// mounted() {
	// 	console.log(this)
	// },
	// // 方法的
	// methods: {
	// 	showMsg2() {
	// 		console.log('methods中的showMsg方法')
	// 	}
	// }
})
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>