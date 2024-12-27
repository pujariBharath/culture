'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { initDarkMode, toggleDarkMode } from './util/darkMode'

export default function Home() {
  const [email, setEmail] = useState('')
  const [darkMode, setDarkMode] = useState(() => initDarkMode())
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailPattern.test(email)) {
      router.push('/question/1')
    } else {
      alert("Please enter a valid email address.") //This line was already correct. No change needed.
    }
  }

  const handleToggleDarkMode = () => toggleDarkMode(setDarkMode)

  return (
    <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
      <button className={styles.toggleButton} onClick={handleToggleDarkMode}>
        <span className={styles.toggleIcon}>{darkMode ? '🌙' : '☀️'}</span>
      </button>
      <h1 className={styles.title}>CULTURE PRO</h1>
      <hr />
      <div className={styles.container}>
        <div className={styles.instructionsBox}>
          <p><strong>Instructions:</strong></p>
          <p>Answer each question honestly and to the best of your ability.</p>
          <p>Choose only one answer for each question by marking either &apos;Yes&apos; or &apos;No&apos;.</p>
          <p>If you feel neither answer accurately reflects your response, please select the option that most closely aligns with your perspective.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.emailLabel}>
            Enter E-mail below <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            className={styles.emailInput}
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>

      </div>
    </main>
  )
}

