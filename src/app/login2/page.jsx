import React from "react";
import styles from "../login2/login2.module.css";
import Image from "next/image";
import logoImage from "../../../public/assets/images/Easemymove crop logo 2.png";
import logoText from "../../../public/assets/images/Easemymove crop logo 1.png";
import manImage from "../../../public/assets/images/untitled 25.png";

const page = () => {
  return (
    <div className={styles.bodyContainer}>
      <nav className={styles.navbar}>
        <Image
          className={styles.logoImage}
          src={logoImage}
          alt="EasyMyMoveLogo"
        />
        <Image
          className={styles.logoText}
          src={logoText}
          alt="EasyMyMoveLogoText"
        />
      </nav>
      <div className={styles.mainContainer2}>
        <div className={styles.easyMyMoveLogoContainer2}>
          <Image
            className={styles.manImage}
            src={manImage}
            alt="EasyMyMoveMan"
          />
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
