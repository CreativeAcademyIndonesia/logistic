import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Hero() {        
return (
    <div className="overflow-x-hidden pt-16 relative bg-hero-banner bg-no-repeat bg-cover bg-center" id="home">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-primary/50"></div>
        <section className="relative py-12 sm:py-16 lg:py-40">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="inline-flex px-4 py-2 text-base text-white border border-gray-200 rounded-full font-pj bg-blue-primary/60">Komitmen Terbaik, Pelayanan Transportasi yang Handal</p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight drop-shadow-xl ">Memberikan Solusi <span className="text-white">Pengiriman dan Penerimaan</span>  Barang Anda.</h1>
                    <p className="max-w-xl mx-auto mt-6 text-base leading-7 text-white/80 font-inter">PT. Hasfi prima logistik adalah sebuah perusahaan yang bergerak dibidang jasa pengurusan transportasi. Kami menyediakan solusi pengiriman dan penerimaan barang melalui transportasi darat, laut dan udara yang efisien dan andal bagi pelanggan kami.</p>
                    <div className="relative inline-flex mt-10 group">
                        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <Link href="https://api.whatsapp.com/send?phone=6282293663314" title="" className="relative inline-flex items-center justify-center gap-4 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800  rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grabg-gray-800" role="button">
                        Hubungi Kami
                            <FontAwesomeIcon 
                                icon={faPhone}
                                className="text-white"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}