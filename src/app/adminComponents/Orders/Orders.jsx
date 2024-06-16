"useclient"

import React, { useState } from 'react'
import styles from "./Orders.module.css"

const Orders = () => {
  const [ordernum, setOrdernum] = useState(0)
  return (
    <div>
      <div className={styles.sectionHeading}>Orders <span className={styles.orderNum}>({ordernum})</span></div>
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
  )
}

export default Orders