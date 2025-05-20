'use client'

import React, { useState } from 'react'
import styles from './Header.module.css'
import { IoSearch } from "react-icons/io5";
import { useRouter, useSearchParams  } from 'next/navigation';

export default function Search() {
const [searchValue, setSearchValue] = useState("");
const router = useRouter();
const searchParams = useSearchParams()

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (searchValue.trim()) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("search", searchValue.trim())
    router.push(`?${params.toString()}`);
    setSearchValue("");
  }
}

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchValue(e.target.value);
}

  return (
    <form onSubmit={handleSubmit} className={styles.InputContainer}>
      <input 
        type="text"
        placeholder='Search...'
        className={styles.input}
        value={searchValue}
        onChange={handleOnChange}
      />
      <button type="submit" className={styles.SrarchButton}>
        <IoSearch className={styles.SrarchIcon}/>
      </button>
    </form>
  )
}
