import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/submitButton.module.scss'

const SubmitButton = ({ onClick }) => (
  <div>
    <button className={styles.button} onClick={onClick} type="button">
      Book
    </button>
  </div>
)

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SubmitButton
