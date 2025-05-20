'use client'

import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function HeaderName() {

  return (
    <div className={styles.HeaderNameContainer}>
      <Link href="/">
        <Image
          src = "/images/랑랑2.jpg"
          alt='HomeImage'
          width={50}
          height={50}
          className={styles.HeaderImage}
        />
      </Link>
      
      <div className={styles.HeaderText}>
        Honkai: Star Rail QUIZ
      </div>
    </div>
  )
}
