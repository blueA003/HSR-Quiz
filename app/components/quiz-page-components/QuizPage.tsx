import React from 'react'
import styles from './QuizPage.module.css'
import QuizPageImage from './QuizPageImage'

export default function QuizPage() {
  return (
    <div className={styles.QuizPageContainer}>
      <QuizPageImage></QuizPageImage>
    </div>
  )
}
