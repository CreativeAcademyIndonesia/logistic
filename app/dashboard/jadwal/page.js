// import { getData } from "../lib/getdata"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"
import moment from "moment/moment"

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
  const data = await getData('/api/jadwal')

  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Jadwal Kapal"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Jadwal Kapal</span>
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
                        {/* <th scope="col" className="px-6 py-3">
                            ID
                        </th> */}
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
                          Date RangeETD
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date RangeETA
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
                          {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {d['Id']}
                          </th> */}
                          <td className="px-6 py-4">
                            {d['Nama_Kapal']}
                          </td>
                          <td className="px-6 py-4">
                            {d['No_Voyage']}
                          </td>
                          <td className="px-6 py-4">
                            {moment(d['Tanggal_Clossing']).format('l')}
                          </td>
                          <td className="px-6 py-4">
                            {d['Rute_dan_Tujuan']}
                          </td>
                          <td className="px-6 py-4">
                              {d['Rute_Panjang']}
                          </td>
                          <td className="px-6 py-4">
                            {moment(d['Date_RangeETD']).format('l')}
                          </td>
                          <td className="px-6 py-4">
                            {moment(d['Date_RangeETA']).format('l')}
                          </td>
                          
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <Delete sid={d['Id']} />
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

