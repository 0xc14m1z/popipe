import { expect } from "chai"

import pipe from ".."

describe("pipe", () => {

  it("should return false when no arguments are given", () => {
    const test = pipe()
    expect(test).to.be.false
  })

  it("should return the given value when it's the last argument", () => {
    const test = pipe(1, 2, 3, 42)
    expect(test).to.equal(42)
  })

  it("should return the value after being transformed by the arguments", () => {
    const initialValue = 21
    const transformation = x => x * 2
    const test = pipe(initialValue, transformation)
    expect(test).to.equal(42)
  })

  describe("private helper methods", () => {

    describe("isFunction", () => {

      const isFunction = pipe.__get__("isFunction")

      it('should return false for POJOs', () => {
        const test = isFunction({})
        expect(test).to.be.false
      })

      it('should return false for new empty objects', () => {
        const test = isFunction(new Object())
        expect(test).to.be.false
      })

      it('should return false for arrays', () => {
        const test = isFunction(new Array())
        expect(test).to.be.false
      })

      it('should return true for functions', () => {
        const test = isFunction(() => {})
        expect(test).to.be.true
      })

      it('should return false for literal integers', () => {
        const test = isFunction(42)
        expect(test).to.be.false
      })

      it('should return false for Number objects', () => {
        const test = isFunction(new Number(42))
        expect(test).to.be.false
      })

      it('should return false for literal strings', () => {
        const test = isFunction('42')
        expect(test).to.be.false
      })

      it('should return false for null', () => {
        const test = isFunction(null)
        expect(test).to.be.false
      })

      it('should return false for undefined', () => {
        const test = isFunction(undefined)
        expect(test).to.be.false
      })

    })

  })

})
