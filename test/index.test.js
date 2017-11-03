import chai, { expect, assert } from 'chai'
import { sum } from '../src'

// getting should, this is the way
const should = chai.should()

describe('sum', function () {
  // BDD => {expect, should}
  // TDD => {assert}
  // It's all kinda all same, just choose the one that suits to you
  // here are examples

  // expect syntax
  it('should return 10 when we pass 2 and 8', function (done) {
    expect(sum(2 + 8)).to.be.equal(10)
    done()
  })

  // should syntax
  it('should return 8 when passing 10 and -2', function (done) {
    sum(10, -2).should.be.equal(8)
    done()
  })

  // assert syntax
  it('should return -20 when passing -12 and -8', function (done) {
    assert.equal(-20, sum(-12, -8))
    done()
  })
})