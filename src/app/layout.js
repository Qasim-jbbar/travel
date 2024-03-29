"use client"

import { Inter } from 'next/font/google'
import './globals.css'

import { NextUIProvider } from "@nextui-org/react";
import Header from './components/Header/header';
import { Footer } from './components/Footer/Footer';
import Page from './loadingg/page';
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
    
      <NextUIProvider>

   
   
    
      <Header/>
        {children} 
        
        <Footer/>
        </NextUIProvider>
        </body>
    </html>
  )
}









