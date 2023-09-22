'use client'
import { useState } from "react"
import useSWR, { useSWRConfig } from 'swr'
import Loading from "../../../../loading"
// import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
// import Detail from "./Detail"
import NoData from "@/app/component/NoData"
import moment from "moment/moment"

export default function Page({params}) {
  const fetcher = (url) => fetch(url).then(res => res.json())
  const [url, setUrl] = useState(`/api/trackpenerimaan/${params.status}`)
  const { data, error, isLoading } = useSWR(url, fetcher)

  const { mutate } = useSWRConfig()

  return (
    <main className="min-h-screen bg-white relative ">
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Status Pengiriman {params.status}</span>

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
                            Tanggal
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Deskripsi
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((d, index)=>(
                        <tr key= {d['id']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">
                                {moment(d['tanggal']).format('l')}
                            </td>
                            <td className="px-6 py-4">
                              {d['status']}
                            </td>
                            <td className="px-6 py-4">
                                {d['deskripsi']}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-1">
                                    <Delete mutate={mutate}  url={url} sid={d['id']} />
                                    <Update mutate={mutate}  url={url} currentData={d} />
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

