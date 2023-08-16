// import { getData } from "../lib/getdata"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"

async function getData(url){
  try{
    const res = await fetch(`${process.env.BASE_URL}${url}`, { cache : "no-store" })
    return res.json();
  }catch{
    const res = []
    return res 
  }
}

export default async function Home() {
  const data = await getData('/api/simulasi')

  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Simulasi Pengiriman"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Data Simulasi Pengiriman</span>
        <Tambah />
      </div>
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
                          Kota Asal
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Kota Tujuan
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Harga
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    data.map((d, index)=>(
                      <tr key={d['id']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index +1}
                          </th>
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {d['id']}
                          </th>
                          <td className="px-6 py-4">
                            {d['Kota_Asal']}
                          </td>
                          <td className="px-6 py-4">
                            {d['Kota_Tujuan']}
                          </td>
                          <td className="px-6 py-4">
                              Rp. {d['Harga']} ,-
                          </td>
                          
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <Delete sid={d['id']} />
                              <Update currentData={d} />
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
    </main>
  )
}

