"use client"
import Hero from './component/Hero'
import Testimonial from './component/Testimonial'
import Service from './component/Service'
import CarouselBanner from './component/CarouselBanner'
import Contact from './component/Contact'
import Pembayaran from './component/Pembayaran' 
import SimulasiHarga from './component/SimulasiHarga'
import { useSession } from "next-auth/react";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MitraLogo from './component/MitraLogo'
export default function Home() {
  const router = useRouter()
  const { status} = useSession()
  useEffect(()=>{
      import('preline')
    if (status === "unauthenticated") {

    } else if (status === "authenticated") {
      void router.push("/dashboard");
    }
  },[status])
  return (
    <main>
      <Hero />
      <SimulasiHarga />
      <Service />
      <MitraLogo />
      <Pembayaran />
      <Testimonial/>
      <Contact />
    </main>
  )
}

