import { query } from "../database/db_connection"
import { NextResponse } from "next/server"

export default async function GET(){
  const data = await query({
    query : "SELECT * FROM pengiriman",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = await request.json()

  const result = await query({
    query : `INSERT INTO pengiriman (Nama_Pengirim, No_Hp_Pengirim, No_Ktp_Pengirim, No_Npwp_Pengirim, Jenis_Barang, Layanan, Alamat_Pengirim, dari, ke, Alamat_Tujuan, Nama_Penerima, No_Hp_Penerima, No_Ktp_Penerima, Shipping_Line, Nama_Kapal, No_Container, No_Bl) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
    values : [namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}