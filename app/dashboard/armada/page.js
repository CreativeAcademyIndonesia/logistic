// import { getData } from "../lib/getdata"
// import { filterData } from "../lib/filterData"
// import Tambah from "./Tambah"
// import Delete from "./Delete"
// import Update from "./Update"
// import Detail from "./Detail"
// import NoData from "@/app/component/NoData"
// import { Jumbotrons } from "@/app/component/Jumbotron"
// import moment from "moment/moment"
'use client'
import { useState } from "react"
import Table from "./table"
import useSWR from 'swr'
import NoData from "@/app/component/NoData"
import { Jumbotrons } from "@/app/component/Jumbotron"
import { getData } from "../lib/getdata"
import { filterData } from "../lib/filterData"
import Tambah from "./Tambah"
import Delete from "./Delete"
import Update from "./Update"
import Detail from "./Detail"
import moment from "moment/moment"

export default function Home() {
  const fetcher = (url) => fetch(url).then(res => res.json())
  const [filterDate, setFilterDate] = useState(new Date())
  const { data, error, isLoading } = useSWR(`/api/armada?date=${filterDate}`, fetcher)
  if(isLoading){
    return <h1>loading</h1>
  }
  
  return (
    <main className="min-h-screen bg-white relative">
      <Jumbotrons title="Armada"/>
      <div className="flex justify-between items-center p-4">
        <span className="text-slate-700 font-medium text-base md:text-xl">Data Armada</span>
        <Tambah />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        { data.length < 1 ? (
          <NoData />
        ) :(
          <Table data={data} />
        ) }
      </div>
    </main>
  )
}

