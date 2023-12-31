import { NextResponse } from "next/server"
import { query } from "../database/db_connection"

export async function GET(request){
  const data = await query({
    query : "SELECT * FROM history ORDER BY tanggal DESC",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const params = new URL(request.url)
  let type = params.searchParams.get('type')
  let result = {}
  if( type == 'penerimaan'){
    const { iDPenerimaan, tanggal, status, deskripsi} = await request.json()
    result = await query({
      query : `INSERT INTO historypenerimaan (
        ID_Penerimaan, tanggal, status, deskripsi ) VALUES ( ?, ?, ?, ?);`, 
      values : [
        iDPenerimaan, tanggal, status, deskripsi]
    })
  }else if(type == 'pengiriman'){
    const { iDPengiriman, tanggal, status, deskripsi} = await request.json()
    result = await query({
      query : `INSERT INTO history (
        ID_Pengiriman, tanggal, status, deskripsi ) VALUES ( ?, ?, ?, ?);`, 
      values : [
        iDPengiriman, tanggal, status, deskripsi]
    })
  }
  
  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}

