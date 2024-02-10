import AppContainer from "../AppContaner/AppContaner";
import styles from "@/app/components/Header/header.module.css"
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import Image from 'next/image'

const Header = () => {

  const avatar_user='/assets/avatar2.png'
  const logo='/assets/d8.png'
  
  return (

    <div>
      <div  className={styles.header}>
         <AppContainer width={1300}>
        <div className={styles.content}>
       
                   <ul className={styles.IoMdSearch}> <Image

src={ logo}
alt="logo"
sizes="100vw"
className={styles.cover2}
width={70}
height={80}

/>
<nav  className={styles.icon} > 
                  
                   < MdDarkMode/>
                   </nav></ul>
                 
 
         
          <ul className={styles.list}>
           
          <li><Link href="/trips">Trips</Link> </li>
            <li><Link href="/about">Company</Link> </li>
            <li><Link href="http://localhost:3000">Home</Link></li>
           

          </ul>
          
           <Image

src={ avatar_user}
alt="avatar"
sizes="100vw"
className={styles.cover2}
width={60}
height={80}

/>

<Link href="/about" className={styles.link}>Sign In</Link>
 


        </div>
        
      </AppContainer>
      </div>
     

    <div className={styles.cover_img}>

    </div>
    </div>

  );
};

export default Header;
