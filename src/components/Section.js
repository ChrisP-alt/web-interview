import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/components/section.module.scss'

const Section = ({ children, headerText, Icon }) => (
  <div>
    <div className={styles.header}>
      <Icon />
      <h2>{headerText}</h2>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  headerText: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
}

export default Section
