import React from 'react'
import { shallow } from 'enzyme'

import NotesSection from '../NotesSection'

describe('NotesSection component', () => {
  it('renders correctly with no notes', () => {
    const wrapper = shallow(
      <NotesSection handleNotesChange={jest.fn()} notes="" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with notes', () => {
    const notes = 'Notes on my appointment'
    const wrapper = shallow(
      <NotesSection handleNotesChange={jest.fn()} notes={notes} />
    )
    expect(wrapper.find('textarea').props().value).toEqual(notes)
  })

  it('calls handleNotesChange when the text is changed', () => {
    const handleNotesChange = jest.fn()
    const wrapper = shallow(
      <NotesSection handleNotesChange={handleNotesChange} notes="" />
    )
    const event = { target: { value: 'Updated notes' } }
    wrapper.find('textarea').simulate('change', event)
    expect(handleNotesChange).toHaveBeenCalledWith(event)
  })
})
