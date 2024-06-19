import React from 'react'
// import Topbar from '../../Components/Topbar/Topbar'
import styles from "./users.module.css"
import Image from 'next/image'
import searchIcon from "../../../public/assets/images/search_interface_symbol_11.png"
import userImage from "../../../public/assets/images/rectangle_390.jpeg"
// import UsersViewDetails from '@/Components/UsersViewDetails.jsx/UsersViewDetails'

const page = () => {
 
  return (
    <div>
      {/* <UsersViewDetails /> */}
        {/* <Topbar /> */}
        <div className={styles.mainSection}>
        <div className={styles.sectionHeading}>Users <span className={styles.userNum}>(23)</span></div>
        <div className={styles.searchbar}>
          <button type='submit'>
            <Image src={searchIcon}  alt='search Icon' className={styles.searchIcon} /></button>
            <input type="text" placeholder="Search User" />
          
        </div>
        <div className={styles.userDetailSection}>
        <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Details</th>
                <th>Service Type</th>
                <th>Transaction</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
           
        </thead>
        
        <tbody>
            <tr>
                <td><Image src={userImage} width={60} ></Image></td>  
                <td>247628482985</td>
                <td>Transportation</td>
                <td>20208328848554</td>
                <td>22/01/2023</td>
                <td><button>View Details</button></td>
                <td><button>Orders</button></td>
            </tr>
            
            <tr>
                <td><Image src={userImage} width={60} ></Image></td>
                <td>247628482985</td>
                <td>Transportation</td>
                <td>20208328848554</td>
                <td>22/01/2023</td>
                <td><button >View Details</button></td>
                <td><button>Orders</button></td>
            </tr>
            </tbody>
            
            </table>
            {/* <hr /> */}
        </div>
    </div>
    </div>
  )
}

export default page