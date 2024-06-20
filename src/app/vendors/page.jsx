import React from "react";
import styles from "./vendors.module.css";
import Image from "next/image";
import searchIcon from "../../../public/assets/images/search_interface_symbol_11.png";
import image from "../../../public/assets/images/rectangle_390.jpeg";
// import Topbar from '@/Components/Topbar/Topbar'

const Vendors = () => {
  return (
    <>
      {/* <Topbar /> */}
      <div className={styles.mainSection}>
        <div className={styles.heading}>
          <div className={styles.sectionHeading}>
            Vendors <span className={styles.vendorNum}>(50) </span>
          </div>
        </div>
        <div className={styles.searchbar}>
          <button type="submit">
            <Image
              src={searchIcon}
              alt="search Icon"
              className={styles.searchIcon}
            />
          </button>
          <input type="text" placeholder="Search Vendor" />
        </div>

        <div className={styles.VendorSection}>
          <table className={styles.hdTable}>
            <thead>
              <tr >
                <th className={styles.tableCategory}>CUSTOMER NAME</th>
                <th className={styles.tableCategory}>LOCATION</th>
                <th className={styles.tableCategory}>ORDERS</th>
                <th className={styles.tableCategory}>REQUESTED</th>
                <th className={styles.tableData2}>STATUS</th>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              <tr className={styles.trow}>
                <td className={styles.tableData}>
                  <div className={styles.vendorMain}>
                    <div >
                      <Image src={image} alt="" className={styles.vendorImage}></Image>
                    </div>
                    <div className={styles.VendorDetails}>
                      <div className={styles.VendorName}>Rahul Sharma</div>
                      <div className={styles.vendorgmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={`${styles.tableData} ${styles.tabledata4}`} style={{ borderRight: "0px" }}>
                  <div className={styles.dot}></div>
                  <div className={styles.status}>Active</div>
                </td>
              </tr>
              <tr className={styles.trow}>
                <td className={styles.tableData}>
                  <div className={styles.vendorMain}>
                    <div >
                      <Image src={image} alt="" className={styles.vendorImage}></Image>
                    </div>
                    <div className={styles.VendorDetails}>
                      <div className={styles.VendorName}>Rahul Sharma</div>
                      <div className={styles.vendorgmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={`${styles.tableData} ${styles.tabledata4}`} style={{ borderRight: "0px" }}>
                  <div className={styles.dot}></div>
                  <div className={styles.status}>Active</div>
                </td>
              </tr>
              <tr className={styles.trow}>
                <td className={styles.tableData}>
                  <div className={styles.vendorMain}>
                    <div >
                      <Image src={image} alt="" className={styles.vendorImage}></Image>
                    </div>
                    <div className={styles.VendorDetails}>
                      <div className={styles.VendorName}>Rahul Sharma</div>
                      <div className={styles.vendorgmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={`${styles.tableData} ${styles.tabledata4}`} style={{ borderRight: "0px" }}>
                  <div className={styles.dot}></div>
                  <div className={styles.status}>Active</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Vendors;
