"use client"
import { travel } from "../../../fake";
import styles from "@/app/about/page.module.css"
import AppContainer from "../components/AppContaner/AppContaner";
import { Link } from "@nextui-org/react";
import { FaSquareCaretRight } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from 'react';



 const Page =() =>{

const random_img="https://source.unsplash.com/random/300x200?sig=${Math.random()}";

const [products, setProducts] = useState([]);


// useEffect(() => {
//   fetch('/api/products')
//     .then((response) => {
//       console.log('Raw Response:', response);
//       if (!response.ok) {
//         throw new Error('HTTP error! Status: ${response.status}');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('Data:', data);
//       setProducts(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching products:', error);
//       setError(error.message);
//     });
// }, []);



return( 
 


    
    <div className={styles.body}>


{/* 
<div>
      <h1>Your Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
    </div> */}







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
                 <Link href="/trips"><FaSquareCaretRight className={styles.icone}/> </Link>
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
    