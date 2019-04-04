import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Section from './Section'
import { ReactComponent as Icon } from '../icons/clock-regular.svg'
import styles from '../styles/components/dateTimeSection.module.scss'

const DateTimeSection = ({
  appointments,
  selectAppointment,
  selectedAppointment,
}) => {
  const buttons = appointments.map(appointment => {
    const isSelected =
      selectedAppointment && selectedAppointment.id === appointment.id
    const buttonClass = isSelected ? styles.buttonSelected : styles.button
    return (
      <button
        className={buttonClass}
        key={appointment.id}
        onClick={() => selectAppointment(appointment.id)}
        type="button"
      >
        {moment(appointment.time).format('DD/MM HH:mm')}
      </button>
    )
  })
  return (
    <Section headerText="Date & Time" Icon={Icon}>
      <div className={styles.wrapper}>{buttons}</div>
    </Section>
  )
}

// TODO: split into seperate custom PropType file
const appointmentPropType = PropTypes.shape({
  appointmentType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  consultantType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
})

DateTimeSection.propTypes = {
  appointments: PropTypes.arrayOf(appointmentPropType),
  selectAppointment: PropTypes.func.isRequired,
  selectedAppointment: appointmentPropType,
}

export default DateTimeSection
