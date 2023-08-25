'use client'
import { useState } from "react"
// import useSWR, { useSWRConfig } from 'swr'
// import moment from "moment/moment"

import { LineChart } from "./chart/linechart";
import Mitradonut from "./chart/mitradout";
import { Yearlychart } from "./chart/yearlycart";
import Slider from "../component/Slider";
import LoadingData from "../component/LoadingData";

// async function getData(url){
//   try{
//     const res = await fetch(`${process.env.BASE_URL}${url}`, { cache : "no-store" })
//     return res.json();
//   }catch{
//     const res = []
//     return res 
//   }
// }


export default function Home() {
  // Yearly
  // const pengiriman = await getData(`/api/chart/recap?t=pengiriman&c=Tgl_Stuffing`)
  // const penerimaan = await getData(`/api/chart/recap?t=penerimaan&c=Tgl_Stripping`)
  // const armada = await getData(`/api/chart/recap?t=armada&c=tanggal`)
  
  // // Recap Pengiriman
  // const mitrapengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Shipping_Line&c=Tgl_Stuffing`)
  // const kapalpengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Nama_Kapal&c=Tgl_Stuffing`)
  // const namapengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Nama_Pengirim&c=Tgl_Stuffing`)

  // // Recap Penerimaan 
  // const mitrapenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Shipping_Line&c=Tgl_Stripping`)
  // const kapalpenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Nama_Kapal&c=Tgl_Stripping`)
  // const namapenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Nama_Penerima&c=Tgl_Stripping`)

  // const fetcher = (url) => fetch(url).then(res => res.json())
  // const [dateActive, setDateActive] = useState(moment(new Date()).format('YYYY-MM'))
  // const [url, setUrl] = useState(`/api/chart/recap?t=pengiriman&c=Tgl_Stuffing`)
  // const { data, error, isLoading } = useSWR(url, fetcher)
  
  // const { data: users, error: userError, isLoading : loadingUsers } = useSWR("/api/chart/recap?t=pengiriman&c=Tgl_Stuffing", fetcher);
  // const { data: kapalpengiriman, error: ballonError, isLoading : loadingBaloons } = useSWR("/api/chart/transaksi?t=pengiriman&count=Nama_Kapal&c=Tgl_Stuffing", fetcher);

  // if (loadingUsers || loadingBaloons) {
  //   return <LoadingData />
  // }
  const [isDate, setIsDate] = useState(new Date())

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setIsDate(selectedDate);
  }


  return (
    <main className="min-h-screen bg-white text-black">
      <div className='grid grid-cols-12 gap-4 mb-4'>
        <div className='col-span-12'>
          <div className="flex justify-end items-center">
            <span className="text-slate-600 mr-5">Filter : </span>
            <input 
            type="month" 
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={isDate.toISOString().substring(0, 7)} 
            onChange={handleDateChange} />
          </div>
        </div>
      
        <div className='col-span-12 '>
          <div className="border rounded-2xl overflow-hidden p-4">
            <Yearlychart years={isDate.getFullYear()}/>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <Mitradonut judul="Pengiriman" t="pengiriman" c="Tgl_Stuffing" count="Shipping_Line" years={isDate.getFullYear()} />
          </div>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <Mitradonut judul="Penerimaan" t="penerimaan" c="Tgl_Stripping" count="Shipping_Line" years={isDate.getFullYear()} />
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4 relative block">
            {/* <LineChart rawdata={mitrapengiriman} countby="Shipping_Line" headername="Transaksi Mitra (Pengiriman)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Shipping_Line"
              table="pengiriman"
              collumn="Tgl_Stuffing"
              headername={`Transaksi Mitra (Pengiriman) - `}
            />
          </div>
        </div>
        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4">
            {/* <LineChart rawdata={kapalpengiriman} countby="Nama_Kapal" headername="Analytics Nama Kapal (Pengiriman)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Nama_Kapal"
              table="pengiriman"
              collumn="Tgl_Stuffing"
              headername={`Analytics Nama Kapal (Pengiriman) - `}
            />
          </div>
        </div>
        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4">
            {/* <LineChart rawdata={namapengiriman} countby="Nama_Pengirim" headername="Analytics Nama Pengirim (Pengiriman)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Nama_Pengirim"
              table="pengiriman"
              collumn="Tgl_Stuffing"
              headername={`Analytics Nama Pengirim (Pengiriman) - `}
            />
          </div>
        </div>

        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4">
            {/* <LineChart rawdata={mitrapenerimaan} countby="Shipping_Line" headername="Transaksi Mitra (Penerimaan)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Shipping_Line"
              table="penerimaan"
              collumn="Tgl_Stripping"
              headername={`Transaksi Mitra (Penerimaan) - `}
            />
          </div>
        </div>
        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4">
            {/* <LineChart rawdata={kapalpenerimaan} countby="Nama_Kapal" headername="Analytics Nama Kapal (Penerimaan)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Nama_Kapal"
              table="penerimaan"
              collumn="Tgl_Stripping"
              headername={`Analytics Nama Kapal (Penerimaan) - `}
            />
          </div>
        </div>
        <div className='w-full md:w-[48%]'>
          <div className="border rounded-2xl overflow-hidden p-4">
            {/* <LineChart rawdata={namapenerimaan} countby="Nama_Penerima" headername="Analytics Nama Penerima (Penerimaan)"/> */}
            <Slider
             years={isDate.getFullYear()}
              countby="Nama_Penerima"
              table="penerimaan"
              collumn="Tgl_Stripping"
              headername={`Analytics Nama Penerima (Penerimaan) - `}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
