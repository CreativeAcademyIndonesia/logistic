'use client'
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import moment from "moment/moment"

export default function Home() {
    const [noContainer, setNoContainer] = useState('')
    const [noBl, setNoBl] = useState('')
    const [results, setResults] = useState([])
    const [onError, setOnError] = useState(false)
    const [onTidakLengkap, setOnTidakLengkap] = useState(false)
    const [isMutate, setIsMutate] = useState(false)
    const [type , setType] = useState('pengiriman')
    async function handleSubmit(e){
        setIsMutate(true)
        // setOnTidakLengkap(false)
        e.preventDefault()
        if(noContainer == '' || noBl == ''){
            // setOnTidakLengkap(true)
            setIsMutate(false)
            setOnError(true)    
            setResults([])
            return
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/history/${noContainer}?type=${type}&noBl=${noBl}`)
            const jsonData = await response.json()
            jsonData.length < 1 ? setOnError(true) : setOnError(false)
            setResults(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
        setIsMutate(false)
    }
    return (
    <main >
        <form onSubmit={handleSubmit} className="relative ">
            <div className="overflow-x-hidden bg-gray-50 min-h-screen pt-16">
                <section className="relative py-12 sm:py-16 ">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="mt-5 text-4xl font-bold leading-tight text-blue-primary sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Cek Pengiriman</h1>
                            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Silahkan Masukan No. Container</p>
                            <div className="relative inline-flex mt-10 group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                    
                                <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                                    <div className="flex-1">
                                        <label htmlFor="" className="sr-only">pengiriman</label>
                                        <div>
                                            <input type="text" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Nomor Container" onChange={(e)=>setNoContainer(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="" className="sr-only">BL</label>
                                        <div>
                                            <input type="text"  name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-none sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Nomor BL" onChange={(e)=>setNoBl(e.target.value)} />
                                        </div>
                                    </div>
                                    {
                                        isMutate ? (
                                            <button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                            <FontAwesomeIcon 
                                            icon={faCircleNotch}
                                            className='animate-spin '
                                            /> Checking..
                                            </button>
                                        ):(
                                            <button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Cek Pengiriman</button>
                                        )
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex gap-x-6 mx-auto py-4 text-center gap-4 justify-center">
                                <div className="flex cursor-pointer items-center gap-2">
                                    <input 
                                    type="radio" 
                                    name="hs-radio-group" 
                                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" 
                                    id="hs-radio-group-1"
                                    value="pengiriman"
                                    checked={ type == 'pengiriman' }
                                    onChange={(e)=> setType(e.target.value)}  />
                                    <label htmlFor="hs-radio-group-1" className="text-sm sm:text-xl text-gray-500 ml-2 dark:text-gray-400">Pengiriman</label>
                                </div>

                                <div className="flex cursor-pointer items-center gap-2">
                                    <input 
                                    type="radio" 
                                    name="hs-radio-group" 
                                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" 
                                    id="hs-radio-group-2"
                                    value="penerimaan"
                                    checked={ type == 'penerimaan' }
                                    onChange={(e)=> setType(e.target.value)} />
                                    <label htmlFor="hs-radio-group-2" className="text-sm sm:text-xl text-gray-500 ml-2 dark:text-gray-400">Penerimaan</label>
                                </div>
                            </div>
                        </div>
                        {

                            results.length > 0 ? <Track data={results} container={noContainer} /> :
                            onError && <Error />
                        }

                    </div>
                    {
                        onTidakLengkap && <Lengkapi />
                    }
                </section>  
            </div>
        </form>
    </main>
  )
}


const Error = ()=>{
    return(
        <div>
            <div id="alert-2" className="flex items-center p-4 mb-4 w-full md:w-1/2 mx-auto mt-8 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                Tidak diketahui : Pastikan kamu Memasukan Nomor Container & No BL dengan Benar
                </div>
            </div>
        </div>
    )
}

const Lengkapi = ()=>{
    return(
        <div>
            <div id="alert-2" className="flex items-center p-4 mb-4 w-full md:w-1/2 mx-auto mt-8 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                    Pastikan kamu Memasukan Nomor Container & No BL dengan Benar
                </div>
            </div>
        </div>
    )
}

const Track = ({data, container})=> {
    return(
        <div className='py-10 flex justify-center'>     
            <Link href="#" className="block max-w-lg min-w-[50%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nomor Container : {container}</h5>
                <ol className="relative border-l border-gray-200 dark:border-gray-700"> 
                {
                    data[0].tanggal == null ||data[0].status === null ? 
                    <p className="text-gray-600 relative mt-9 text-lg md:text-xl lg:text-2xl text-start">Pengiriman ini masih dalam proses, Belum ada update status pengiriman</p>
                    :
                    data.map((d, i)=>(
                        <li key={i} className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{moment(d.tanggal).format('DD-MM-YYYY') }</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Status - {d.status}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{d.deskripsi}</p>
                        </li>
                    ))
                }            
                </ol>
            </Link>
        </div>
    )
}