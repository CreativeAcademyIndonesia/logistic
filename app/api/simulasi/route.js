import { query } from "../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(){
  const data = await query({
    query : `SELECT * FROM simulasi`,
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {
    kotaAsal, kotaTujuan, harga} = await request.json()

  const result = await query({
    query : `INSERT INTO simulasi (
      Kota_Asal, Kota_Tujuan, Harga ) VALUES ( ?, ?, ?);`, 
    values : [
      kotaAsal, kotaTujuan, harga]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}

