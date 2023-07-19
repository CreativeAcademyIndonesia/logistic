import Image from 'next/image'
import About from '../component/About'
import VisiMisi from '../component/VisiMisi'
import Footer from '../component/Footer'
import NilaiPerusahaan from '../component/NilaiPerusahaan'

export default function Home() {
  return (
    <main>
        <div className="overflow-x-hidden bg-gray-50">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Cek Pengiriman</h1>
                        <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Silahkan Masukan No. Packing List / No. Container / No. Resi  Contoh : PL/SBY/2020/xxxxx</p>
                        <div className="relative inline-flex mt-10 group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                <form action="#" method="post" className="relative mt-4">
                                    <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                                    <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                                    <div className="flex-1">
                                        <label htmlFor="" className="sr-only">pengiriman</label>
                                        <div>
                                        <input type="email" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="PL/SBY/2020/xxxxx" />
                                        </div>
                                    </div><button type="button" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Cek Pengiriman</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                    <div className='py-10 flex justify-center'>     
                        <a href="#" className="block max-w-lg min-w-[50%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PL/SBY/2020/xxxxx</h5>
                            
                                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                                    <li className="mb-10 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
       
                                    </li>
                                    <li className="mb-10 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                    </li>
                                    <li className="ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                    </li>
                                </ol>

                        </a>
                    </div>
                    <div>
                        <div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="sr-only">Info</span>
                            <div className="ml-3 text-sm font-medium">
                            Tidak diketahui : Silahkan Masukan No. Packing List / No. Container / No. Resi dengan Benar
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
