'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Toast from "@/app/component/Toast"

export default function TambahPengiriman ({mutate, url}){
    const [namaPengirim, setNamaPengirim] = useState('')
    const [noHpPengirim, setNoHpPengirim] = useState('')
    const [noKtpPengirim, setNoKtpPengirim] = useState('')
    const [noNpwpPengirim, setNoNpwpPengirim] = useState('')
    const [jenisBarang, setJenisBarang] = useState('')
    const [layanan, setLayanan] = useState('')
    const [alamatPengirim, setalAmatPengirim] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [alamatTujuan, setAlamatTujuan] = useState('')
    const [namaPenerima, setNamaPenerima] = useState('')
    const [noHpPenerima, setNoHpPenerima] = useState('')
    const [noKtpPenerima, setNoKtpPenerima] = useState('')
    const [shipingLine, setShipingLine] = useState('')
    const [namaKapal, setNamaKapal] = useState('')
    const [noContainer, setNoContainer] = useState('')
    const [noBl, setNoBl] = useState('')
    const [file, setFile] = useState('')
    const [filepdf, setFilepdf] = useState('')
    const [toastStatus, setToastStatus] = useState(false)
    const [toastMassage, setToastMessage] = useState('')
    const [isMutate, setIsMutate] = useState(false)
    const buttonRef = useRef()
    const router = useRouter()
    const fileInputRef = useRef('');
    const fileInputRefPdf = useRef('');

    async function handleSubmit(e) {
        setIsMutate(true)
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.set('file', file)
            formData.set('filepdf', filepdf)
            formData.append('namaPengirim', namaPengirim);
            formData.append('noHpPengirim', noHpPengirim);
            formData.append('noKtpPengirim', noKtpPengirim);
            formData.append('noNpwpPengirim', noNpwpPengirim);
            formData.append('jenisBarang', jenisBarang);
            formData.append('layanan', layanan);
            formData.append('alamatPengirim', alamatPengirim);
            formData.append('from', from);
            formData.append('to', to);
            formData.append('alamatTujuan', alamatTujuan);
            formData.append('namaPenerima', namaPenerima);
            formData.append('noHpPenerima', noHpPenerima);
            formData.append('noKtpPenerima', noKtpPenerima);
            formData.append('shipingLine', shipingLine);
            formData.append('namaKapal', namaKapal);
            formData.append('noContainer', noContainer);
            formData.append('noBl', noBl);

            const res = await fetch (`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/pengiriman`, {
                method : "POST", 
                body: formData,

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
        setNamaPengirim('')
        setNoHpPengirim('')
        setNoKtpPengirim('')
        setNoNpwpPengirim('')
        setJenisBarang('')
        setLayanan('')
        setalAmatPengirim('')
        setFrom('')
        setTo('')
        setAlamatTujuan('')
        setNamaPenerima('')
        setNoHpPenerima('')
        setNoKtpPenerima('')
        setShipingLine('')
        setNamaKapal('')
        setNoContainer('')
        setNoBl('')
        setFilepdf(null)
        setFile(null)
        fileInputRef.current.value = '';
        fileInputRefPdf.current.value = '';

          if (!res.ok) throw new Error(await res.text())
        } catch (e) {
          console.error(e)
        }
        mutate(url)
        setIsMutate(false)
        buttonRef.current.click();
        router.refresh()
    }


    return (
        <>
            {
                toastStatus && (<Toast message={toastMassage} />)
            }
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" data-hs-overlay="#modalpengiriman">
                Tambah Pengiriman
            </button>

            <div id="modalpengiriman" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Tambah Pengiriman
                            </h3>
                            <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#modalpengiriman">
                                <span className="sr-only">Close</span>
                                <FontAwesomeIcon 
                                    icon={faXmark}
                                    className="text-slate-400 text-lg"
                                />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}  >
                            <div className="p-4 overflow-y-auto">
                                <div className="grid gap-4 mb-4 md:grid-cols-2">
                                    <div>
                                        <label 
                                            htmlFor="namapengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="namapengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pengirim" 
                                            value={namaPengirim}
                                            onChange={(e)=>setNamaPengirim(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nohppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Hp Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="nohppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Pengirim" 
                                            value={noHpPengirim}
                                            onChange={(e)=>setNoHpPengirim(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noktppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No KTP Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="noktppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Ktp Pengirim" 
                                            value={noKtpPengirim}
                                            onChange={(e)=>setNoKtpPengirim(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nonpwppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NO NPWP Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="nonpwppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No NPWP Pengirim" 
                                            value={noNpwpPengirim}
                                            onChange={(e)=>setNoNpwpPengirim(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 md:grid-cols-3">
                                    <div>
                                        <label 
                                            htmlFor="jenisbarang" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Barang</label>
                                        <input 
                                            type="text" 
                                            id="jenisbarang" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Jenis Barang" 
                                            value={jenisBarang}
                                            onChange={(e)=>setJenisBarang(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="Layanan" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Layanan</label>
                                        <input 
                                            type="text" 
                                            id="Layanan" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Layanan" 
                                            value={layanan}
                                            onChange={(e)=>setLayanan(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatpengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="alamatpengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Alamat Pengirim" 
                                            value={alamatPengirim}
                                            onChange={(e)=>setalAmatPengirim(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="from" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                        <input 
                                            type="text" 
                                            id="from" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="From" 
                                            value={from}
                                            onChange={(e)=>setFrom(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="to" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                        <input 
                                            type="text" 
                                            id="to" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="To" 
                                            value={to}
                                            onChange={(e)=>setTo(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatTujuan" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Tujuan</label>
                                        <input 
                                            type="text" 
                                            id="alamatTujuan" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Alamat Tujuan  " 
                                            value={alamatTujuan}
                                            onChange={(e)=>setAlamatTujuan(e.target.value)}
                                            required />
                                    </div>

                                    <div>
                                        <label 
                                            htmlFor="namapenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Penerima</label>
                                        <input 
                                            type="text" 
                                            id="namapenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Penerima" 
                                            value={namaPenerima}
                                            onChange={(e)=>setNamaPenerima(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nohppenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Hp Penerima</label>
                                        <input 
                                            type="text" 
                                            id="nohppenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Penerima" 
                                            value={noHpPenerima}
                                            onChange={(e)=>setNoHpPenerima(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noKtpPenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No KTP Penerima</label>
                                        <input 
                                            type="text" 
                                            id="noKtpPenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No KTP Penerima" 
                                            value={noKtpPenerima}
                                            onChange={(e)=>setNoKtpPenerima(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 md:grid-cols-4">
                                    <div>
                                        <label 
                                            htmlFor="shippingline" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Line</label>
                                        <input 
                                            type="text" 
                                            id="shippingline" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Shipping Line" 
                                            value={shipingLine}
                                            onChange={(e)=>setShipingLine(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="namakapal" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Kapal</label>
                                        <input 
                                            type="text" 
                                            id="namakapal" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Kapal" 
                                            value={namaKapal}
                                            onChange={(e)=>setNamaKapal(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noContainer" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Container</label>
                                        <input 
                                            type="text" 
                                            id="noContainer" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Container" 
                                            value={noContainer}
                                            onChange={(e)=>setNoContainer(e.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nobl" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No BL</label>
                                        <input 
                                            type="text" 
                                            id="nobl" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No BL" 
                                            value={noBl}
                                            onChange={(e)=>setNoBl(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label 
                                            htmlFor="file" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Gambar</label>
                                        <input 
                                            ref={fileInputRef}
                                            type="file" 
                                            id="file" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No BL" 
                                            onChange={(e)=>setFile(e.target.files?.[0])}
                                                />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="filepdf" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Pdf</label>
                                        <input 
                                            ref={fileInputRefPdf}
                                            type="file" 
                                            id="filepdf" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="file" 
                                            onChange={(e)=>setFilepdf(e.target.files?.[0])}
                                                />
                                    </div>
                                </div>    
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                <button ref={buttonRef} type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#modalpengiriman">
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