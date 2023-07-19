import Image from 'next/image'
import About from '../component/About'
import VisiMisi from '../component/VisiMisi'
import Footer from '../component/Footer'
import NilaiPerusahaan from '../component/NilaiPerusahaan'


export default function Home() {

  return (
    <main>
        <div className="overflow-x-hidden bg-gray-50 min-h-screen">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Jadwal Kapal</h1>
                    </div>
                    <div className='p-6 mt-16'>
                        <form>
                            <div className="grid grid-cols-4 md:grid-cols-10 gap-2">
                                <div className='col-span-2'>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Nama Kapal" required />
                                </div>
                                <div className='col-span-2'>
                                    <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow" placeholder="Nama Kapal" required />
                                </div>
                                <div className='col-span-2'>
                                    <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className='col-span-2'>
                                    <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grow'>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>

                                <div className='col-span-4 md:col-span-2'>
                                    <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 grow w-full"> Cari </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Kapal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Voyage
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tanggal Clossin
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
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        MERATUS AMPANA MKS-JKT
                                    </th>
                                    <td className="px-6 py-4">
                                        MS065S
                                    </td>
                                    <td className="px-6 py-4">
                                        25/07/2023 07:00:00
                                    </td>
                                    <td className="px-6 py-4">
                                        MKS - JKT
                                    </td>
                                    <td className="px-6 py-4">
                                        MKS-JKT
                                    </td>
                                    <td className="px-6 py-4">
                                        26 Jun '23
                                    </td>
                                    <td className="px-6 py-4">
                                        30 Jun '23
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        MERATUS AMPANA MKS-JKT
                                    </th>
                                    <td className="px-6 py-4">
                                        MS065S
                                    </td>
                                    <td className="px-6 py-4">
                                        25/07/2023 07:00:00
                                    </td>
                                    <td className="px-6 py-4">
                                        MKS - JKT
                                    </td>
                                    <td className="px-6 py-4">
                                        MKS-JKT
                                    </td>
                                    <td className="px-6 py-4">
                                        26 Jun '23
                                    </td>
                                    <td className="px-6 py-4">
                                        30 Jun '23
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    </main>
  )
}
