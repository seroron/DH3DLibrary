import RigidBody from '../../../src/js/base/RigidBody'
import chai from '../../../node_modules/chai/chai'
import sinon from '../../../node_modules/sinon'
import sinon_chai from '../../../node_modules/sinon-chai'
import mocha_sinon from '../../../node_modules/mocha-sinon'

const expect = chai.expect
const server = sinon.fakeServer.create()

describe('RigidBody class', () => {

  describe('constructor function', () => {
    it('should work', () => {
      expect(RigidBody).to.respondTo('constructor')
    })
  })

})

