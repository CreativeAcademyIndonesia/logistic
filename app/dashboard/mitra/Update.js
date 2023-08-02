'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Toast from "@/app/component/Toast"

export default function Update ({currentData}){
    const [namaMitra, setNamaMitra] = useState(currentData.Nama_Mitra)
    const [alamatMitra, setAlamatMitra] = useState(currentData.Alamat_Mitra)
    const [pemilikOwner, setPemilikOwner] = useState(currentData.Pemilik_Owner)
    const [nPWPMitra, setNPWPMitra] = useState(currentData.NPWP_Mitra)
    const [contacPerson, setContacPerson] = useState(currentData.Contac_Person)
    const [jangkaWaktuKerjaSama, setJangkaWaktuKerjaSama] = useState(currentData.Jangka_Waktu_Kerja_Sama)
    const [isMutate, setIsMutate] = useState(false)
    const [toastStatus, setToastStatus] = useState(false)
    const [toastMassage, setToastMessage] = useState('')
    const buttonRef = useRef()
    const router = useRouter()

    async function handleSubmit(e) {
        setIsMutate(true)
       
        let data = {
            namaMitra, 
            alamatMitra, 
            pemilikOwner, 
            nPWPMitra, 
            contacPerson, 
            jangkaWaktuKerjaSama
        }

        e.preventDefault()
        const res = await fetch (`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/mitra/${currentData.Id}`, {
            method : "PATCH", 
            headers : {
                'Content-Type' : 'application/json'
            }, 
            body : JSON.stringify(data)
        })

        const response = await res.json()
        if(response.message == 'SUCCESS'){
            setToastMessage('Data Berhasil Diupdate')
            setToastStatus(true)
        }else{
            setToastMessage('Data Gagal Diupdate')
            setToastStatus(true)
        }

        setTimeout(()=>{
            setToastStatus(false)
        }, 4000)
        setIsMutate(false)
        
        buttonRef.current.click();
        router.refresh()
    }


    return (
        <>
            {
                toastStatus && (<Toast message={toastMassage} />)
            }
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-400 text-white hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"  data-hs-overlay={`#modalUpdate${currentData.Id}`}>
                <FontAwesomeIcon 
                    icon={faPen}
                />
            </button>


            <div id={`modalUpdate${currentData.Id}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Update Mitra
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalUpdate${currentData.Id}`}>
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
                                            htmlFor="namaMitra" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Nama Mitra</label>
                                        <input 
                                            type="text" 
                                            id="namaMitra" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pengirim" 
                                            value={namaMitra}
                                            onChange={(e)=>setNamaMitra(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatMitra" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Alamat Mitra</label>
                                        <input 
                                            type="text" 
                                            id="alamatMitra" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Pengirim" 
                                            value={alamatMitra}
                                            onChange={(e)=>setAlamatMitra(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="namaMitra" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Pemilik / Owner</label>
                                        <input 
                                            type="text" 
                                            id="pemilikOwner" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pengirim" 
                                            value={pemilikOwner}
                                            onChange={(e)=>setPemilikOwner(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nPWPMitra" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">NPWP Mitra</label>
                                        <input 
                                            type="text" 
                                            id="nPWPMitra" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Pengirim" 
                                            value={nPWPMitra}
                                            onChange={(e)=>setNPWPMitra(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="contacPerson" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Contact Person</label>
                                        <input 
                                            type="text" 
                                            id="contacPerson" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pengirim" 
                                            value={contacPerson}
                                            onChange={(e)=>setContacPerson(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="jangkaWaktuKerjaSama" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Jangka Waktu Kerjasama</label>
                                        <input 
                                            type="text" 
                                            id="jangkaWaktuKerjaSama" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Pengirim" 
                                            value={jangkaWaktuKerjaSama}
                                            onChange={(e)=>setJangkaWaktuKerjaSama(e.target.value)}
                                            required />
                                    </div>
                                    
                                </div>
                                    
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalUpdate${currentData.Id}`} ref={buttonRef}>
                                    Close
                                </button>
                                {
                                    isMutate ? (
                                        <button type="button" disabled className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                                        <FontAwesomeIcon 
                                            icon={faCircleNotch}
                                            className='animate-spin '
                                        />
                                        Updating
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