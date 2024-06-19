import React from 'react'
import styles from "./transaction.module.css" 
import Topbar from '@/Components/Topbar/Topbar'

const Transaction = () => {
  return (
    <>
    <Topbar />
    <div className={styles.mainSection}>
    <div className={styles.sectionHeading}>Transaction</div>
    </div>
          
    </>
  )
}

export default Transaction