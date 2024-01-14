"use client"

import { Inter } from 'next/font/google'
import './globals.css'

import { NextUIProvider } from "@nextui-org/react";
import Header from './components/Header/header';
import Detai from './Deta/detai';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
    
      <NextUIProvider>

   <Detai/>
   
{/*        
      <Header/>
        {children}  */}
        
        </NextUIProvider>
        </body>
    </html>
  )
}
