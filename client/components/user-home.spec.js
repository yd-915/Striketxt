/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {userHome} from './userHome'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('userHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<userHome email="strike@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome, strike strike@email.com')
  })
})
