"use client"

import React from 'react'
import styles from './Quiz.module.css'
import Quiz from '../../../data/db.json'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function QuizDetail() {
  const params = useSearchParams();
  const router = useRouter();

  const search = params.get('search');
  const sortText = params.get('sort');

  const QuizData = (search? Quiz.quiz.filter(({title,}) => (
    title.includes(search)
  )) : Quiz.quiz).sort((a, b) =>
    sortText === "oldest" ? a.id - b.id :
    sortText === "newest" ? b.id - a.id :
    0);
  
  const handleOnClick = (id: number) => {
    router.push(`/quiz/${id}`);
  };
  
  return (
    <div className={styles.QuizDetail}>
      {QuizData.map((item, index) => (
        <div 
        key={index}
        className={styles.QuizContainer}
        onClick={() => handleOnClick(item.id)}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={240}
            className={styles.QuizPhoto}  
          />
          <div className={styles.QuizTitle}>
            {item.title}
          </div>
          <div className={styles.QuizSub}>
            {item.subtitle}
          </div>
        </div>
      ))}
    </div>
  )
}
