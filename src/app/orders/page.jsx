// "useclient"

// import React, { useState } from 'react'
import styles from "./orders.module.css"
// import Topbar from '@/Components/Topbar/Topbar'

const Orders = () => {
//   const [ordernum, setOrdernum] = useState(0)
  return (
    <div>
        {/* <Topbar /> */}
        <div className={styles.mainSection}>
      <div className={styles.sectionHeading}>Orders <span className={styles.orderNum}>(0)</span></div>
      <div className={styles.searchbar}></div>
      <div className={styles.orderDetails}>
          <div className="orderStatus">
            <div className="box"></div>
            <div className="statusText">On Route</div>
          </div>
          <div className="order">
            
          </div>
      </div>
      </div>
    </div>
    // </div>
  )
}

export default Orders