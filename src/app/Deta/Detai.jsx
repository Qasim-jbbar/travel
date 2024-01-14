
import { travel } from "../../../fake";
import styles from "@/app/Deta/deta.module.css"
import AppContainer from "@/app/components/AppContaner/AppContaner";

import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleRightFill } from "react-icons/pi";



 const Detai =() =>{

    return(

        <div className={styles.body}>
        <AppContainer>
      
        
     
        
        </AppContainer>
        
        <AppContainer className={styles.AppConiner}>
          <div className={styles.grid}> 
        {travel.map((index) => (
         
         <div key={index} className={styles.Home}>
        
           <div  className={styles.content}>
             <div  className={styles.cover}>
               <div className={styles.img}>{index.name} </div>
               <div className={styles.article}>
                
                 <p>عنوان الرحلة : {index.name}</p>
        
                 <Link className={styles.Link} href="/">< PiArrowCircleRightFill /></Link>
               </div>
             </div>
           </div>
         </div>
        ))}
        </div>
        
        </AppContainer>

        </div>
    )
};
export default Detai;
    