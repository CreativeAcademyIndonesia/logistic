'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faCircleNotch, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
// import { getData } from "../dashboard/lib/getdata"
import { useState, useEffect } from 'react';


export default function SimulasiHarga(){
    const [kotaAsal, setKotaAsal] = useState([])
    const [kotaTujuan, setKotaTujuan] = useState([])
    const [dataAsal, setDataAsal] = useState('')
    const [dataTujuan, setDataTujuan] = useState('')
    const [isMutate, setIsMutate] = useState(false)

    const [results, setResults] = useState([])
    const [pesan, setPesan] = useState(false)

    const fetchData = async (target) => {
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/simulasi/item/${target}`)
            const jsonData = await response.json()
            target == 'Kota_Asal' ?  setKotaAsal(jsonData) : setKotaTujuan(jsonData) 
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    };

    async function handleSubmit(e){
        e.preventDefault()
        setIsMutate(true)
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/simulasi/cek?asal=${dataAsal}&tujuan=${dataTujuan}`)
            const jsonData = await response.json()
            setResults(jsonData)
            jsonData.length < 1 ? setPesan(true) :setPesan(false)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
        setIsMutate(false)
        
    }

    useEffect(() => {
        fetchData('Kota_Asal');
        fetchData('Kota_Tujuan');
    }, []);

    return(
        <div className="bg-white">
            <section className="py-12 bg-blue-primary sm:py-16 lg:py-20 " id="simulasipengiriman">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center ">
                        <div className="text-center">
                            <p className="text-lg font-medium text-white/80 font-pj">Cek estimasi biaya pengiriman</p>
                            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">"Simulasi Pengiriman"</h2>
                        </div>
        
                        <div className=" mt-10 md:mt-24 w-full ">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-4 md:grid-cols-12 gap-2 items-center">
                                    <div className='col-span-4'>
                                        <select value={dataAsal} onChange={(e)=>setDataAsal(e.target.value)} name="kotaAasal" id="kotaAasal" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 grow'>
                                            <option value="" disabled>Pilih Kota Asal</option>
                                            {
                                                kotaAsal.map((target, index)=>(
                                                    <option key={index} value={target.Kota_Asal}>{target.Kota_Asal}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='col-span-4'>
                                        <select value={dataTujuan} onChange={(e)=>setDataTujuan(e.target.value)} name="kotaTujuan" id="kotaTujuan" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 grow'>
                                            <option value="" disabled>Pilih Kota Tujuan</option>
                                            {
                                                kotaTujuan.map((target, index)=>(
                                                    <option key={index} value={target.Kota_Tujuan}>{target.Kota_Tujuan}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
            
                                    {/* <div className='col-span-4 md:col-span-3'>
                                        <select name="cars" id="cars" className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 grow'>
                                            <option value="volvo">Pilih Tipe</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div> */}
            
                                    <div className='col-span-4 md:col-span-4'>
                                        { isMutate ? (
                                        <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm  grow w-full">
                                        <FontAwesomeIcon 
                                        icon={faCircleNotch}
                                        className='animate-spin '
                                        /> Checking..
                                        </button>
                                        ):(
                                            <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm  grow w-full">Cek Estimasi Harga </button>
                                        ) }


                                    </div>
                                </div>
                            </form>
                        </div>
                        {
                            results.length > 0 
                            ? 
                                <Pencarian data={results} /> 
                                : 
                                pesan && <p className="text-gray-600 relative mt-9 text-xl md:text-2xl lg:text-3xl  text-center">Belum Ada Estimasi pengiriman untuk kota asal atau tujuan ini</p>
                        }
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" viewBox="0 0 1440 320"><path fill="#13418e" fillOpacity="1" d="M0,96L120,117.3C240,139,480,181,720,197.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
        </div>
    )
}

const Pencarian = ({data})=>{
    function formatRupiah(number) {
        return number.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR"
        });
      }
    return(
        <div className='flex mt-10 md:mt-24  w-full'>
            <div  className=" flex flex-col gap-3 md:flex-row justify-center  w-full">
                <ol className="items-center sm:flex">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FontAwesomeIcon 
                                    icon={faBuilding}
                                    className="text-blue-600 text-base"
                                />
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-2xl font-semibold text-white dark:text-white">{data[0].Kota_Asal}</h3>
                            <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Kota Asal</time>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FontAwesomeIcon 
                                    icon={faBuilding}
                                    className="text-blue-600 text-base"
                                />
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-2xl font-semibold text-white dark:text-white">{data[0].Kota_Tujuan}</h3>
                            <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Kota Tujuan</time>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <FontAwesomeIcon 
                                    icon={faMoneyBill}
                                    className="text-blue-600 text-base"
                                />
                            </div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-2xl font-semibold text-white dark:text-white">{formatRupiah(data[0].Harga)}</h3>
                            <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">Estimasi Harga</time>
                        </div>
                    </li>
                </ol>
            </div>
            <div className='grow w-full'>
                <ul className="w-full text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">* Harga dapat berubah sewaktu-waktu silahkan hubungi sales kami secepatnya untuk melakukan konfirmasi harga</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">*Skema pengiriman diatas adalah service Port to Port..</li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">*Untuk komunikasi skema pengiriman service lebih lanjut, silahkan menggunakan via chat sebelah kanan bawah.</li>
                    <li className="w-full px-4 py-2 rounded-b-lg">Saya telah setuju dengan Term and condition dari PT. Hasfi Prima Logistic</li>
                </ul>
            </div>
        </div>
    )
}