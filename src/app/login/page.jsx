import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import logo from "../../../public/assets/images/Easemymove logo.png"


const page = () => {
  return (<div className="bodyContainer">
    <div className={styles.mainContainer}>
    <div className={styles.easyMyMoveLogoContainer}>
            <div className={styles.easyMyMovelogo1}>
                <div className={styles.logoImage}>
                <Image  src={logo} alt="easy my move logo1 png" fill />
                </div>
            </div>
    </div>
    <div className={styles.LoginContainer}>
        <div className={styles.loginbox}>
            <h1>Login</h1>
            <div className={styles.loginInputs}>
                <input type="email" placeholder="Email" />
                <hr/>
                <input type="password" 
                placeholder="Password" />
                <hr/>
            </div>
            <div className={styles.mainbutton}>
                <input type="submit" value="Submit" />
            </div>
        
    </div>
</div>
</div>
</div>
  )
}

export default page