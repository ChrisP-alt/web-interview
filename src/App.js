import React, { Component } from 'react'

import Title from './components/Title'
import User from './components/User'
import ConsultantSection from './components/ConsultantSection'
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
      notes: '',
    }
    this.selectConsultantType = this.selectConsultantType.bind(this)
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
    this.setState({ selectedConsultantType: type })
  }

  handleNotesChange(event) {
    this.setState({ notes: event.target.value })
  }

  render() {
    // calculate matching slots
    let slots = []
    for (let i = 0; i < this.state.availableSlots.length; i++) {
      for (
        let j = 0;
        j < this.state.availableSlots[i]['consultantType'].length;
        j++
      ) {
        if (
          this.state.availableSlots[i]['consultantType'][j] ===
          this.state.selectedConsultantType
        ) {
          slots.push(this.state.availableSlots[i])
        }
      }
    }

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="Babylon Health" />
        </div>
        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <Title />
          <User user={this.state.user} />
          <ConsultantSection selectConsultantType={this.selectConsultantType} />
          <div>
            <strong>Date & Time</strong>
            {slots.map(slot => (
              <li
                className="appointment-button"
                key={slot.id}
                onClick={() => {
                  this.setState({ selectedAppointment: slot })
                }}
              >
                {slot.time}
              </li>
            ))}
          </div>
          <NotesSection
            handleNotesChange={this.handleNotesChange}
            notes={this.state.notes}
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
