'use client'
import { useState } from "react"
import useSWR, { useSWRConfig } from 'swr'
import Loading from "../loading"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import Detail from "./Detail"
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"
import Tracking from "./Tracking"
import moment from "moment"

export default function Home() {
  const fetcher = (url) => fetch(url).then(res => res.json())
  const [dateActive, setDateActive] = useState(moment(new Date()).format('YYYY-MM'))
  const [url, setUrl] = useState(`/api/penerimaan?date=${dateActive}`)
  const { data, error, isLoading } = useSWR(url, fetcher)
  const { mutate } = useSWRConfig()
  

  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Penerimaan Barang"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Data Penerimaan</span>
        <div className="flex gap-2">
          <Tambah mutate={mutate}  url={url}/>
          <input 
          type="month" 
          value={dateActive} 
          onChange={(e)=> {
            setDateActive(e.target.value)
            setUrl(`/api/penerimaan?date=${e.target.value}`)
            mutate(url)
          }} 
          className="py-3 px-4  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-slate-600"
          placeholder="input date"
          />
        </div>
      </div>

      {
        !isLoading ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            { data.length < 1 ? (
              <NoData />
            ) :(
              <div className="max-w-screen max-h-[70vh] overflow-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              No
                          </th>
                          <th scope="col" className="px-6 py-3">
                              ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Nama Pengirim
                          </th>
                          <th scope="col" className="px-6 py-3">
                              No Bl
                          </th>
                          <th scope="col" className="px-6 py-3">
                              No Container
                          </th>
                          <th scope="col" className="px-6 py-3">
                              From
                          </th>
                          <th scope="col" className="px-6 py-3">
                              To
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Nama Penerima
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Shiping Line
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Kapal
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Petugas Stripping
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Tanggal Stripping
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Keterangan
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((d, index)=>(
                        <tr key={d['ID_Penerimaan']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {index +1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d['ID_Penerimaan']}
                            </th>
                            <td className="px-6 py-4">
                              {d['Nama_Pengirim']}
                            </td>
                            <td className="px-6 py-4">
                              {d['No_Bl']}
                            </td>
                            <td className="px-6 py-4">
                              {d['No_Container']}
                            </td>
                            <td className="px-6 py-4">
                                {d['dari']}
                            </td>
                            <td className="px-6 py-4">
                                {d['ke']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Nama_Penerima']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Shipping_Line']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Nama_Kapal']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Petugas_Stripping']}
                            </td>
                            <td className="px-6 py-4">
                              {moment(d['Tgl_Stripping']).format('l')}
                            </td>
                            <td className="px-6 py-4">
                                {d['Keterangan']}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex gap-2">
                                <Delete  mutate={mutate}  url={url} sid={d['ID_Penerimaan']} />
                                <Update  mutate={mutate}  url={url} currentData={d} />
                                <Detail currentData={d} />
                                <Tracking sid={d['ID_Penerimaan']} />
                              </div>
                            </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
              </div>
          ) }
        </div>
        ) : (
          <Loading/>
        )
      }
    </main>
  )
}

