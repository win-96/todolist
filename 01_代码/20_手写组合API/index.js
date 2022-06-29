// shallowReactive(浅的劫持,浅的响应式数据) 与reactive (深的劫持,深的响应式数据)


const reactiveHandler = {
  get(target, prop) {
    if (prop === '_is_reactive') return true
    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result);
    return result
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('拦截了设置数据', prop, value);
    return result

  },
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop)
    console.log('拦截了删除数据', prop);
    return result

  }
}

// 定义一个shallowReactive的函数,传入一个目标对象
function shallowReactive(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler)
  }

  return target
}
// 定义一个reactive的函数,传入一个目标对象
function reactive(target) {
  if (target && typeof target === 'object') {
    // 对数组或者是对象中所有的数据进行reactive的递归处理
    // 先判断当前的数据是不是数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {

        target[index] = reactive(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }
    return new Proxy(target, reactiveHandler)
  }

  return target
}
// ======================================
// 定义一个readonlyHandler处理器
const readonlyHandler = {
  get(target, prop) {
    if (prop === '_is_readonly') return true
    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result);
    return result
  },
  set(target, prop, value) {
    console.warn('readonly的数据不能被设置');
    return true
  },
  deleteProperty(target, prop) {
    console.warn('readonly的数据不能被删除');
    return true
  }
}

// 定义一个shallowReadonly函数
function shallowReadonly(target) {
  // 判断当前的数据是不是对象
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler)
  }
  return target
}
// 定义一个readonly函数
function readonly(target) {
  // 判断当前的数据是不是对象
  if (target && typeof target === 'object') {
    // 遍历数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      // 遍历对象
      Object.keys(target).forEach(key => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, readonlyHandler)
  }
  // 如果不是对象或者数组,那么直接返回target
  return target
}
// ==============================================


// 定义一个shallowRef函数
function shallowRef(target) {
  return {
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value
    },
    set value(newValue) {
      console.log('劫持到了设置数据准备更新界面')
      this._value = newValue
    }
  }
}

// 定义一个ref函数
function ref(target) {
  target = reactive(target)
  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value
    },
    set value(newValue) {
      console.log('劫持到了设置数据准备更新界面')
      this._value = newValue
    }
  }

}
// =================================================

// 定义一个函数 isRef,判断传入的数据是不是ref对象
function isRef(obj) {
  return obj && obj._is_ref
}
// 定义一个函数 isReactive,判断传入的数据是不是reactive对象
function isReactive(obj) {
  return obj && obj._is_reactive
}
// 定义一个函数 isReadonly,判断传入的数据是不是readonly对象
function isReadonly(obj) {
  return obj && obj._is_readonly
}
// 定义一个函数 isProxy,判断传入的数据是不是reactive 或者是 readonly对象
function isProxy(obj) {
  return isReactive(obj) || isReadonly(obj)
}