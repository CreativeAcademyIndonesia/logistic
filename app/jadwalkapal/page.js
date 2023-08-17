'use client'

import { faCircleNotch, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import Link from "next/link";
import whatsapp from '../../public/whatsapp.svg'
import Image from "next/image";

export default function Home() {

    const [kotaAsal, setKotaAsal] = useState([])
    const [kotaTujuan, setKotaTujuan] = useState([])
    const [jadwalKapal, setJadwalKapal] = useState([])
    const [namaKapal, setNamaKapal] = useState('')
    const [tanggalETD, setTanggalETD] = useState('')
    const [ruteTujuan, setRuteTujuan] = useState('')
    const [rutePanjang, setRutePanjang] = useState('')
    const [isMutate, setIsMutate] = useState(false)
    const [load, setLoad] = useState(true) 
    
    const fetchData = async () => {
        setLoad(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/active`)
            const jsonData = await response.json()
            setJadwalKapal(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const fetchitem = async (target) => {
        setLoad(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/item/${target}`)
            const jsonData = await response.json()
            target == 'Rute_dan_Tujuan' ?  setKotaAsal(jsonData) : setKotaTujuan(jsonData) 
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    };

    const handleShareClick = () => {
        const textToShare = encodeURIComponent('The text to share!');
        let textShare = `*Jadwal Kapal PT. Hasfi Prima Logistik*  %0a %0a`
        jadwalKapal.map((jadwal)=>{
            textShare += `*${jadwal.Nama_Kapal}*%0a NO Voyage: ${jadwal.No_Voyage}%0a Rute Tujuan: ${jadwal.Rute_dan_Tujuan}%0a Rute Panjang: ${jadwal.Rute_Panjang}%0a Closing: ${moment(jadwal.Tanggal_Clossing).format('l')}%0a ETD: ${moment(jadwal.Date_RangeETD).format('l')}%0a ETA: ${moment(jadwal.Date_RangeETA).format('l')}%0a%0a`
    })
        textShare += `PT. Hasfi Prima Logistik%0a https://hasfiprimalogistik.com %0a`
        encodeURIComponent(textShare)
        const whatsappUrl = `https://api.whatsapp.com/send?text=${textShare}`;
        window.location.href = whatsappUrl; 
    };

    useEffect(() => {
        fetchData()
        fetchitem('Rute_dan_Tujuan')
        fetchitem('Rute_Panjang')
        setLoad(false)
    }, []);

    async function handleSubmit(e){
        setIsMutate(true)
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/cek?namaKapal=${namaKapal}&tanggalETD=${tanggalETD}&ruteTujuan=${ruteTujuan}&rutePanjang=${rutePanjang}`)
            const jsonData = await response.json()
            setJadwalKapal(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
        setIsMutate(false)
        
    }

  return (
    <main className="pt-16">
        <div className="overflow-x-hidden bg-gray-50 min-h-screen">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-blue-primary sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Jadwal Kapal</h1>
                    </div>
                    <div className='p-6 mt-16'>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-4 md:grid-cols-10 gap-2">
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Nama Kapal</label>
                                    <input onChange={(e)=>setNamaKapal(e.target.value)} value={namaKapal} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Nama Kapal" required />
                                </div>
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Tanggal ETD</label>
                                    <input onChange={(e)=>setTanggalETD(e.target.value)} value={tanggalETD} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Tanggal ETD"  />
                                </div>
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Rute dan Tujuan</label>
                                    <select value={ruteTujuan} onChange={(e)=>setRuteTujuan(e.target.value)} name="kotaasal" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                        <option value="">Pilih Rute dan Tujuan</option>
                                        {
                                            kotaAsal.map((target, index)=>(
                                                <option key={index} value={target.Rute_dan_Tujuan}>{target.Rute_dan_Tujuan}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Rute Panjang</label>
                                    <select value={rutePanjang} onChange={(e)=>setRutePanjang(e.target.value)} name="kotatujaun"className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                        <option value="">Pilih Rute Panjang</option>
                                        {
                                            kotaTujuan.map((target, index)=>(
                                                <option key={index} value={target.Rute_Panjang}>{target.Rute_Panjang}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='col-span-4 md:col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-white">_</label>
                                    {
                                        isMutate ? (
                                            <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 grow w-full">
                                            <FontAwesomeIcon 
                                            icon={faCircleNotch}
                                            className='animate-spin '
                                            /> Mencari ..
                                            </button>
                                        ) :(
                                            <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 grow w-full">Cari</button>
                                        )
                                    }

                                    
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        NO
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Kapal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Voyage
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tanggal Clossing
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rute dan Tujuan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rute Panjang
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ETD
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ETA
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {jadwalKapal.map((jadwal, index)=>(
                                    <tr key={jadwal.Id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index +1 }
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {jadwal.Nama_Kapal}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {jadwal.No_Voyage}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {moment(jadwal['Tanggal_Clossing']).format('l')}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {jadwal.Rute_dan_Tujuan}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {jadwal.Rute_Panjang}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {moment(jadwal['Date_RangeETD']).format('l')}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {moment(jadwal['Date_RangeETA']).format('l')}
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {
                            load && (
                                <p className="text-slate-600 py-10 text-base md:text-lg font-medium text-center">Mencari Data</p>
                            ) 
                        }
                    </div>
                    <div className="p-4 ms-auto flex justify-end gap-2 items-center">
                        <span className="text-slate-400 text-xl font-medium">Share </span>
                        <div>
                            <button type="button" className="rounded-full flex justify-center items-center w-10 h-10 text-xl p-2 text-green-400 bg-green-100" onClick={handleShareClick}>
                                <Image
                                    src={whatsapp}
                                    width='20'
                                    height='20'
                                    alt="hasfiprimalogistik"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
