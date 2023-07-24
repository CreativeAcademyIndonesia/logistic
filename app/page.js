"use client"
import Hero from './component/Hero'
import Testimonial from './component/Testimonial'
import Service from './component/Service'
import CarouselBanner from './component/CarouselBanner'
import Contact from './component/Contact'
import Pembayaran from './component/Pembayaran' 
import SimulasiHarga from './component/SimulasiHarga'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const {data : session} = useSession()
  useEffect(() => {
      if (session) {
        router.push("/dashboard");
      }
  }, [session, router]);

  return (
    <main>
      <Hero />
      <SimulasiHarga />
      <Service />
      <Pembayaran />
      <Testimonial/>
      <Contact />
    </main>
  )
}

