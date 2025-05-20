import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const footer = [{
  value: "이름",
  valueKey: "박민석"
},
{
  value: "주소",
  valueKey: "경기도 안양시"
},
{
  value: "연락처",
  valueKey: "010-2842-1184"
},
{
  value: "이메일",
  valueKey: "gogurye77@naver.com"
}]
const footerLink = [{
  value: "github",
  valueKey: "https://github.com/blueA003"
},
{
  value: "Portfolio",
  valueKey: "https://www.pmsportfolio.com"
}]

export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.Footer}>
        <div className={styles.FooterTextContainer}>
          {footer.map((item, index) => (
            <div key = {index} className={styles.FooterText}>
              {item.value}: {item.valueKey}
            </div>
          ))}
        </div>
        <div className={styles.FooterLinkContainer}>
          <div className={styles.LinkHeader}>
            Link
          </div>
          {footerLink.map((item, index) => (
            <Link href={item.valueKey} key={index} className={styles.FooterLink}>
              {item.value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}