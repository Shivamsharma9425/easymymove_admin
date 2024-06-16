import React from "react";
import styles from "../Profile/profile.module.css";

const Profile = () => {
  return (
    <>
    <div className={styles.sectionHeading}>Profile</div>
    <div className={styles.sectionDetails}>
      <div className={styles.personalSection}>
        <p className={styles.detailsHeading}> Personal Details</p>
        <div className={styles.personalDetailsMain}>
          <p>Name</p>
          <p>Email</p>
          <p>Phone No.</p>
          <p>Seller ID</p>
          <p>Status</p>
          <p>Pincode</p>
        </div>
      </div>
      <div className={styles.businessSection}>
        <p className={styles.detailsHeading}>Business Details</p>
        <div className={styles.businessDetailsMain}>
          <p>Account holder name</p>
          <p>IFSC code</p>
          <p>Account No.</p>
          <p>GST No.</p>
          <p>PAN No.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
