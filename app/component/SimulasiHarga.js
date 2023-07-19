"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faMoneyBill } from "@fortawesome/free-solid-svg-icons"


export default function SimulasiHarga(){
    return(
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 relative" id="simulasipengiriman">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">Cek estimasi biaya pengiriman</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">"Simulasi Pengiriman"</h2>
                    </div>
    
                    <div className="relative mt-10 md:mt-24 md:order-2 w-full">
                    <form>
                        <div className="grid grid-cols-4 md:grid-cols-12 gap-2">
                            <div className='col-span-4 md:col-span-3'>
                                <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='col-span-4 md:col-span-3'>
                                <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
    
                            <div className='col-span-4 md:col-span-3'>
                                <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
    
                            <div className='col-span-4 md:col-span-3'>
                                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 grow w-full">Cek Estimasi Harga </button>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className='flex relative mt-10 md:mt-24 md:order-2 w-full'>
                    <div  className=" flex flex-col gap-3 md:flex-row justify-center  w-full">
                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <FontAwesomeIcon 
                                            icon={faBuilding}
                                            className="text-blue-600 text-base"
                                        />
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Jakarta</h3>
                                    <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Kota Asal</time>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <FontAwesomeIcon 
                                            icon={faBuilding}
                                            className="text-blue-600 text-base"
                                        />
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Bandung</h3>
                                    <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Kota Tujuan</time>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <FontAwesomeIcon 
                                            icon={faMoneyBill}
                                            className="text-blue-600 text-base"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Rp. 10.000.000</h3>
                                    <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Estimasi Harga</time>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className='grow w-full'>
                        <ul className="w-full text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">* Harga dapat berubah sewaktu-waktu silahkan hubungi sales kami secepatnya untuk melakukan konfirmasi harga</li>
                            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">*Skema pengiriman diatas adalah service DOOR TO DOOR, dengan asumsi lokasi pengiriman dan penerima dalam kota.</li>
                            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">*Untuk komunikasi skema pengiriman service lebih lanjut, silahkan menggunakan via chat sebelah kanan bawah.</li>
                            <li className="w-full px-4 py-2 rounded-b-lg">Saya telah setuju dengan Term and conditiondari Niaga Logistics</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}