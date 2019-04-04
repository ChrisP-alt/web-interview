import React from 'react'
import PropTypes from 'prop-types'

import Section from './Section'
import { ReactComponent as Icon } from '../icons/comments-regular.svg'

import styles from '../styles/components/notesSection.module.scss'

const NotesSection = ({ handleNotesChange, notes }) => {
  return (
    <Section headerText="Notes" Icon={Icon}>
      <textarea
        className={styles.textArea}
        onChange={handleNotesChange}
        placeholder="Describe your symptoms"
        rows={6}
        value={notes}
      />
    </Section>
  )
}

NotesSection.propTypes = {
  handleNotesChange: PropTypes.func.isRequired,
  notes: PropTypes.string,
}

export default NotesSection
