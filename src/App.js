import React, { Component } from 'react'

import Title from './components/Title'
import User from './components/User'
import ConsultantSection from './components/ConsultantSection'
import DateTimeSection from './components/DateTimeSection'
import NotesSection from './components/NotesSection'
import { getUser, getAvailableSlots } from './api/apiUtils'

import logo from './logo.png'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      user: null,
      availableSlots: [],
      selectedConsultantType: 'gp',
      selectedAppointment: null,
      notes: '',
    }
    this.selectConsultantType = this.selectConsultantType.bind(this)
    this.selectAppointment = this.selectAppointment.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
  }

  componentDidMount() {
    getUser(this.state.userId)
      .then(user => {
        this.setState({ user })
      })
      .catch(() => {
        // TODO: Handle error here
      })
    getAvailableSlots()
      .then(availableSlots => {
        this.setState({ availableSlots })
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  selectConsultantType(type) {
    // reset the selectedAppointment if it doesn't match type
    if (
      this.state.selectedAppointment &&
      this.state.selectedAppointment.consultantType.includes(type)
    ) {
      this.setState({ selectedConsultantType: type })
    } else {
      this.setState({
        selectedAppointment: null,
        selectedConsultantType: type,
      })
    }
  }

  selectAppointment(appointmentId) {
    const appointment = this.state.availableSlots.find(
      slot => slot.id === appointmentId
    )
    this.setState({ selectedAppointment: appointment })
  }

  handleNotesChange(event) {
    this.setState({ notes: event.target.value })
  }

  getFilteredSlots() {
    const { availableSlots, selectedConsultantType } = this.state
    return availableSlots.filter(availableSlot =>
      availableSlot['consultantType'].includes(selectedConsultantType)
    )
  }

  render() {
    const slots = this.getFilteredSlots()
    const {
      notes,
      selectedAppointment,
      selectedConsultantType,
      user,
    } = this.state

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="Babylon Health" />
        </div>
        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <Title />
          <User user={user} />
          <ConsultantSection
            selectConsultantType={this.selectConsultantType}
            selectedConsultantType={selectedConsultantType}
          />
          <DateTimeSection
            appointments={slots}
            selectAppointment={this.selectAppointment}
            selectedAppointment={selectedAppointment}
          />
          <NotesSection
            handleNotesChange={this.handleNotesChange}
            notes={notes}
          />
          <div>
            <div
              className="button"
              onClick={() => {
                /* TODO: submit the data */
              }}
            >
              Book
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
