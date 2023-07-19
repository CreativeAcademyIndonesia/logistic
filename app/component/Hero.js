import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


export default function Hero() {        
return (
    <div className="overflow-x-hidden bg-gray-50">
        <section className="relative py-12 sm:py-16 ">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Komitmen Terbaik, Pelayanan Transportasi yang Handal</p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj"> Memberikan Solusi Transportasi Terpercaya</h1>
                    <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">PT. Hasfi Prima Logistik adalah sebuah perusahaan yang bergerak di bidang jasa pengurusan transportasi. Kami menyediakan solusi transportasi yang efisien dan andal bagi pelanggan kami.</p>
                    <div className="relative inline-flex mt-10 group">
                        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                        <a href="#" title="" className="relative inline-flex items-center justify-center gap-4 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Mulai Perjalanan Anda Sekarang!
                            <FontAwesomeIcon 
                                icon={faArrowRight}
                                className="text-white"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}