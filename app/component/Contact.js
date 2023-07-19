import { faGlobe, faLaptop, faLocationDot, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image'

const Contact = () => {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" id="kontak">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">KONTAK TIM KAMI</h2>
                    <p className="mt-4 text-xl text-slate-600">Saat ini, PT. Hasfi Prima Logistik telah berhasil membangun reputasi yang baik di industri pengurusan transportasi dan terus berupaya untuk memberikan solusi transportasi yang handal dan inovatif kepada pelanggan kami.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-4 py-10'>
                    <div className="mb-8 flex grow text-slate-700">
                        <div className="flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon 
                                icon={faLocationDot}
                                className='text-slate-400 text-2xl'
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                            Lokasi
                            </h4>
                            <p className="text-base text-body-color">
                            Jln. Jambu RT.006/RW.003 Kel. Soa Kec. Ternate Utara – Kota Ternate
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex grow text-slate-700">
                        <div className="flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon 
                                icon={faGlobe}
                                className='text-slate-400 text-2xl'
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                            Facebook
                            </h4>
                            <p className="text-base text-body-color">
                            Hasfi Prima Logistik
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex grow text-slate-700">
                        <div className="flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon 
                                icon={faGlobe}
                                className='text-slate-400 text-2xl'
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                            Instagram
                            </h4>
                            <p className="text-base text-body-color">
                            @hasfiprimalogistik
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex grow text-slate-700">
                        <div className="flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon 
                                icon={faPhone}
                                className='text-slate-400 text-2xl'
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="mb-1 text-xl font-bold text-dark">
                                Whatsapp
                            </h4>
                            <p className="text-base text-body-color">
                                +6282293663314
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Contact;