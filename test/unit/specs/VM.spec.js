import VM from '../../../src/VM'

describe('VM', () => {
  it('VM instance', () => {
    let demo = new VM({
      data: {
        id: 1
      }
    })

    let changed = false

    demo.$watch('id', () => {
      changed = true
    })

    demo.id = 10

    expect(changed).to.eq(true)
  })
})
