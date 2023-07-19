import { faAnchor, faAnchorCircleCheck, faHandHoldingHand, faHandsHoldingCircle, faHeadset, faHouseUser, faShip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from 'next/image'
export default function Service() {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Layanan Transportasi Terpercaya </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Melangkah Lebih Jauh Bersama PT. Hasfi Prima Logistik: Layanan Transportasi Terlengkap</p>
                </div>
        
                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14">
                        <FontAwesomeIcon 
                            icon={faHouseUser}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Customer Service</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Memberikan pelayanan customer service yang cepat dan relevan.</p>
                    </div>
        
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <FontAwesomeIcon 
                            icon={faHandHoldingHand}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Door To Door Service</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Melayani angkutan/pengiriman barang dari Gudang Customer ke Gudang Tujuan, baik antar wilayah maupun antar pulau, All In One Service</p>
                    </div>
        
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                        <FontAwesomeIcon 
                            icon={faHandsHoldingCircle}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Door To Port Service</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Melayani trucking dari Gudang customer ke Pelabuhan Laut atau Bandara Udara yang dituju</p>
                    </div>
        
                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                        <FontAwesomeIcon 
                            icon={faAnchorCircleCheck}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Port To Port Service</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Melayani angkutan/pengiriman barang dari satu Pelabuhan ke Pelabuhan tujuan menggunakan kapal laut atau dari satu bandara ke bandara tujuan menggunakan cargo pesawat.</p>
                    </div>
        
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <FontAwesomeIcon 
                            icon={faAnchor}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Port To Door Service</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">Melayani trucking dari Pelabuhan laut atau bandar udara ke Gudang Customer untuk wilayah seluruh Provinsi Maluku Utara</p>
                    </div>
        
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                        <FontAwesomeIcon 
                            icon={faShip}
                            className="text-slate-400 text-6xl"
                        />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Ready To Serve</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj">PT. Hasfi Prima Logistik menawarkan berbagai layanan jasa pengurusan transportasi </p>
                    </div>
                </div>
            </div>
        </section>
    )
}