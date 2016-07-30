import Dep from './Dep'

export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.cb = cb
    this.expOrFn = expOrFn
    this.val = this.get()
  }

  update() {
    this.run()
  }

  run() {
    const val = this.get()
    if (val !== this.val) {
      this.val = val
      this.cb.call(this.vm)
    }
  }

  get() {
    Dep.target = this
    const val = this.vm._data[this.expOrFn]
    Dep.target = null
    return val
  }
}
