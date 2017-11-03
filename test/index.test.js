import { expect, should } from 'chai'
import { sum } from '../src'

describe('sum', function () {
  it('should return 10 when we pass 2 and 8', function (done) {
    expect(sum(2 + 8)).to.be.equal(10)
    done()
  })
})