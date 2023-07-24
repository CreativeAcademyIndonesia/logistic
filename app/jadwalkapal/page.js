'use client'

import { useState, useEffect } from "react";

export default function Home() {

    const [kotaAsal, setKotaAsal] = useState([])
    const [kotaTujuan, setKotaTujuan] = useState([])
    const [jadwalKapal, setJadwalKapal] = useState([])
    const [namaKapal, setNamaKapal] = useState('')
    const [tanggalETD, setTanggalETD] = useState('')
    const [ruteTujuan, setRuteTujuan] = useState('')
    const [rutePanjang, setRutePanjang] = useState('')
    
    const fetchData = async () => {
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal`)
            const jsonData = await response.json()
            setJadwalKapal(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const fetchitem = async (target) => {
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/item/${target}`)
            const jsonData = await response.json()
            target == 'Rute_dan_Tujuan' ?  setKotaAsal(jsonData) : setKotaTujuan(jsonData) 
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    };
    useEffect(() => {
        fetchData()
        fetchitem('Rute_dan_Tujuan')
        fetchitem('Rute_Panjang')
    }, []);

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/cek?namaKapal=${namaKapal}&tanggalETD=${tanggalETD}&ruteTujuan=${ruteTujuan}&rutePanjang=${rutePanjang}`)
            console.log(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/jadwal/cek?namaKapal=${namaKapal}&tanggalETD=${tanggalETD}&ruteTujuan=${ruteTujuan}&rutePanjang=${rutePanjang}`)   
            const jsonData = await response.json()
            setJadwalKapal(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
        
    }

  return (
    <main className="pt-16">
        <div className="overflow-x-hidden bg-gray-50 min-h-screen">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Jadwal Kapal</h1>
                    </div>
                    <div className='p-6 mt-16'>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-4 md:grid-cols-10 gap-2">
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Kapal</label>
                                    <input onChange={(e)=>setNamaKapal(e.target.value)} value={namaKapal} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Nama Kapal" required />
                                </div>
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal ETD</label>
                                    <input onChange={(e)=>setTanggalETD(e.target.value)} value={tanggalETD} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Tanggal ETD" required />
                                </div>
                                <div className='col-span-2'>
                                    <label  
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rute dan Tujuan</label>
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
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rute Panjang</label>
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
                                    <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 grow w-full">Cari</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
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
                                {jadwalKapal.map((jadwal)=>(
                                    <tr key={jadwal.Id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {jadwal.Id}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {jadwal.Nama_Kapal}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {jadwal.No_Voyage}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {new Date(jadwal['Tanggal_Clossing']).toISOString().split('T')[0]}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {jadwal.Rute_dan_Tujuan}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {jadwal.Rute_Panjang}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {new Date(jadwal['Date_RangeETD']).toISOString().split('T')[0]}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {new Date(jadwal['Date_RangeETA']).toISOString().split('T')[0]}
                                            </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    </main>
  )
}
