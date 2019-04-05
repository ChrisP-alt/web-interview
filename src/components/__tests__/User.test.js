import React from 'react'
import { shallow } from 'enzyme'

import User from '../User'
import mockUser from '../../__fixtures__/user'

describe('User component', () => {
  it('renders correctly with a user', () => {
    const wrapper = shallow(<User user={mockUser} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders null without a user', () => {
    const wrapper = shallow(<User />)
    expect(wrapper.getElement()).toBe(null)
  })
})
