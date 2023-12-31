'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Toast from "@/app/component/Toast"
import moment from "moment";

export default function Update ({currentData, mutate, url}){
    const [namaPengirim, setNamaPengirim] = useState(currentData.Nama_Pengirim)
    const [noHpPengirim, setNoHpPengirim] = useState(currentData.No_Hp_Pengirim)
    const [noKtpPengirim, setNoKtpPengirim] = useState(currentData.No_Ktp_Pengirim)
    const [noNpwpPengirim, setNoNpwpPengirim] = useState(currentData.No_Npwp_Pengirim)
    const [jenisBarang, setJenisBarang] = useState(currentData.Jenis_Barang)
    const [layanan, setLayanan] = useState(currentData.Layanan)
    const [alamatPengirim, setalAmatPengirim] = useState(currentData.Alamat_Pengirim)
    const [from, setFrom] = useState(currentData.dari)
    const [to, setTo] = useState(currentData.ke)
    const [alamatTujuan, setAlamatTujuan] = useState(currentData.Alamat_Tujuan)
    const [namaPenerima, setNamaPenerima] = useState(currentData.Nama_Penerima)
    const [noHpPenerima, setNoHpPenerima] = useState(currentData.No_Hp_Penerima)
    const [noKtpPenerima, setNoKtpPenerima] = useState(currentData.No_Ktp_Penerima)
    const [shipingLine, setShipingLine] = useState(currentData.Shipping_Line)
    const [namaKapal, setNamaKapal] = useState(currentData.Nama_Kapal)
    const [noContainer, setNoContainer] = useState(currentData.No_Container)
    const [noBl, setNoBl] = useState(currentData.No_Bl)
    const [tglStripping, setTglStripping] = useState(moment(currentData.Tgl_Stripping ).format('YYYY-MM-DD'))
    const [petugasStripping, setPetugasStripping] = useState(currentData.Petugas_Stripping || '')
    const [keterangan, setKeterangan] = useState(currentData.Keterangan || '')
    const [file, setFile] = useState(null)
    const [filepdf, setFilepdf] = useState(null)
    const [oldfile, setOldFile] = useState(currentData.Image)
    const [oldfilepdf, setOldFilepdf] = useState(currentData.Pdf)
    const [toastStatus, setToastStatus] = useState(false)
    const [toastMassage, setToastMessage] = useState('')
    const [isMutate, setIsMutate] = useState(false)
    const buttonRef = useRef()
    const router = useRouter()
    async function handleSubmit(e) {
        setIsMutate(true)
        e.preventDefault()
        let data = {
            namaPengirim,
            noHpPengirim,
            noKtpPengirim,
            noNpwpPengirim,
            jenisBarang,
            layanan,
            alamatPengirim,
            from,
            to,
            alamatTujuan,
            namaPenerima,
            noHpPenerima,
            noKtpPenerima,
            shipingLine,
            namaKapal,
            noContainer,
            noBl, 
            tglStripping,
            keterangan,
            petugasStripping,
            oldfilepdf, 
            oldfile
        }
        
        
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        formData.append('file', file);
        formData.append('filepdf', filepdf);
        try{
            const res = await fetch (`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/penerimaan/${currentData.ID_Penerimaan}`, {
                method : "PATCH", 
                body : formData
            }) 
            const response = await res.json()
            if(response.message == 'SUCCESS'){
                setToastMessage('Data Berhasil Diupdate')
                setToastStatus(true)
            }else{
                setToastMessage('Data Gagal Diupdate')
                setToastStatus(true)
            }
        }catch (e) {
            console.error(e)
        }

        setTimeout(()=>{
            setToastStatus(false)
        }, 4000)

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
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-400 text-white hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"  data-hs-overlay={`#modalUpdate${currentData.ID_Penerimaan}`}>
                <FontAwesomeIcon 
                    icon={faPen}
                />
            </button>


            <div id={`modalUpdate${currentData.ID_Penerimaan}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                            Update Pengiriman
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalUpdate${currentData.ID_Penerimaan}`}>
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
                                            htmlFor="namapengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Nama Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="namapengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Pengirim" 
                                            value={namaPengirim}
                                            onChange={(e)=>setNamaPengirim(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nohppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No Hp Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="nohppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Pengirim" 
                                            value={noHpPengirim}
                                            onChange={(e)=>setNoHpPengirim(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noktppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No KTP Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="noktppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Ktp Pengirim" 
                                            value={noKtpPengirim}
                                            onChange={(e)=>setNoKtpPengirim(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nonpwppengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">NO NPWP Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="nonpwppengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No NPWP Pengirim" 
                                            value={noNpwpPengirim}
                                            onChange={(e)=>setNoNpwpPengirim(e.target.value)}
                                            />
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 md:grid-cols-3">
                                    <div>
                                        <label 
                                            htmlFor="jenisbarang" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Jenis Barang</label>
                                        <input 
                                            type="text" 
                                            id="jenisbarang" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Jenis Barang" 
                                            value={jenisBarang}
                                            onChange={(e)=>setJenisBarang(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="Layanan" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Layanan</label>
                                        <input 
                                            type="text" 
                                            id="Layanan" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Layanan" 
                                            value={layanan}
                                            onChange={(e)=>setLayanan(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatpengirim" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Alamat Pengirim</label>
                                        <input 
                                            type="text" 
                                            id="alamatpengirim" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Alamat Pengirim" 
                                            value={alamatPengirim}
                                            onChange={(e)=>setalAmatPengirim(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="from" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">From</label>
                                        <input 
                                            type="text" 
                                            id="from" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="From" 
                                            value={from}
                                            onChange={(e)=>setFrom(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="to" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">To</label>
                                        <input 
                                            type="text" 
                                            id="to" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="To" 
                                            value={to}
                                            onChange={(e)=>setTo(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="alamatTujuan" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Alamat Tujuan</label>
                                        <input 
                                            type="text" 
                                            id="alamatTujuan" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Alamat Tujuan  " 
                                            value={alamatTujuan}
                                            onChange={(e)=>setAlamatTujuan(e.target.value)}
                                            />
                                    </div>

                                    <div>
                                        <label 
                                            htmlFor="namapenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Nama Penerima</label>
                                        <input 
                                            type="text" 
                                            id="namapenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Penerima" 
                                            value={namaPenerima}
                                            onChange={(e)=>setNamaPenerima(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nohppenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No Hp Penerima</label>
                                        <input 
                                            type="text" 
                                            id="nohppenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Hp Penerima" 
                                            value={noHpPenerima}
                                            onChange={(e)=>setNoHpPenerima(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noKtpPenerima" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No KTP Penerima</label>
                                        <input 
                                            type="text" 
                                            id="noKtpPenerima" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No KTP Penerima" 
                                            value={noKtpPenerima}
                                            onChange={(e)=>setNoKtpPenerima(e.target.value)}
                                            />
                                    </div>
                                </div>
                                <div className="grid gap-4 mb-4 md:grid-cols-4">
                                    <div>
                                        <label 
                                            htmlFor="shippingline" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Shipping Line</label>
                                        <input 
                                            type="text" 
                                            id="shippingline" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Shipping Line" 
                                            value={shipingLine}
                                            onChange={(e)=>setShipingLine(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="namakapal" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Nama Kapal</label>
                                        <input 
                                            type="text" 
                                            id="namakapal" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Nama Kapal" 
                                            value={namaKapal}
                                            onChange={(e)=>setNamaKapal(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="noContainer" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No Container</label>
                                        <input 
                                            type="text" 
                                            id="noContainer" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No Container" 
                                            value={noContainer}
                                            onChange={(e)=>setNoContainer(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="nobl" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">No BL</label>
                                        <input 
                                            type="text" 
                                            id="nobl" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="No BL" 
                                            value={noBl}
                                            onChange={(e)=>setNoBl(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="tglStripping" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Tanggal Stripping</label>
                                        <input 
                                            type="date" 
                                            id="tglStripping" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Tanggal Stripping" 
                                            value={tglStripping}
                                            onChange={(e)=>setTglStripping(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="petugasStripping" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Petugas Stripping</label>
                                        <input 
                                            type="text" 
                                            id="petugasStripping" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Petugas Stripping" 
                                            value={petugasStripping}
                                            onChange={(e)=>setPetugasStripping(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="keterangan" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Keterangan</label>
                                        <input 
                                            type="text" 
                                            id="keterangan" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Keterangan" 
                                            value={keterangan}
                                            onChange={(e)=>setKeterangan(e.target.value)}
                                            />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label 
                                            htmlFor="file" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">File Gambar</label>
                                        <input 
                                            accept="image/*"
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
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">File Pdf</label>
                                        <input 
                                            accept="application/pdf"
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
                                <button ref={buttonRef} type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay={`#modalUpdate${currentData.ID_Penerimaan}`}>
                                    Close
                                </button>
                                {
                                    isMutate ? (
                                        <button type="button" disabled className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-400 text-white hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                        <FontAwesomeIcon 
                                        icon={faCircleNotch}
                                        className='animate-spin '
                                        />
                                        Updating
                                    </button>
                                    ):(
                                        <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-400 text-white hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
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