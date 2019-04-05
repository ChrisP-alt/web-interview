import React from 'react'
import { shallow } from 'enzyme'

import Title from '../Title'

describe('Title component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper).toMatchSnapshot()
  })
})
