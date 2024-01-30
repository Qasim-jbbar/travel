import Image from "next/image";
import style from "@/app/slideeglallry/page.module.css";
import React, { useState } from "react"
import "keen-slider/keen-slider.min.css";

const Page=()=> {
    const images = ["/assets/avatar22.png", "/assets/avatar23.png", "/assets/avatar24.png"]; // Replace these with your actual image paths
  
    <div class="carousel-item">
 
<Image

src={images}
alt="logo"
sizes="100vw"
width={500}
height={100}
style={{
  width: '20%',
  height: '20%',
}}
/>
  <div class="carousel-caption d-none d-md-block">
    <h5>hello</h5>
    <p>...</p>
  </div>
</div>
};

export default Page;
