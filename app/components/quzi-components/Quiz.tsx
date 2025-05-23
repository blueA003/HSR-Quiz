"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import styles from "./Quiz.module.css";
import QuizDetail from "./QuizDetail";
import Sort from "./Sort";
import QuizPage from "../quiz-page-components/QuizPage";

export default function Quiz() {
  const params = useSearchParams();
  const quizParams = params.get("quiz");
  const isQuizPage = quizParams == null;

  return isQuizPage ? (
    <div className="containers">
      <div className={styles.SortContainers}>
        <Sort />
      </div>
      <div className={styles.Quiz}>
        <QuizDetail/>
      </div>
    </div>
  ) : (
    <QuizPage/>
  );
}