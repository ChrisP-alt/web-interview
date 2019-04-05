import React from 'react'

import NewAppointment from './NewAppointment'
import logo from '../logo.png'

import styles from '../styles/components/app.module.scss'

const App = () => (
  <div className="app">
    <div className={styles.appHeader}>
      <img src={logo} alt="Babylon Health" />
    </div>
    <div>
      {/* pages can be rendered by route */}
      <NewAppointment />
    </div>
  </div>
)

export default App
