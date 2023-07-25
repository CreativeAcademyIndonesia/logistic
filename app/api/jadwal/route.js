import { query } from "../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(){
  const data = await query({
    query : "SELECT * FROM jadwal",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {
    namaKapal,
    noVoyage,
    tanggalClossing,
    rutedanTujuan,
    rutePanjang,
    dateRangeETD,
    dateRangeETA} = await request.json()

  const result = await query({
    query : `INSERT INTO jadwal (
      Nama_Kapal,
      No_Voyage,
      Tanggal_Clossing,
      Rute_dan_Tujuan,
      Rute_Panjang,
      Date_RangeETD,
      Date_RangeETA) VALUES ( ?, ?, ?, ?, ?, ?, ?);`, 
    values : [
      namaKapal,
      noVoyage,
      tanggalClossing,
      rutedanTujuan,
      rutePanjang,
      dateRangeETD,
      dateRangeETA]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }

  return NextResponse.json({message})
}

