'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './QuizPage.module.css'
import { useParams } from 'next/navigation';
import QuizDetail from '../../../data/db.json'
import FisherYatesShuffle from './FisherYatesShuffle';

interface QuizDetailType {
  id: number;
  answer: string;
  alt: string;
  image: string;
};

export default function QuizPageImage() {
  const params = useParams();

  const [quizValue, setQuizValue] = useState<QuizDetailType[]>([]);
  const [quizValueIndex, setQuizValueIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const quizItemMap: Record<string, QuizDetailType[]> = {
    "1": QuizDetail.eyes,
    "2": QuizDetail.leg,
    "3": QuizDetail.hair
  };

  useEffect(() => {
    const randomData = quizItemMap[params.title as string] || QuizDetail.eyes
    const quizItem = FisherYatesShuffle(randomData);
    setQuizValue(quizItem);
    setQuizValueIndex(0);
  }, []);

  const handleCheck = () => {
    if(a.answer.split(',').includes(inputValue))
      setScore(score + 1);
    setInputValue('');
    setQuizValueIndex(quizValueIndex + 1);
  }
  
  const a = quizValue[quizValueIndex];
  const isEnd = quizValueIndex >= quizValue.length
  
  return isEnd ? (
    <div>
      {(score/quizValue.length *100).toFixed(1)} 점
    </div>
  ) : (
    <div>
      <div className={styles.QuizPageImageContainer}>
        {a && (
          <Image
            key={a.id}
            src={a.image}
            alt={a.alt}
            width={400}
            height={400}
            className={styles.QuizPageImage}
          />
        )}
      </div>
      <div className={styles.QuizPageInputContaier}>
        <input 
          type="text" 
          className={styles.QuizPageInput}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(e) => {
            if(e.key === 'Enter')
              handleCheck()
          }}
        />
        <button 
          className={styles.QuizPageInputButton}
          onClick={handleCheck}
        >
          확인
        </button>
      </div>
    </div>
  );
}