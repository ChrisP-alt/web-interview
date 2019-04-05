import React from 'react'
import { shallow } from 'enzyme'

import Section from '../Section'
import { ReactComponent as Icon } from '../../icons/comments-regular.svg'

describe('Section component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Section headerText="Section Header" Icon={Icon}>
        <div className="child" />
      </Section>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
