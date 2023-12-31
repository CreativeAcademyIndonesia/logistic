'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faCircleInfo, faInfo, faPen, faXmark, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import moment from "moment/moment"
import useSWR, { useSWRConfig } from 'swr'

export default function Detail ({currentData}){

    const fetcher = (url) => fetch(url).then(res => res.json())
    let base64data = ''
    if(currentData.Image != '') {
        const { data, error, isLoading } = useSWR(`/api/storage?name=${currentData.Image}`, fetcher, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
          })
        if(data){
            let buff = new Buffer(data);
            base64data = buff.toString('base64');
        }
    }
    
    return (
        <>
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"  data-hs-overlay={`#modalInfo${currentData.ID_Penerimaan}`}>
                <FontAwesomeIcon 
                    icon={faInfo}
                />
            </button>

            <div id={`modalInfo${currentData.ID_Penerimaan}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Informasi Penerimaan
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalInfo${currentData.ID_Penerimaan}`}>
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
                                    <span className="text-start font-normal text-slate-600">Alamat Pengirim</span>
                                    <span className="text-end">{currentData.Alamat_Pengirim}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Alamat Tujuan</span>
                                    <span className="text-end">{currentData.Alamat_Tujuan}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">ID Penerimaan</span>
                                    <span className="text-end">{currentData.ID_Penerimaan}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Jenis Barang</span>
                                    <span className="text-end">{currentData.Jenis_Barang}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Layanan</span>
                                    <span className="text-end">{currentData.Layanan}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Nama Kapal</span>
                                    <span className="text-end">{currentData.Nama_Kapal}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Nama Penerima</span>
                                    <span className="text-end">{currentData.Nama_Penerima}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Nama Pengirim</span>
                                    <span className="text-end">{currentData.Nama_Pengirim}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Bl</span>
                                    <span className="text-end">{currentData.No_Bl}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Container</span>
                                    <span className="text-end">{currentData.No_Container}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No_Hp Penerima</span>
                                    <span className="text-end">{currentData.No_Hp_Penerima}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Hp Pengirim</span>
                                    <span className="text-end">{currentData.No_Hp_Pengirim}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Ktp Penerima</span>
                                    <span className="text-end">{currentData.No_Ktp_Penerima}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Ktp Pengirim</span>
                                    <span className="text-end">{currentData.No_Ktp_Pengirim}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">No Npwp Pengirim</span>
                                    <span className="text-end">{currentData.No_Npwp_Pengirim}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Shipping Line</span>
                                    <span className="text-end">{currentData.Shipping_Line}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">From</span>
                                    <span className="text-end">{currentData.dari}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">To</span>
                                    <span className="text-end">{currentData.ke}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Petugas Stripping</span>
                                    <span className="text-end">{currentData.Petugas_Stripping}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Keterangan</span>
                                    <span className="text-end">{currentData.Keterangan}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Tanggal Stripping</span>
                                    <span className="text-end">{moment(currentData.Tgl_Stripping).format('l')}</span>
                                </li>
                                <li className=" flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <span className="text-start font-normal text-slate-600">Tanggal dibuat</span>
                                    <span className="text-end">{moment(currentData.tanggal).format('l')}</span>
                                </li>
                                <li className='flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white'>

                                {
                                    currentData.Pdf == '' ? (
                                        <p className='text-slate-400'>Tidak ada file Pdf</p>
                                    ) : (
                                        <a 
                                        href={`/api/storage/pdf?name=${currentData.Pdf}`} 
                                        className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem]  rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800 w-full"
                                        alt="alt text"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            Download Pdf 
                                            <FontAwesomeIcon 
                                                icon={faFilePdf}
                                                className='text-2xl ml-2'
                                            />
                                        </a>
                                    )
                                }
                                </li>
                                <li className='flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white'>
                                {
                                    currentData.Image == '' ? (
                                        <p className='text-slate-400'>Tidak ada file gambar</p>
                                    ) : (
                                        <Image 
                                            src={`data:image/jpg;base64,${base64data}`} className='w-full'
                                            alt="My Image" width={300} height={200}/>
                                    )
                                }
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}