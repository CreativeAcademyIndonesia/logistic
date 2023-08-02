'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Toast from "@/app/component/Toast"

export default function Tambah (){
    const [namaPemilikTruck, setNamaPemilikTruck] = useState('')
    const [sopirTruck, setSopirTruck] = useState('')
    const [dGTruck, setDGTruck] = useState('')
    const [noSTNK, setNoSTNK] = useState('')
    const [alamatSTNK, setAlamatSTNK] = useState('')
    const [noHPPemilikTruck, setNoHPPemilikTruck] = useState('')
    const [noHPSopirTruck, setNoHPSopirTruck] = useState('')
    const [masaBerlakuSTNK, setMasaBerlakuSTNK] = useState('')
    const [tanggalPASMasuk, setTanggalPASMasuk] = useState('')
    const [tanggalPASAkhir, setTanggalPASAkhir] = useState('')
    const [status, setStatus] = useState('')
    const [isMutate, setIsMutate] = useState(false)
    
    const [toastStatus, setToastStatus] = useState(false)
    const [toastMassage, setToastMessage] = useState('')
    const buttonRef = useRef()
    const router = useRouter()

    async function handleSubmit(e) {
        setIsMutate(true)

        let data = {
            namaPemilikTruck,
            sopirTruck,
            dGTruck,
            noSTNK,
            alamatSTNK,
            noHPPemilikTruck,
            noHPSopirTruck,
            masaBerlakuSTNK,
            tanggalPASMasuk,
            tanggalPASAkhir, 
            status
        }
        e.preventDefault()
        const res = await fetch (`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/armada`, {
            method : "POST", 
            headers : {
                'Content-Type' : 'application/json'
            }, 
            body : JSON.stringify(data)
        })

        const response = await res.json()
        if(response.message == 'SUCCESS'){
            setToastMessage('Data Berhasil Ditambahkan')
            setToastStatus(true)
        }else{
            setToastMessage('Data Gagal Ditambahkan')
            setToastStatus(true)
        }

        setTimeout(()=>{
            setToastStatus(false)
        }, 4000)
        setNamaPemilikTruck('')
        setSopirTruck('')
        setDGTruck('')
        setNoSTNK('')
        setAlamatSTNK('')
        setNoHPPemilikTruck('')
        setNoHPSopirTruck('')
        setMasaBerlakuSTNK('')
        setTanggalPASMasuk('')
        setTanggalPASAkhir('')
        setStatus('')

        setIsMutate(false)

        buttonRef.current.click();
        router.refresh()
    }


    return (
        <>
            {
                toastStatus && (<Toast message={toastMassage} />)
            }
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" data-hs-overlay="#modaladdarmada">
                Tambah Armada
            </button>

            <div id="modaladdarmada" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Tambah Armada
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#modaladdarmada">
                            <span className="sr-only">Close</span>
                            <FontAwesomeIcon 
                                icon={faXmark}
                                className="text-slate-400 text-lg"
                            />
                        </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-4 overflow-y-auto">
                                <div className="grid gap-4 mb-4 md:grid-cols-2">
                                    <div>
                                        <label 
                                            htmlFor="namaPemilikTruck" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pemilik Truck</label>
                                        <input 
                                            type="text" 
                                            id="namaPemilikTruck" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pemilik Truck" 
                                            value={namaPemilikTruck}
                                            onChange={(e) => setNamaPemilikTruck(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="sopirTruck" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sopir Truck</label>
                                        <input 
                                            type="text" 
                                            id="sopirTruck" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Sopir Truck" 
                                            value={sopirTruck}
                                            onChange={(e) => setSopirTruck(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="dGTruck" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DG Truck</label>
                                        <input 
                                            type="text" 
                                            id="dGTruck" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="DG Truck" 
                                            value={dGTruck}
                                            onChange={(e) => setDGTruck(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noSTNK" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No STNK</label>
                                        <input 
                                            type="text" 
                                            id="noSTNK" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No STNK" 
                                            value={noSTNK}
                                            onChange={(e) => setNoSTNK(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatSTNK" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat STNK</label>
                                        <input 
                                            type="text" 
                                            id="alamatSTNK" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Alamat STNK" 
                                            value={alamatSTNK}
                                            onChange={(e) => setAlamatSTNK(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noHPPemilikTruck" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No HP Pemilik Truck</label>
                                        <input 
                                            type="text" 
                                            id="noHPPemilikTruck" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No HP Pemilik Truck" 
                                            value={noHPPemilikTruck}
                                            onChange={(e) => setNoHPPemilikTruck(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noHPSopirTruck" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No HP Sopir Truck</label>
                                        <input 
                                            type="text" 
                                            id="noHPSopirTruck" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No HP Sopir Truck" 
                                            value={noHPSopirTruck}
                                            onChange={(e) => setNoHPSopirTruck(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="masaBerlakuSTNK" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masa Berlaku STNK</label>
                                        <input 
                                            type="date" 
                                            id="masaBerlakuSTNK" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Masa Berlaku STNK" 
                                            value={masaBerlakuSTNK}
                                            onChange={(e) => setMasaBerlakuSTNK(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="tanggalPASMasuk" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal PAS Masuk</label>
                                        <input 
                                            type="date" 
                                            id="tanggalPASMasuk" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Tanggal PAS Masuk" 
                                            value={tanggalPASMasuk}
                                            onChange={(e) => setTanggalPASMasuk(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="tanggalPASAkhir" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal PAS Akhir</label>
                                        <input 
                                            type="date" 
                                            id="tanggalPASAkhir" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Tanggal PAS Akhir" 
                                            value={tanggalPASAkhir}
                                            onChange={(e) => setTanggalPASAkhir(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="status" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                        <input 
                                            type="text" 
                                            id="status" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Status" 
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            required 
                                        />
                                    </div>
                                </div>
                                    
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                <button ref={buttonRef} type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#modaladdarmada">
                                    Close
                                </button>

                                {
                                    isMutate ? (
                                        <button type="button" disabled className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                                        <FontAwesomeIcon 
                                            icon={faCircleNotch}
                                            className='animate-spin '
                                        />
                                        Saving
                                        </button>
                                    ) : (
                                        <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                                        Save changes
                                        </button>
                                    )
                                }


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}