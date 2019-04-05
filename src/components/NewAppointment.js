import React, { Component } from 'react'

import Title from './Title'
import User from './User'
import ConsultantSection from './ConsultantSection'
import DateTimeSection from './DateTimeSection'
import NotesSection from './NotesSection'
import SubmitButton from './SubmitButton'
import { getUser, getAvailableSlots, postAppointment } from '../api/apiUtils'

import styles from '../styles/components/newAppointment.module.scss'

class NewAppointment extends Component {
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
    this.submitSelectedAppointment = this.submitSelectedAppointment.bind(this)
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

  submitSelectedAppointment() {
    const {
      notes,
      selectedAppointment,
      selectedConsultantType,
      userId,
    } = this.state
    if (!selectedAppointment) {
      // TODO: Handle error here
      return
    }
    postAppointment({
      dateTime: selectedAppointment.time,
      notes,
      type: selectedConsultantType,
      userId,
    })
      .then(response => {
        // TODO: show success message
        this.setState({
          selectedConsultantType: 'gp',
          selectedAppointment: null,
          notes: '',
        })
      })
      .catch(() => {
        // TODO: Handle error here
      })
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
      <div className={styles.wrapper}>
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
        <SubmitButton onClick={this.submitSelectedAppointment} />
      </div>
    )
  }
}

export default NewAppointment
