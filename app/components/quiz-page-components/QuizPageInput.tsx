import React from 'react'
import styles from './QuizPage.module.css'

export default function QuizPageInput() {
  return (
    <div className={styles.QuizPageInputContaier}>
      <input type="text" className={styles.QuizPageInput}/>
      <button className={styles.QuizPageInputButton}>
        확인
      </button>
    </div>
  )
}
