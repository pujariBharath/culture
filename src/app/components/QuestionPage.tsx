'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './QuestionPage.module.css'
import { initDarkMode, toggleDarkMode } from '../util/darkMode'

interface QuestionPageProps {
  word: string
  nextPage: string
  prevPage?: string
}

export default function QuestionPage({ word, nextPage, prevPage }: QuestionPageProps) {
  const [darkMode, setDarkMode] = useState(() => initDarkMode())

  const handleToggleDarkMode = () => toggleDarkMode(setDarkMode)

  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.header}>
        {prevPage && <Link href={prevPage} className={styles.startLink}>←</Link>}
        <button onClick={handleToggleDarkMode} className={styles.toggleMode}>
          <span className={styles.toggleIcon}>{darkMode ? '🌙' : '☀️'}</span>
        </button>
      </div>
      <div className={styles.question}>
        <p>Would the following word describe you?</p>
        <h1 className={styles.word}>{word}</h1>
      </div>
      <div className={styles.buttons}>
        <Link href={nextPage}><button className={styles.responseBtn}>Yes</button></Link>
        <Link href={nextPage}><button className={styles.responseBtn}>No</button></Link>
      </div>
    </div>
  )
}

