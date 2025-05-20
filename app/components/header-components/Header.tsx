import React from 'react'
import styles from './Header.module.css'
import HeaderName from './HeaderName'
import Search from './Search'


export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <HeaderName/>
        <Search/>
      </div>
    </div>
  )
}
