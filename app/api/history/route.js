import { NextResponse } from "next/server"
import { query } from "../database/db_connection"

export async function GET(request){
  const data = await query({
    query : "SELECT * FROM history",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {
    iDPengiriman, tanggal, status, deskripsi} = await request.json()
  const result = await query({
    query : `INSERT INTO history (
      ID_Pengiriman, tanggal, status, deskripsi ) VALUES ( ?, ?, ?, ?);`, 
    values : [
      iDPengiriman, tanggal, status, deskripsi]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}

