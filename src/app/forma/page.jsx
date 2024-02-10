import styles from"@/app/Forma/page.module.css"
import { Listbox } from "@nextui-org/react";
import { Space } from "../components/space/space";
import Image from "next/image";
 const Page =() =>{
      const img1="/assets/forma.png";
     

    return( 
 
<div className={styles.body}>

      <div className={styles.forma}>
<div className={styles.img}>
    <Image

src={img1}
alt="logo"
sizes="300vw"
width={1100}
height={1100}

/>

</div>


<div className={styles.content}>




<Space height={62}/>
   
   <label >Email  : </label>

   <input  className={styles.input}  type="Email" name="name" placeholder=" examble@gmail.com"/>






    <Space height={42}/>
   
     <label >name  : </label>

     <input  className={styles.input} type="text" name="name" placeholder=" Enter your name"/>


     <Space height={42}/>


<label >Phone  : </label>
<input  className={styles.input} type="number" name="number" placeholder=" such as : 0783111...."/>





<Space height={43}/>




     <label >Address  : </label>
     <select name="city">
    <option value="">Select City</option>
    <option value="Baghdad">  Baghdad </option>
    <option value="Babylon"> Babylon</option>
    <option value="	Arbil">	Arbil</option>

    <option value="	Al Anbar">  Al Anbar </option>
    <option value="Diyala"> Diyala</option>
    <option value="	Basra">Basra</option>

    <option value="Dahuk">  Dahuk </option>
    <option value="Sulaymaniyah"> Sulaymaniyah</option>
    <option value="Karbala">Karbala</option>

    <option value="	Ninawa">  Ninawa </option>
    <option value="	Dhi Qar"> 	Dhi Qar</option>
    <option value="Najaf">Najaf</option>
</select>



</div>
<Space height={120}/>
      <div className={styles.btn}>
      <button>Submit</button>
      </div>
      </div>
      </div> 
    
       ) 
     

};

export default Page;
    