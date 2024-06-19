import React from "react";
import styles from "./UserIssue.module.css";
import Image from "next/image";
import logoutIcon from "../../../public/assets/images/logout_1.png";
import Link from "next/link";

const UserIssue = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.formContainer}>
      <h1 className={styles.raiseAnIssue}>Raise an Issue</h1>
    <form>
        <label for="category" className={styles.label}>Category</label>
        {/* <select className={styles.select} name="category" id="category">
            <option value="">Select Category</option>
            <option value="bug">Bug</option>
            <option value="feature_request">Feature Request</option>
            <option value="other">Other</option>
        </select> */}
        <div className={styles.selectCategory}><input type="text" placeholder="Select Category"/></div>

        <div className={styles.descriptionArea}><label for="description" className={styles.label}>Description</label>
        <textarea className={styles.description} name="description" id="description" rows="5" placeholder="Please share additional remarks regarding your issue"></textarea>
</div>
       <div className={styles.buttons}>
       <div class={styles.mainbutton}>
            <Link href={"/helpdesk"}><input type="button" value="Close" /></Link>
            <input type="submit"  value="Submit" />
        </div>
       </div>
    </form>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <Image src={logoutIcon} alt="LogoutIcon" width={20} />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default UserIssue;
