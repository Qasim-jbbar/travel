
import { travel } from "../../../fake";
import styles from "@/app/about/page.module.css"
import AppContainer from "../components/AppContaner/AppContaner";
import { Link } from "@nextui-org/react";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Image from "next/image";



 const Page =() =>{

const random_img="https://source.unsplash.com/random/300x200?sig=${Math.random()}";
    return( 
 


    
    <div className={styles.body}>

<AppContainer width={1100} height={400}>
      <div >
      <Image

src={random_img}
alt="logo"
sizes="100vw"
className={styles.random_img}
width={100}
height={10}
 style={{
  width: '66em',
  height: '18em',
 
 }}
/>
      </div>
      </AppContainer>

        <AppContainer className={styles.AppConiner}>
          <div className={styles.grid}> 
        {travel.map((index) => (
         
         <div key={index} className={styles.Home}>
        
           <div  className={styles.content}>
             <div  className={styles.cover}>
               <div className={styles.img}>
                
                {/* {index.image}  */}
                


                
                
                </div>

               <h1> Company : {index.name}</h1>
               <div className={styles.article}>
                
               
                 
                 <p>{index.details}</p>
                 <Link href="/trips"><PiArrowCircleRightFill/> </Link>
               </div>
             </div>
           </div>
         </div>
        ))}
        </div>
        
        </AppContainer>

      </div> ) 
};

export default Page;
    