import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/user.module.scss'

const User = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.userDetails}>
        <img src={user.avatar} alt="User Avatar" />
        <span>{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <a href="#todo" className={styles.change}>
        Change
      </a>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
  }),
}

export default User
