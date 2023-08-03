import { getData } from "../lib/getdata"
import { filterData } from "../lib/filterData"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import Detail from "./Detail"
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"
import moment from "moment/moment"

export default async function Table({data}) {
  console.log(data)
  // const data = await getData('/api/armada')
  // let month = new Date().getMonth() + 1;
  // let data = filterData(res, month)

  return (
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
                Nama Pemilik Truck
              </th>
              <th scope="col" className="px-6 py-3">
                Sopir Truck
              </th>
              <th scope="col" className="px-6 py-3">
                DG Truck
              </th>
              <th scope="col" className="px-6 py-3">
                Masa Berlaku STNK
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal PAS Masuk
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal PAS Akhir
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
                  {d['Nama_Pemilik_Truck']}
                </td>
                <td className="px-6 py-4">
                  {d['Sopir_Truck']}
                </td>
                <td className="px-6 py-4">
                  {d['DG_Truck']}
                </td>
                <td className="px-6 py-4">
                    {moment(d['Masa_Berlaku_STNK']).format('l')}
                </td>
                <td className="px-6 py-4">
                    {d['Status']}
                </td>
                <td className="px-6 py-4">
                    {moment(d['Tanggal_PAS_Masuk']).format('l')}
                </td>
                <td className="px-6 py-4">
                    {moment(d['Tanggal_PAS_Akhir']).format('l')}
                </td>
                
                <td className="px-6 py-4 text-right">
                  <div className="flex gap-2">
                    <Delete sid={d['Id']} />
                    <Update currentData={d}  />
                    <Detail currentData={d} />
                  </div>
                </td>
            </tr>
          ))
        }
      </tbody>
  </table>
  )
}

