"use client"

// import React, { useState } from 'react'
import styles from "./helpdesk.module.css"
// import Modal from './Modal'
import Link from 'next/link'

const Helpdesk = () => {
  const [UserIssue, setShowUserIssue] = useState(false)
  return (
   <>
   {(UserIssue)? <Modal />:null}
   <div className={styles.heading}>
   <div className={styles.sectionHeading}>Helpdesk  <span className={styles.requests}>(Requests)</span></div>

   <Link href={"/adminQuery"} className={styles.linkcomponent}><div className={styles.mainbutton} >Raise an issue</div></Link>
   </div>
   </>
  )
}

export default Helpdesk