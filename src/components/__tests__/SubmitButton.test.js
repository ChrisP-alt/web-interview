import React from 'react'
import { shallow } from 'enzyme'

import SubmitButton from '../SubmitButton'

describe('SubmitButton component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SubmitButton onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onClick when the button is clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<SubmitButton onClick={onClick} />)
    wrapper.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
