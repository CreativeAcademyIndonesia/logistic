"use client"
import Hero from './component/Hero'
import Testimonial from './component/Testimonial'
import Service from './component/Service'
import CarouselBanner from './component/CarouselBanner'
import Contact from './component/Contact'
import Pembayaran from './component/Pembayaran' 
import SimulasiHarga from './component/SimulasiHarga'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SimulasiHarga />
      <Service />
      <Pembayaran />
      <Testimonial/>
      <Contact />
    </main>
  )
}

