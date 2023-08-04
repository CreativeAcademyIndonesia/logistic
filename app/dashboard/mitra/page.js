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
import moment from "moment/moment"

export default function Home() {

  const fetcher = (url) => fetch(url).then(res => res.json())
  const [dateActive, setDateActive] = useState(moment(new Date()).format('YYYY-MM'))
  const [url, setUrl] = useState(`/api/mitra?date=${dateActive}`)
  const { data, error, isLoading } = useSWR(url, fetcher)
  const { mutate } = useSWRConfig()
  

  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Mitra"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Data Mitra</span>
        <div className="flex gap-2">
          <Tambah mutate={mutate}  url={url}/>
          <input 
          type="month" 
          value={dateActive} 
          onChange={(e)=> {
            setDateActive(e.target.value)
            setUrl(`/api/mitra?date=${e.target.value}`)
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
                              Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Nama Mitra
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Alamat Mitra
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Pemilik Owner
                          </th>
                          <th scope="col" className="px-6 py-3">
                            NPWP Mitra
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Contac Person
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Jangka Waktu Kerja Sama
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((d, index)=>(
                        <tr key={d['Id']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {index +1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d['Id']}
                            </th>
                            <td className="px-6 py-4">
                              {d['Nama_Mitra']}
                            </td>
                            <td className="px-6 py-4">
                              {d['Alamat_Mitra']}
                            </td>
                            <td className="px-6 py-4">
                              {d['Pemilik_Owner']}
                            </td>
                            <td className="px-6 py-4">
                                {d['NPWP_Mitra']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Contac_Person']}
                            </td>
                            <td className="px-6 py-4">
                                {d['Jangka_Waktu_Kerja_Sama']}
                            </td>
                            
                            <td className="px-6 py-4 text-right">
                              <div className="flex gap-2">
                                <Delete mutate={mutate} url={url} sid={d['Id']} />
                                <Update mutate={mutate} url={url} currentData={d}  />
                                <Detail currentData={d} />
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

