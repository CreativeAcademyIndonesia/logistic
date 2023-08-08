import { faGlobe, faLaptop, faLocationDot, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className='py-10 bg-gray-100 sm:py-16 lg:py-24' id="kontak">
            <section >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-blue-primary sm:text-4xl lg:text-5xl">Kontak Tim Kami</h2>
                        <p className="mt-4 text-lg text-slate-600 w-full sm:w-3/4  mx-auto">Saat ini, PT. Hasfi Prima Logistik telah berhasil membangun reputasi yang baik di industri pengurusan transportasi dan terus berupaya untuk memberikan solusi transportasi yang handal dan inovatif kepada pelanggan kami.</p>
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
                                <h4 className="mb-1 text-xl font-bold text-blue-primary">
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
                                <h4 className="mb-1 text-xl font-bold text-blue-primary">
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
                                <h4 className="mb-1 text-xl font-bold text-blue-primary">
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
                                <h4 className="mb-1 text-xl font-bold text-blue-primary">
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
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4319168365423!2d127.38185115434263!3d0.7974162924501836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb1f22c4e6387%3A0x75d6d76b11b4cf6b!2sPT.%20Hasfi%20Prima%20Logistik!5e0!3m2!1sen!2sid!4v1691466303129!5m2!1sen!2sid" width="100%"className='h-[450px]' style={{border : '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>  
            </div>
        
        </div>
    );
}

export default Contact;