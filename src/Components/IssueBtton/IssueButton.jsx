import React from "react";
import styles from "../../app/helpdesk/helpdesk.module.css"

const IssueButton = () => {
  return (

      <div className={styles.heading}>
        <div className={styles.sectionHeading}>
          Helpdesk <span className={styles.requests}>(Requests)</span>
        </div>
        <div className={styles.linkcomponent}>
          <div className={styles.mainbutton}>Raise an issue</div>
        </div>
        l
      
    </div>
  );
};

export default IssueButton;
