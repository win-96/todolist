<template>
	<div>
		<h2>reactive的使用</h2>
		<h3>名字:{{user.name}}</h3>
		<h3>年龄:{{user.age}}</h3>
		<h3>性别:{{user.gender}}</h3>
		<h3>媳妇:{{user.wife}}</h3>
		<button @click="updataUser">更新数据</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
	name: 'App',
	setup() {
		// const obj: any = { //为了在使用obj.gender
		const obj = {
			name: '小明',
			age: 20,
			wife: {
				name: '小甜甜',
				age: 18,
				cars: ['奔驰', '宝马', '奥迪']
			}
		}
		// 把数据变成响应式数据
		const user = reactive<any>(obj)
		console.log(user)

		const updataUser = () => {
			// user.name += '=='
			// user.age += 2
			// user.wife.name += '++'
			// user.wife.cars[0] = '玛莎拉蒂'
			// user--->代理对象,user--->目标对象
			// user对象或者obj对象添加一个新的属性,哪一种方式会影响界面的更新
			// user对象的
			// obj.gender = 'nan'
			// user.gender = '男'
			// delete obj.age
			// 界面没有更新渲染,obj中确实没有了age这个属性
			// delete user.age
			// 如果操作代理对象,目标对象中的数据也随之变化,同时如果想要在操作数据的时候,界面也要跟着重新更新渲染,那么也是操作代理对象
			// user.wife.cars[0] = '玛莎拉蒂'
			// 通过当前的代理对象把目标对象中的某个数组属性添加一个新的属性

			user.wife.cars[3] = '奥拓'
		}
		return {
			user,
			updataUser
		}
	}
})
</script>

<style>
</style>
