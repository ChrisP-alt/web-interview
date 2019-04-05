import React from 'react'
import PropTypes from 'prop-types'

import Section from './Section'
import { ConsultantTypes } from '../constants/Appointments'
import { ReactComponent as Icon } from '../icons/stethoscope-solid.svg'

import styles from '../styles/components/consultantType.module.scss'

const ConsultantSection = ({
  selectConsultantType,
  selectedConsultantType,
}) => {
  const buttons = Object.keys(ConsultantTypes).map(type => {
    const text = ConsultantTypes[type]
    const isSelected = selectedConsultantType === type
    const buttonClass = isSelected ? styles.buttonSelected : styles.button
    return (
      <button
        className={buttonClass}
        key={type}
        onClick={() => selectConsultantType(type)}
        type="button"
      >
        {text}
      </button>
    )
  })

  return (
    <Section headerText="Consultant Type" Icon={Icon}>
      <div className={styles.wrapper}>{buttons}</div>
    </Section>
  )
}

ConsultantSection.propTypes = {
  selectConsultantType: PropTypes.func.isRequired,
  selectedConsultantType: PropTypes.string.isRequired,
}

export default ConsultantSection
