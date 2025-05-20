import React from 'react'
import styles from './Quiz.module.css'
import QuizDetail from './QuizDetail'
import Sort from './Sort'

export default function Quiz() {
  return (
    <div className='containers'>
      <div className={styles.SortContainers}>
        <Sort></Sort>
      </div>
      <div className={styles.Quiz}>
        <div>
          <QuizDetail></QuizDetail>
        </div>
      </div>
    </div>
  )
}
