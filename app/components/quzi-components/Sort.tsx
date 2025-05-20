'use client'

import styles from './Quiz.module.css'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

export default function Sort() {
  const router = useRouter();
  const searchParams = useSearchParams()
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    router.replace(`?${params.toString()}`);
  }

  const sortList = [
    {
      "value": "oldest",
      "text" : "등록순"
    },
    {
      "value": "newest",
      "text" : "최신순"
    }
  ]

  return (
    <div>
      <select 
      name="sort" 
      id="sort" 
      className={styles.SortOption}
      onChange={handleSortChange}
      value={searchParams.get("sort") ?? "oldest"}
      >
        {sortList.map((item, index) => (
          <option key={index} value = {item.value} className={styles.Sort}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  )
}
