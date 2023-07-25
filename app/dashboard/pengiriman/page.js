import { getData } from "../lib/getdata"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import Detail from "./Detail"
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"
import Tracking from "./Tracking"

export default async function Home() {
  const data = await getData('/api/pengiriman')

  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Pengiriman"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Data Pengiriman</span>
        <Tambah />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        { data.length < 1 ? (
          <NoData />
        ) :(
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          No
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
                        Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  data.map((d)=>(
                    <tr key= {d['ID_Pengiriman']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {d['ID_Pengiriman']}
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
                        <td className="px-6 py-4 text-right">
                          <div className="flex gap-2">
                            <Delete sid={d['ID_Pengiriman']} />
                            <Update currentData={d} />
                            <Detail currentData={d} />
                            <Tracking sid={d['ID_Pengiriman']} />
                          </div>
                        </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
        ) }
      </div>
    </main>
  )
}

