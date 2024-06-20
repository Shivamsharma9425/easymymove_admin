"use client";

import React, { useState } from "react";
import styles from "./helpdesk.module.css";
import Issuemodal from "@/Components/helpdeskComponents/IssueModal/Issuemodal";

const Helpdesk = () => {
  const [isOpen, setisOpen] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("");
  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.heading}>
          <div className={styles.sectionHeading}>
            Helpdesk <span className={styles.requests}>(Requests) </span>
          </div>

          <div onClick={() => setisOpen(true)}>
            <div className={styles.mainbutton}>Raise an issue</div>
            <Issuemodal
              isOpen={isOpen}
              onRequestClose={() => setisOpen(false)}
            />
          </div>
        </div>
        <div className={styles.helpdeskSection}>
          <table className={styles.hdTable}>
            <thead>
              <tr className={styles.trow}>
                <th
                  className={styles.issueButton}
                  onClick={() => {
                    setSectionTitle("o");
                  }}
                  id={sectionTitle === "o" && styles.sectionOpened}
                >
                  <p>Open</p>
                </th>
                <th
                  className={styles.issueButton}
                  onClick={() => {
                    setSectionTitle("r");
                  }}
                  id={sectionTitle === "r" && styles.sectionOpened}
                >
                  <p>Resolved</p>
                </th>
                <th
                  className={styles.issueButton}
                  onClick={() => {
                    setSectionTitle("ro");
                  }}
                  id={sectionTitle === "ro" && styles.sectionOpened}
                >
                  <p>Re-Opened</p>
                </th>
                <th
                  className={styles.issueButton}
                  onClick={() => {
                    setSectionTitle("c");
                  }}
                  id={sectionTitle === "c" && styles.sectionOpened}
                >
                  <p>Closed</p>
                </th>
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
                <td className={styles.tableData2}>Issue Closed</td>
              </tr>
              <tr>
                <td className={styles.tableData}>124568696877347</td>
                <td className={styles.tableData}>Order related </td>
                <td className={styles.tableData}>Order not delivered</td>
                <td className={styles.tableData2}>Issue Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Helpdesk;
