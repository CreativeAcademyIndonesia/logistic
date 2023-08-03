import { faArrowUp, faArrowUpFromBracket, faBarsStaggered, faCalendarCheck, faCalendarDay, faChartSimple, faRepeat, faShip, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logovertical from "../../public/logovertical.png"
import Image from "next/image";
import { signOut } from "next-auth/react";

const Sidebar = () => {
    return (
        <div className="bg-white">
            <button data-hs-overlay="#hs-overlay-basic" aria-controls="hs-overlay-basic" aria-label="Toggle navigation" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon 
                icon={faBarsStaggered}
                className="text-slate-500 text-xl"
                />
            </button>

            <div id="hs-overlay-basic" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[51] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center px-6">
                    <div className="w-full">
                        <Image 
                            src={logovertical}
                            className="w-full"
                            alt="logo"
                            priority 
                        />
                    </div>
                </div>

                <nav className="p-6 w-full flex flex-col flex-wrap">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/dashboard" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faChartSimple}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/pengiriman" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faArrowUpFromBracket}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Pengiriman</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/penerimaan" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faArrowUpFromBracket}
                                    className="text-slate-400 text-xl rotate-180"
                                />
                                <span className="ml-3">Penerimaan</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/mitra" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faUser}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Kelola Mitra</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/armada" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faShip}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Kelola Armada</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/dashboard/status" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faCalendarCheck}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Update Status</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/dashboard/jadwal" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faCalendarDay}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Jadwal Kapal</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/simulasi" className="flex items-center p-2 text-slate-900 font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faRepeat}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Simulasi Pengiriman</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={()=>signOut()} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                            Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
