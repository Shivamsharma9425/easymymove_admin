import React from "react";
import styles from "../styles/Home.module.css";

const page = () => {
  return (
    <div className="bodyContainer">
      <nav className={styles.navbar}>
        <img
          className={styles.logoImage2}
          src="./assets/images/Easemymove crop logo 2.png"
          alt="Easy My Move Logo1"
        />
        <img
          className={styles.logoText}
          src="./assets/images/Easemymove crop logo 1.png"
          alt="Easy My Move Logo2"
        />
      </nav>
      <div className={styles.mainContainer}>
        <div className={styles.easyMyMoveLogoContainer2}>
          <div className={styles.easyMyMovelogo1}>
            <img
              src="./assets/images/untitled 25.png"
              alt="easy my move logo1 "
            />
          </div>
        </div>
        <div className={styles.LoginContainer}>
          <div className={styles.loginbox}>
            <h1>Login</h1>
            <div className={styles.loginInputs}>
              <input type="email" placeholder="Email" />
              <hr />
              <input type="password" placeholder="Password" />
              <hr />
            </div>
            <div className={styles.mainbutton}>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
