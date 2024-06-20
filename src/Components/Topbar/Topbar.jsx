"use client";


import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "../Topbar/topbar.module.css";
import Image from "next/image";
import logoImage from "../../../public/assets/images/Easemymove crop logo 2.png";
import logoText from "../../../public/assets/images/Easemymove crop logo 1.png";
import logoutIcon from "../../../public/assets/images/logout_1.png";
// import Users from "../../app/adminComponents/Users/Users";
// import Profile from "../../app/adminComponents/Profile/Profile";
// import Orders from "../../app/adminComponents/Orders/Orders";
// import Vendors from "../../app/adminComponents/Vendors/Vendors";
// import Helpdesk from "../../app/adminComponents/Helpdesk/Helpdesk";
// import Transaction from "../../app/adminComponents/Transaction/Transaction";

const Topbar = () => {
  // const params = useParams()
  const [sectionTitle, setSectionTitle] = useState("");
  const router = useRouter();

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.topbar}>
        <div className={styles.navContainer}>
          <Image
            className={styles.logoImage}
            src={logoImage}
            alt="EasyMyMoveLogo"
            width={50}
          />
          <Image
            className={styles.logoText}
            src={logoText}
            alt="EasyMyMoveLogoText"
            width={200}
          />
        </div>
        <div className={styles.navButtonsContainer}>
          <div>
            <Link href={"/orders"} className={styles.Link}>
              <div
                className={styles.navButtons}
                onClick={() => {
                  setSectionTitle("o");
                  router.push("/orders");
                }}
                id={sectionTitle === "o" && styles.sideClicked}
              >
                <img src="./assets/images/package_31.png" alt="" />
                <p>Orders</p>
              </div>
            </Link>
          </div>
          <div
          >
            <Link href={"/vendors"} className={styles.Link}>
              <div className={styles.navButtons}
              onClick={() => {
                setSectionTitle("v");
                router.push("/vendors");
              }}
              id={sectionTitle === "v" && styles.sideClicked}
              >
                <img src="./assets/images/realtor_1.png" alt="" />
                <p>Vendors</p>
              </div>
            </Link>
          </div>
          <div
          >
            <Link href={"/helpdesk"} className={styles.Link}>
              <div className={styles.navButtons}
              onClick={() => {
                setSectionTitle("helpdesk");
                router.push("/helpdesk");
              }}
              id={sectionTitle === "helpdesk" && styles.sideClicked} 
              >
                <img src="./assets/images/support_31.png" alt="" />
                <p>Helpdesk</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"/users"} className={styles.Link}>
              <div
                className={styles.navButtons}
                onClick={() => {
                  setSectionTitle("u");
                  router.push("/users");
                }}
                id={sectionTitle === "u" && styles.sideClicked}
              >
                <img src="./assets/images/team_2.png" alt="" />
                <p>Users</p>
              </div>
            </Link>
          </div>
          <div
            
          >
            <Link href={"/transaction"} className={styles.Link}>
              <div className={styles.navButtons}
              onClick={() => {
                setSectionTitle("tt");
                router.push("/transaction");
              }}
              id={sectionTitle === "tt" && styles.sideClicked}>
                <img src="./assets/images/credit_card_11.png" alt="" />
                <p>Transaction</p>
              </div>
            </Link>
          </div>
          <div
          
          >
            <Link href={"/profile"} className={styles.Link}>
              <div className={`${styles.navButtons} ${styles.profile}`}
              onClick={() => {
                setSectionTitle("p");
                router.push("/users");
              }}
              id={sectionTitle === "p" && styles.sideClicked} 
              >
                <img src="./assets/images/user_41.png" alt="" />
                <p>Profile</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.mainsection}>
          <div className={styles.profilesection}>
            {/* <div className={styles.sectionHeading}>{sectionTitle}</div> */}
            {/* <div className={styles.sectionDetails}> */}
            {/* {(sectionTitle=="Orders") ? <Orders /> : null }
               {(sectionTitle=="Vendors") ? <Vendors /> : null}
               {(sectionTitle=="Helpdesk") ? <Helpdesk /> : null}
               {(sectionTitle=="Users") ? <Users /> : null}
               {(sectionTitle=="Transaction") ? <Transaction /> : null}
               {(sectionTitle=="Profile") ? <Profile /> : null} */}
            {/* </div> */}
            {/* {<sectionTitle />} */}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <Image src={logoutIcon} alt="LogoutIcon" width={20} />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
