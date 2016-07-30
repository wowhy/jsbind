import Observer, { observe } from '../../../src/Observer'

describe('Observer', () => {
  it('Observer instance', () => {
    var data = {
      a: {
        id: 1,
        name: 'test'
      },
      b: 'bbb'
    }

    var _data = observe(data)

    expect(_data.value).to.eq(data)
  })
})
