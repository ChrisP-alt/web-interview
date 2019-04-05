import React from 'react'
import { shallow } from 'enzyme'

import DateTimeSection from '../DateTimeSection'
import mockAvailableSlots from '../../__fixtures__/availableSlots'

describe('DateTimeSection component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DateTimeSection
        appointments={mockAvailableSlots}
        selectAppointment={jest.fn()}
        selectedAppointment={mockAvailableSlots[0]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders no buttonSelected when selectedAppointment is null', () => {
    const wrapper = shallow(
      <DateTimeSection
        appointments={mockAvailableSlots}
        selectAppointment={jest.fn()}
        selectedAppointment={null}
      />
    )
    expect(wrapper.find('.buttonSelected').length).toBe(0)
  })

  it('calls selectAppointment when a button is clicked', () => {
    const selectAppointment = jest.fn()
    const wrapper = shallow(
      <DateTimeSection
        appointments={mockAvailableSlots}
        selectAppointment={selectAppointment}
        selectedAppointment={null}
      />
    )
    const appointmentId = mockAvailableSlots[0].id
    const button = wrapper.findWhere(
      node => node.key() === appointmentId.toString()
    )
    button.simulate('click')
    expect(selectAppointment).toHaveBeenCalledWith(appointmentId)
  })
})
