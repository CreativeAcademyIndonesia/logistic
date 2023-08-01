import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'

export default function Testimonial(){
    return(
        <section className="py-16 bg-gray-50 sm:py-24 lg:py-40 bg-customer-happy bg-no-repeat bg-cover bg-center relative">
            <div className="bg-blue-primary/80 absolute top-0 left-0 w-full h-full z-10"></div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-white/80 font-pj">2.157 Orang Telah Menyatakan Kepuasan layanan PT. Hasfi Prima Logistik</p>
                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">"Suara Klien yang Bahagia, Menginspirasi Layanan Kami"</h2>
                    </div>
    
                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
                        </div>
    
                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            
                                        </div>
    
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">Saya sangat terkesan dengan layanan dari PT. Hasfi Prima Logistik. Pelayanan customer service mereka sangat cepat dan responsif. Pengiriman door to door yang saya gunakan juga berjalan lancar dan barang sampai dengan aman. Saya akan merekomendasikan layanan mereka kepada teman-teman dan rekan bisnis.</p>
                                        </blockquote>
                                    </div>
    
                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" 
                                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Leslie Alexander</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                        </div>
    
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">"Sudah beberapa kali menggunakan layanan PT. Hasfi Prima Logistik, dan saya benar-benar puas dengan pelayanannya. Mereka memberikan solusi lengkap untuk kebutuhan pengiriman barang saya, dari door to port hingga port to door. Layanan profesional dan efisien, tidak ada yang bisa ditambahkan lagi!"</p>
                                        </blockquote>
                                    </div>
    
                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Jacob Jones</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Digital Marketer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar}
                                                className="text-[#FDB241] text-base"
                                            />
                                        </div>
    
                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 font-pj">"Saya senang bekerja sama dengan PT. Hasfi Prima Logistik. Mereka selalu mengutamakan ketepatan waktu dan keamanan barang. Proses pengiriman dari gudang ke pelabuhan laut berjalan tanpa hambatan, dan mereka selalu memberikan update yang terperinci. Saya sangat merekomendasikan layanan mereka kepada siapa pun yang membutuhkan layanan transportasi yang handal."</p>
                                        </blockquote>
                                    </div>
    
                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 font-pj">Jenny Wilson</p>
                                            <p className="mt-0.5 text-sm font-pj text-gray-600">Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}