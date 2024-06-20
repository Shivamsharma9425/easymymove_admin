import React from "react";
// import Topbar from '../../Components/Topbar/Topbar'
import styles from "./users.module.css";
import Image from "next/image";
import searchIcon from "../../../public/assets/images/search_interface_symbol_11.png";
import userImage from "../../../public/assets/images/rectangle_390.jpeg";
// import UsersViewDetails from '@/Components/UsersViewDetails.jsx/UsersViewDetails'

const page = () => {
  return (
    <div>
      {/* <UsersViewDetails /> */}
      {/* <Topbar /> */}
      <div className={styles.mainSection}>
        <div className={styles.sectionHeading}>
          Users <span className={styles.userNum}>(23)</span>
        </div>
        <div className={styles.searchbar}>
          <button type="submit">
            <Image
              src={searchIcon}
              alt="search Icon"
              className={styles.searchIcon}
            />
          </button>
          <input type="text" placeholder="Search User" />
        </div>
        <div className={styles.VendorSection}>
          <table className={styles.hdTable}>
            <thead>
              <tr >
                <th className={styles.tableCategory}>Image</th>
                <th className={styles.tableCategory}>Details</th>
                <th className={styles.tableCategory}>Service Type</th>
                <th className={styles.tableCategory}>Transaction</th>
                <th className={styles.tableCategory}>Date</th>
                <th className={styles.tableCategory}>Action</th>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              <tr className={styles.trow}>
                <td className={styles.tableData}><div >
                      <Image src={userImage} alt="" className={styles.userImage}></Image>
                    </div></td>
                <td className={styles.tableData}>
                  <div className={styles.userMain}>
                    
                    <div className={styles.userDetails}>
                    <div className={styles.userNumber}>123456787654321</div>
                      <div className={styles.userName}>Rahul Sharma</div>
                      <div className={styles.usergmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={styles.tableData2}>
                <td className={styles.td}>
                  <button className={styles.mainButton}>Resolve</button>
                </td>
                <td>
                  <button className={styles.mainButton}>View</button>
                </td>
              </td>
              </tr>
              <tr className={styles.trow}>
                <td className={styles.tableData}><div >
                      <Image src={userImage} alt="" className={styles.userImage}></Image>
                    </div></td>
                <td className={styles.tableData}>
                  <div className={styles.userMain}>
                    
                    <div className={styles.userDetails}>
                    <div className={styles.userNumber}>123456787654321</div>
                      <div className={styles.userName}>Rahul Sharma</div>
                      <div className={styles.usergmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={styles.tableData2}>
                <td className={styles.td}>
                  <button className={styles.mainButton}>Resolve</button>
                </td>
                <td>
                  <button className={styles.mainButton}>View</button>
                </td>
              </td>
              </tr>
              <tr className={styles.trow}>
                <td className={styles.tableData}><div >
                      <Image src={userImage} alt="" className={styles.userImage}></Image>
                    </div></td>
                <td className={styles.tableData}>
                  <div className={styles.userMain}>
                    
                    <div className={styles.userDetails}>
                      <div className={styles.userNumber}>123456787654321</div>
                      <div className={styles.userName}>Rahul Sharma</div>
                      <div className={styles.usergmail}>
                        rahul123@gmail.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.tableData}>Mahaveer nagar, Jaipur</td>
                <td className={styles.tableData}>200</td>
                <td className={styles.tableData}>23/01/2024</td>
                <td className={styles.tableData2}>
                <td className={styles.td}>
                  <button className={styles.mainButton}>Resolve</button>
                </td>
                <td>
                  <button className={styles.mainButton}>View</button>
                </td>
              </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
