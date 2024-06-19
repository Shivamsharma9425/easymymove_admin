import React from "react";
import styles from "./IssueModal.module.css";
// import Image from "next/image";
// import logoutIcon from "../../../public/assets/images/logout_1.png";
import Link from "next/link";
import Modal from "react-modal";

const Issuemodal = ({ isOpen, onRequestClose }) => {
  const modalstyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    // content: {
    //   top: " 50%",
    //   left: " 50%",
    //   right: "-30%",
    //   botton: " auto%",

    //   transform: "translate(-50%,-50%)",
    // },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalstyle}>
      <div className={styles.bodyContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.raiseAnIssue}>Raise an Issue</h1>
          <form>
            <div className={styles.selectCategory}>
              {/* <input type="text" placeholder="Select Category" /> */}
              <label for="category" className={styles.label}>
                Category
              </label>
              <select className={styles.select} name="category" id="category">
                <option value="">Select Category</option>
                <option value="bug">Bug</option>
                <option value="feature_request">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.descriptionArea}>
              <label for="description" className={styles.label}>
                Description
              </label>
              <textarea
                className={styles.description}
                name="description"
                id="description"
                rows="5"
                placeholder="Please share additional remarks regarding your issue"
              ></textarea>
            </div>
            <div className={styles.buttons}>
              <div className={styles.mainbutton}>
                <button onClick={onRequestClose}>Close</button>

                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>

        {/* <div className={styles.footer}>
        <div className={styles.footerContent}>
          <Image src={logoutIcon} alt="LogoutIcon" width={20} />
          <p>Log Out</p>
        </div>
      </div> */}
      </div>
    </Modal>
  );
};

export default Issuemodal;
