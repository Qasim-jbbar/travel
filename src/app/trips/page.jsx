
import { travel } from "../../../fake";
import styles from"@/app/trips/page.module.css"
import AppContainer from "../components/AppContaner/AppContaner";
import { Link, avatar } from "@nextui-org/react";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Image from "next/image";
import { Space } from "../components/space/space";



 const Page =() =>{
      const img1="/assets/camp1.png";
      const img2="/assets/camp2.png";

      const img3="/assets/camp3.png";
      const img4="/assets/camp5.png";

      const img5="/assets/camp7.png";
      const img6="/assets/camp8.png";
      const ava1="/assets/avatar1.png";

      const ava2="/assets/avatar22.png";
      const ava3="/assets/avatar33.png";

    return( 
 


    
    <div className={styles.body}>
     
      
      <div className={styles.main_Container}>
            <div className={styles.Container}>
  
<Image

src={img1}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '20%',
  height: '20%',
}}
/>


<div className={styles.contentimg}>
<h2>
Erbil

</h2>  

 



<h1>
Our trip this week to Dohuk. Be a part of us and share the fun and joy with us
</h1><br/>

<div className={styles.reservate}>
<p>
Salary of trip: 130$

</p>
<button  className={styles.btnreservation}>
 <Link href="/forma">reservate</Link>
</button>
</div>


</div>

</div>
</div>



<div className={styles.main_Container}>
<div className={styles.Container}>
  
<Image

src={img5}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '20%',
  height: '23%',
}}
/>


<div className={styles.contentimg}>

<h2>
Sulaymaniyah
</h2>  

 



<h1>
Our second trip to Sulaymaniyah Governorate, where there are valleys and plains.
 Our trip lasted for 4 days
</h1><br/>








<div className={styles.reservate}>
<p>
Salary of trip: 140$

</p>
<button  className={styles.btnreservation}>
 <Link href="/forma">reservate</Link>
</button>
</div>




</div>
</div>
</div>




<div className={styles.main_Container}>
<div className={styles.Container}>
  
<Image

src={img3}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '20%',
  height: '23%',
}}
/>


<div className={styles.contentimg}>
<h2>
Al-Razzaza
</h2>  

 



<h1>
Our third trip to Lake Al-Razzaza,
 where there are stunning views and beautiful weather. Our trip lasts for 2 days</h1><br/>

 <div className={styles.reservate}>
<p>
Salary of trip: 110$

</p>
<button  className={styles.btnreservation}>
 <Link href="/forma">reservate</Link>
</button>
</div>



</div>

</div>
</div>









<div className={styles.main_Container}>
<div className={styles.Container}>
  
<Image

src={img4}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '20%',
  height: '23%',
}}
/>


<div className={styles.contentimg}>
<h2>
Nasiriyah
</h2>  

 



<h1>
This is our trip to Nasiriyah Governorate. It lasts for 4 days. 
This trip is characterized by camping in the desert and valleys.</h1><br/>

<div className={styles.reservate}>
<p>
Salary of trip: 150$

</p>
<button  className={styles.btnreservation}>
 <Link href="/forma">reservate</Link>
</button>
</div>

</div>

</div>
</div>












<div className={styles.main_Container}>
      <div className={styles.Container}>
  
<Image

src={img2}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '15%',
  height: '17%',
}}
/>


<div className={styles.contentimg}>
<h2>
Dohuk
</h2>  

 



<h1>
This is our trip to Dohuk Governorate that lasts for 7 days. This trip is characterized 
by camping in valleys and mountains and many adventures.</h1><br/>

<div className={styles.reservate}>
<p>
Salary of trip: 160$

</p>
<button  className={styles.btnreservation}>
 <Link href="/forma">reservate</Link>
</button>
</div>




</div>

</div>
</div>


<Space height={100}/>

<AppContainer >
<div className={styles.AppContainer}>
<div className={styles.Comment}>

  
<Image

src={ava1}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '19%',
  height: '13%',
  margin:'auto',
}}
/>
<h1>Ahmad</h1>
<p>Last week I camped with a company (...) and the camping was very wonderful. I enjoyed the trip and I would like to repeat it next month.</p>
</div>








<div className={styles.Comment}>

  
<Image

src={ava2}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '19%',
  height: '13%',
  margin:'auto',
}}
/>
<h1>Teba</h1>
<p>Last week I camped with a company (...) and the camping was very wonderful. I enjoyed the trip and I would like to repeat it next month.</p>
</div>









<div className={styles.Comment}>

  
<Image

src={ava3}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '19%',
  height: '13%',
  margin:'auto',
}}
/>
<h1>ali</h1>
<p>Last week I camped with a company (...) and the camping was very wonderful. I enjoyed the trip and I would like to repeat it next month.</p>
</div>


</div>

</AppContainer>

<Space height={99}/>
      </div> ) 


};

export default Page;
    