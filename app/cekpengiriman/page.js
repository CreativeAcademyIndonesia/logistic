'use client'
import { useState } from "react"

export default function Home() {
    const [noContainer, setNoContainer] = useState()
    const [results, setResults] = useState([])
    const [onError, setOnError] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()
        try {
            const response = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}/api/history/${noContainer}`)
            const jsonData = await response.json()
            jsonData.length < 1 ? setOnError(true) : setOnError(false)
            setResults(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    return (
    <main >
        <div className="overflow-x-hidden bg-gray-50 min-h-screen">
            <section className="relative py-12 sm:py-16 ">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Cek Pengiriman</h1>
                        <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Silahkan Masukan No. Container</p>
                        <div className="relative inline-flex mt-10 group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                <form onSubmit={handleSubmit} className="relative mt-4">
                                    <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                                    <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                                    <div className="flex-1">
                                        <label htmlFor="" className="sr-only">pengiriman</label>
                                        <div>
                                        <input type="container" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Nomor Container" onChange={(e)=>setNoContainer(e.target.value)} />
                                        </div>
                                    </div><button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Cek Pengiriman</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                    {
                        results.length > 0 ?
                         <Track data={results} container={noContainer} /> :
                         onError && <Error />
                    }
                </div>
            </section>
        </div>
    </main>
  )
}


const Error = ()=>{
    return(
        <div>
            <div id="alert-2" className="flex items-center p-4 mb-4 w-full md:w-1/2 mx-auto mt-8 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                Tidak diketahui : Silahkan Masukan Nomor Container dengan Benar
                </div>
            </div>
        </div>
    )
}


const Track = ({data, container})=> {
    console.log(data)
    return(
        <div className='py-10 flex justify-center'>     
            <a href="#" className="block max-w-lg min-w-[50%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nomor Container : {container}</h5>
                <ol className="relative border-l border-gray-200 dark:border-gray-700"> 
                {
                    data[0].tanggal == null ||data[0].status === null ? 
                    <p className="text-gray-600 relative mt-9 text-lg md:text-xl lg:text-2xl text-start">Pengiriman ini masih dalam proses, Belum ada update status pengiriman</p>
                    :
                    data.map((d, i)=>(
                        <li key={i} className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{d.tanggal}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Status - {d.status}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{d.deskripsi}</p>
                        </li>
                    ))
                }            
                </ol>
            </a>
        </div>
    )
}