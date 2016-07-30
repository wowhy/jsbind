import Dep from './Dep'

export default class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }

  walk(value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]))
  }

  convert(key, val) {
    defineReactive(this.value, key, val)
  }
}

export function defineReactive(obj, key, val) {
  var dep = new Dep()
  var childOb = observe(val)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,

    get: () => {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }

      return val
    },

    set: (newVal) => {
      if (val === newVal) return

      val = newVal
      childOb = observe(newVal)
      dep.notify()
    }
  })
}

export function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }

  return new Observer(value)
}
