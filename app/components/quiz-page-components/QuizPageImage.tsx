'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './QuizPage.module.css'
import { useSearchParams } from 'next/navigation';
import QuizDetail from '../../../data/db.json'
import FisherYatesShuffle from './FisherYatesShuffle';
import Link from 'next/link';

interface QuizDetailType {
  id: number;
  answer: string[];
  alt: string;
  image: string;
};

export default function QuizPageImage() {
  const queryKey = useSearchParams();
  const queryvalue = queryKey.get('quiz');

  const [quizValue, setQuizValue] = useState<QuizDetailType[]>([]);
  const [quizValueIndex, setQuizValueIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const quizItemMap: Record<string, QuizDetailType[]> = {
    "eyes": QuizDetail.quizItem.eyes,
    "leg": QuizDetail.quizItem.leg,
    "hair": QuizDetail.quizItem.hair
  };

  useEffect(() => {
    const randomData = quizItemMap[queryvalue as string] || QuizDetail.quizItem.eyes
    const quizItem = FisherYatesShuffle(randomData);
    setQuizValue(quizItem);
    setQuizValueIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    const refineInputValue = inputValue.trim().replace(/\s/g, "");
    if(imageItem.answer.includes(refineInputValue))
      setScore(score + 1);
    setInputValue('');
    setQuizValueIndex(quizValueIndex + 1);
  }
  
  const imageItem = quizValue[quizValueIndex];
  const isEnd = quizValueIndex >= quizValue.length // >= 스타일 끝나면 바꾸기

  return isEnd ? (
    <div className={styles.QuizEndContainer}>
      <div className={styles.ImageContainer}>
        <div className={styles.HomeImageContainer}>
          <Link href={'/'}>
            <Image
              src={'/images/home.png'}
              alt=''
              fill
              className={styles.HomeImage}
            />
          </Link>
        </div>
      </div>
      <div className={styles.QuizEndText}>
        {score} / 45문항
      </div>
      <div className={styles.QuizEndText}>
        {(score/quizValue.length *100).toFixed(1)} 점
      </div>
    </div>
  ) : (
    <div>
      <div className={styles.ImageContainer}>
        <div className={styles.QuizPageImageContainer}>
          {imageItem && (
            <Image
              key={imageItem.id}
              src={imageItem.image}
              alt={imageItem.alt}
              fill
              className={styles.QuizPageImage}
            />
          )}
        </div>
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