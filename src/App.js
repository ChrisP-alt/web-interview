import React, { Component } from 'react'

import Title from './components/Title'
import ConsultantSection from './components/ConsultantSection'
import NotesSection from './components/NotesSection'

import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      availableSlots: [],
      selectedConsultantType: 'gp',
      notes: '',
    }
    this.selectConsultantType = this.selectConsultantType.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
  }

  componentDidMount() {
    fetch(`${API_ENDPOINT}/availableSlots`)
      .then(res => res.json())
      .then(json => {
        this.setState({ availableSlots: json })
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
