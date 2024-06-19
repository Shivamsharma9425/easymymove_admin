"use client"

import React,{useState}from "react";
// import Topbar from "@/Components/Topbar/Topbar"
import styles from "./helpdesk.module.css";
import IssueButton from "@/Components/IssueBtton/IssueButton";
// import Modal from './Modal'
// import Link from 'next/link'
// import UserIssue from "@/Components/UserIssue/UserIssue"

const Helpdesk = () => {
  const [UserIssue, setShowUserIssue] = useState(false)
  return (
    <>
      {/* {(UserIssue)? (<UserIssue />) : (<></>)} */}
      {/* <Topbar /> */}
      <div className={styles.mainSection}>
        {/* {(modal)? <Modal />:null} */}
        {/* <IssueButton /> */}
        <div className={styles.heading}>
          <div className={styles.sectionHeading}>
            Helpdesk <span className={styles.requests}>(Requests) </span>
          </div>

          <div className={styles.linkcomponent}>
            <div className={styles.mainbutton}>Raise an issue</div>
          </div>
        </div>
        <div className={styles.helpdeskSection}>
          <table className={styles.hdTable}>
            <thead>
              <tr className={styles.trow}>
                <th className={styles.issueButton}>
                  <p>Open</p>
                </th>
                <th className={styles.issueButton}><p>Resolved</p></th>
                <th className={styles.issueButton}><p>Re-Opened</p></th>
                <th className={styles.issueButton}><p>Closed</p></th>
              </tr>

              <tr>
                <th className={styles.tableCategory}>REQUEST ID</th>
                <th className={styles.tableCategory}>CATEGORY</th>
                <th className={styles.tableCategory}>DESCRIPTION</th>
                <th className={styles.tableData2}>ACTION</th>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              <tr>
                <td className={styles.tableData}>124568696877347</td>
                <td className={styles.tableData}>Order related </td>
                <td className={styles.tableData}>Order not delivered</td>
                <td className={styles.tableData2}>Issue</td>
              </tr>
              <tr>
                <td className={styles.tableData}>124568696877347</td>
                <td className={styles.tableData}>Order related </td>
                <td className={styles.tableData}>Order not delivered</td>
                <td
                  className={styles.tableData2}
                  // style={{ borderRight: "0px" }}
                >
                  Issue
                </td>
              </tr>
            </tbody>
          </table>
          {/* <hr /> */}
        </div>
      </div>
      {/* </div>
} */}
    </>
  );
};

export default Helpdesk;
