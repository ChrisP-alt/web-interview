import React from 'react'
import { shallow } from 'enzyme'

import ConsultantSection from '../ConsultantSection'

describe('ConsultantSection component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ConsultantSection
        selectConsultantType={jest.fn()}
        selectedConsultantType="gp"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('calls selectConsultantType when a button is clicked', () => {
    const selectConsultantType = jest.fn()
    const wrapper = shallow(
      <ConsultantSection
        selectConsultantType={selectConsultantType}
        selectedConsultantType="gp"
      />
    )
    const physioButton = wrapper.findWhere(node => node.key() === 'physio')
    physioButton.simulate('click')
    expect(selectConsultantType).toHaveBeenCalledWith('physio')
  })
})
