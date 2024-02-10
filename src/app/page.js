"use client"
import Image from 'next/image'
import AppContainer from './components/AppContaner/AppContaner'
import styles from "@/app/page.module.css"
import { Space } from './components/space/space';
import { Button, Link } from '@nextui-org/react';
import { IoMdPeople } from "react-icons/io";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import Pagee from './slideeglallry/page';
import { GiCampfire } from "react-icons/gi";
import Page from './components/stars/page';




export default function Home() {
  const pathimage='/assets/bg.jpg';
  const gallary1='/assets/4.jpg';
  const gallary2='/assets/g6.jpg';
  const gallary3='/assets/g13.jpg';
  const coverimg='/assets/g12.jpg'
 
 


  return (
    <main className={styles.main}>








<div className={styles.gallay_main}>


     <Image

src={pathimage}
alt="logo"
sizes="100vw"
className={styles.cover2}
width={500}
height={100}
style={{
  width: '100%',
  height: '100%',
}}
/>


<div className={styles.cover1}>

  <h1>Traveling is a journey of the soul, an opportunity to find yourself in the midst of the chaos of the world </h1><br/>

  <Button auto color="primary">
 <Link href="/about">Discover the World</Link>
</Button>
</div>
</div>


<div className={styles.app_main}>
  {/* <AppContainer > 1*/}
<Space height={122}/>

<div className={styles.AppContainer1}>
<div className={styles.about_context}>
  <h1> Be part of the northern camp in Sulaymaniyah </h1><br />
  <p> Beautiful landscapes, public gardens, waterfalls, and trees that are 
    hundreds of years old. Climb mountains with us, swim in hot springs and spend a night under the starry sky with our camp.</p>
  </div>

  <Image

src={gallary1}
alt="logo"
className={styles.aboutimg}
width={700}
height={200}
/>

  </div>
  {/* </AppContainer> */}

<Space height={158} width={33}/>
   {/* <AppContainer >2 */}
<div className={styles.AppContainer2}>


  <Image

src={gallary2}
alt="logo"
className={styles.aboutimg2}
width={700}
height={200}
/>

<div className={styles.about_context2}>

  <h1> discover and engoy </h1>
  <br></br>
  <p>  From Zakho and the falls of Gli Ali Bey, to Samarra, where Malwiyah is, then Babylon, where Bir Harut and Marut are, then Dhiqar, where the marshes are,
     until Basra, where the Tigris and Euphrates rivers meet to form the Shatt al-Arab, eighteen governorates of our beloved Iraq, full of love and peace.  </p>

  </div>

  </div>
  {/* </AppContainer> */}

  <Space height={158} width={33}/>

<div className={styles.AppContainer1}>
<div className={styles.about_context}>
  <h1> Transportation </h1>
  <br/>
  <p>We have modern and safe transport trucks equipped with all means of transportation. With us, we guarantee your happiness and safety.</p>

 
  </div>

  <Image

src={gallary3}
alt="logo"
className={styles.aboutimg}
width={700}
height={200}
/>

  </div>
  <Space height={158} width={33}/>

  {/* </AppContainer> */}
<AppContainer>

<div className={styles.AppContainer3}>

  <div className={styles.Container1} >
    <h1> 
    Our camp program provides you with trips within our beloved Iraq. Through us, you can book your trip to any place you want to go.
     Our website is the first form through which you can book your entire trip.
 </h1>
    <Button className={styles.btn}> 
    <Link href="/trips"> discover Travel</Link> 
    </Button>
  </div> 

  </div>
  <div className={styles.star}>
      <Page/>
  </div>

</AppContainer>

<Space height={40} />


<AppContainer width={700}>

  <div className={styles.Container2}>
<h1>  Why camping ?   </h1>
<p> Because we care about the smallest details of our customers, our program provides you with more than 100 hotels throughout Iraq</p>
  </div>
</AppContainer>

<Space height={44} />

<AppContainer>

<div className={styles.grid} >
  
  <div className={styles.grid_Container}>

 <h2> <IoMdPeople/> <br/> 10K+</h2>
 <h2>The happiness of our customers</h2>
 <p> The happiness of our customers is our responsibility. 
  We strive to satisfy our customers as much as possible with our camp application. Your comfort is our priority</p> 
  </div> 

  <div className={styles.grid_Container}>    
    <h2><LiaShuttleVanSolid/> <br/> Means of transportation </h2>
   <p>With our camp application, we will provide you with modern means of transportation equipped with all amenities</p>
  </div> 

  <div className={styles.grid_Container} > 
    <h2> <FaMapLocationDot/> <br/>  Our Travels</h2>
   <p>You can view all our camps, where we will provide trips to all cities in Iraq</p>
  </div> 
  
</div>
</AppContainer>

<Space height={63}/>

<div className={styles.cover_gallary}>



  
  <Image

src={coverimg}
alt="logo"
className={styles.cover2}
width={1100}
height={100}
/>


<div className={styles.cover3}>
<h1> Welcome </h1>

</div>

</div>
{/* div of cover_gallary */}
<Space height={100}/>
</div>


    </main>
  )
}
