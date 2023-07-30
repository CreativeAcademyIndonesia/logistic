import { query } from "../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(){
  const data = await query({
    query : "SELECT * FROM mitra ORDER BY Id DESC",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {namaMitra, 
    alamatMitra, 
    pemilikOwner, 
    nPWPMitra, 
    contacPerson, 
    jangkaWaktuKerjaSama} = await request.json()

  const result = await query({
    query : `INSERT INTO mitra (Nama_Mitra, Alamat_Mitra, Pemilik_Owner, NPWP_Mitra, Contac_Person, Jangka_Waktu_Kerja_Sama) VALUES ( ?, ?, ?, ?, ?, ?);`, 
    values : [namaMitra, 
        alamatMitra, 
        pemilikOwner, 
        nPWPMitra, 
        contacPerson, 
        jangkaWaktuKerjaSama]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}