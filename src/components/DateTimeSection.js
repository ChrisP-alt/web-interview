import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Section from './Section'
import { ReactComponent as Icon } from '../icons/clock-regular.svg'
import styles from '../styles/components/dateTimeSection.module.scss'

const DateTimeSection = ({ appointments, selectAppointment }) => {
  const buttons = appointments.map(appointment => (
    <button
      className="button"
      key={appointment.id}
      onClick={() => selectAppointment(appointment.id)}
      type="button"
    >
      {moment(appointment.time).format('DD/MM HH:mm')}
    </button>
  ))
  return (
    <Section headerText="Date & Time" Icon={Icon}>
      <div className={styles.wrapper}>{buttons}</div>
    </Section>
  )
}

DateTimeSection.propTypes = {
  appointments: PropTypes.array, // TODO
  selectAppointment: PropTypes.func.isRequired,
}

export default DateTimeSection
