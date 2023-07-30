'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faInfo, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import moment from "moment/moment"

export default function Detail ({currentData}){
    return (
        <>
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"  data-hs-overlay={`#modalInfo${currentData.Id}`}>
                <FontAwesomeIcon 
                    icon={faInfo}
                />
            </button>

            <div id={`modalInfo${currentData.Id}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Informasi Armada
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalInfo${currentData.Id}`}>
                            <span className="sr-only">Close</span>
                            <FontAwesomeIcon 
                                icon={faXmark}
                                className="text-slate-400 text-lg"
                            />
                        </button>
                        </div>

                        <div className="p-4">
                            <ul className="flex flex-col ">
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">ID</span>
                                    <span className="text-end">{currentData.Id}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Alamat STNK</span>
                                    <span className="text-end">{currentData.Alamat_STNK}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">DG Truck</span>
                                    <span className="text-end">{currentData.DG_Truck}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Masa Berlaku STNK</span>
                                    <span className="text-end">{moment(currentData.Masa_Berlaku_STNK).format('l')}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Nama Pemilik Truck</span>
                                    <span className="text-end">{currentData.Nama_Pemilik_Truck}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No HP Pemilik Truck</span>
                                    <span className="text-end">{currentData.No_HP_Pemilik_Truck}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No HP Sopir Truck</span>
                                    <span className="text-end">{currentData.No_HP_Sopir_Truck}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No STNK</span>
                                    <span className="text-end">{currentData.No_STNK}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Sopir Truck</span>
                                    <span className="text-end">{currentData.Sopir_Truck}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Status</span>
                                    <span className="text-end">{currentData.Status}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Tanggal PAS Akhir</span>
                                    <span className="text-end">{moment(currentData.Tanggal_PAS_Akhir).format('l')}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Tanggal PAS Masuk</span>
                                    <span className="text-end">{moment(currentData.Tanggal_PAS_Masuk).format('l')}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Dibuat pada </span>
                                    <span className="text-end">{moment(currentData.tanggal).format('l')}</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}