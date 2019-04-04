import React from 'react'
import PropTypes from 'prop-types'

import Section from './Section'
import { ConsultantTypes } from '../constants/Appointments'
import { ReactComponent as Icon } from '../icons/stethoscope-solid.svg'

const ConsultantSection = ({ selectConsultantType }) => {
  const buttons = Object.keys(ConsultantTypes).map(type => {
    const text = ConsultantTypes[type]
    return (
      <button
        className="button"
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
      {buttons}
    </Section>
  )
}

ConsultantSection.propTypes = {
  selectConsultantType: PropTypes.func.isRequired,
}

export default ConsultantSection
