import Image from 'next/image'
import logovertical from '../../public/logovertical.png'
import Link from 'next/link'
import { useSession } from "next-auth/react";
export default function Footer(){     
    const {data : session} = useSession()
    if(!session?.user) {
        return (
            <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 relative z-40" >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-8 gap-x-10">
                        <div className="col-span-2 md:col-span-3 lg:pr-8">
                            <Image 
                                src={logovertical}
                                alt="logo"
                            />
                            <p className="text-base leading-relaxed text-gray-600 mt-7">Jln. Jambut RT.006/RW.003 Kel. Soa Kec. Ternate Utara - Kota Ternate Maluku Utara</p>
                        </div>
                        <div className='col-span-1 hidden sm:block'></div>
                        <div className='col-span-2 md:col-span-1'>
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Navigation</p>
            
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <Link href={"/"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Beranda</Link>
                                </li>
            
                                <li>
                                    <Link href={"/profile"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">profile</Link>
                                </li>
            
                                <li>
                                    <Link href={"/#services"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Service</Link>
                                </li>
            
                                <li>
                                    <Link href={"/#kontak"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Kontak</Link>
                                </li>
                            </ul>
                        </div>
            
                        <div className='col-span-2 md:col-span-1'>
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">LAYANAN</p>
            
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <Link href={"/cekpengiriman"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cek Pengiriman</Link>
                                </li>
            
                                <li>
                                    <Link href={"/jadwalkapal"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cek Jadwal Kapal</Link>
                                </li>
            
                                <li>
                                    <Link href={"/#simulasipengiriman"} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Simulasi Pengiriman</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                    <hr className="mt-16 mb-10-gray-200" />
            
                    <p className="text-sm text-center text-gray-600">© Copyright 2022, All Rights Reserved by PT. Hasfi prima logistik</p>
                </div>
            </section>
        )
    }

}