import { faArrowUp, faArrowUpFromBracket, faBarsStaggered, faCalendarCheck, faCalendarDay, faChartSimple, faRepeat, faShip, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="bg-white">
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon 
                icon={faBarsStaggered}
                className="text-slate-500 text-xl"
                />
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 pt-28">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faChartSimple}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pengiriman" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faArrowUpFromBracket}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Pengiriman</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/penerimaan" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faArrowUpFromBracket}
                                    className="text-slate-400 text-xl rotate-180"
                                />
                                <span className="ml-3">Penerimaan</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/mitra" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faUser}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Kelola Mitra</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/armada" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faShip}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Kelola Armada</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/status" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faCalendarCheck}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Update Status</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/status" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faCalendarDay}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Jadwal Kapal</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/status" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon 
                                    icon={faRepeat}
                                    className="text-slate-400 text-xl"
                                />
                                <span className="ml-3">Simulasi Pengiriman</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>            
        </div>
    );
}

export default Sidebar;
