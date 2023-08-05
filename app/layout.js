"use client";
import './globals.css'
import 'flowbite'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import Navbar from './navbar';
const inter = Inter({ subsets: ['latin'] })
import { useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from './component/Footer';
config.autoAddCss = false; 

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({children, session} ) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <html lang="en">
      <body className='bg-white min-h-screen'>
        <SessionProvider session={session} >
          <Navbar />
            <div className={"min-h-screen bg-white"}>{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
