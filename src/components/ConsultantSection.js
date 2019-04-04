import React from 'react'
import PropTypes from 'prop-types'

import { ConsultantTypes } from '../constants/Appointments'

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

  return <div>{buttons}</div>
}

ConsultantSection.propTypes = {
  selectConsultantType: PropTypes.func.isRequired,
}

export default ConsultantSection
