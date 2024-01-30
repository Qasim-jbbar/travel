import AppContainer from "../AppContaner/AppContaner";
import styles from "@/app/components/Header/header.module.css"
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
const Header = () => {

  
  return (

    <div>
      <div  className={styles.header}>
         <AppContainer width={1300}>
        <div className={styles.content}>
       
                   <ul className={styles.IoMdSearch}>Logo <nav  className={styles.icon} > 
                  
                   < MdDarkMode/>
                   </nav></ul>
                 
 
         
          <ul className={styles.list}>
           
          <li><Link href="/trips">Trips</Link> </li>
            <li><Link href="/about">Company</Link> </li>
            <li><Link href="http://localhost:3000">Home</Link></li>
           

          </ul>
          <h1 className={styles.Image}>User</h1>

<Link href="/about" className={styles.link}>Login</Link>
 


        </div>
        
      </AppContainer>
      </div>
     

    <div className={styles.cover_img}>

    </div>
    </div>

  );
};

export default Header;
