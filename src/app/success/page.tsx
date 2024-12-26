'use client'

import { useState, useEffect } from 'react'
import styles from './success.module.css'
import { initDarkMode, toggleDarkMode } from '../util/darkMode'

export default function Success() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(initDarkMode())
  }, [])

  const handleToggleDarkMode = () => toggleDarkMode(setDarkMode)

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <button onClick={handleToggleDarkMode} className={styles.toggleMode}>
        <span className={styles.toggleIcon}>{darkMode ? '🌙' : '☀️'}</span>
      </button>
      <div className={styles.checkmarkCircle}>
        <div className={styles.checkmark}></div>
      </div>
      <h1>Thank You!</h1>
      <p>Your responses have been recorded</p>
      <button onClick={() => alert('Processing...')}>Process</button>
    </div>
  )
}

