import { query } from "../database/db_connection"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
const path = require('path');
import fs from 'fs/promises';

export async function GET(){
  const data = await query({
    query : "SELECT * FROM pengiriman",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  // const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = await request.json()
  const data = await request.formData()
  const file = data.get('file')

  const namaPengirim = data.get('namaPengirim')
  const noHpPengirim = data.get('noHpPengirim')
  const noKtpPengirim = data.get('noKtpPengirim')
  const noNpwpPengirim = data.get('noNpwpPengirim')
  const jenisBarang = data.get('jenisBarang')
  const layanan = data.get('layanan')
  const alamatPengirim = data.get('alamatPengirim')
  const from = data.get('from')
  const to = data.get('to')
  const alamatTujuan = data.get('alamatTujuan')
  const namaPenerima = data.get('namaPenerima')
  const noHpPenerima = data.get('noHpPenerima')
  const noKtpPenerima = data.get('noKtpPenerima')
  const shipingLine = data.get('shipingLine')
  const namaKapal = data.get('namaKapal')
  const noContainer = data.get('noContainer')
  const noBl = data.get('noBl')
 
  if (!file) {
    return NextResponse.json({ success: false })
  }
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  let filename = uuidv4();
  const fileExt = path.extname(file.name)
  filename = filename + fileExt

  // file.name = filename
  const paths = `/logistic/storage/${filename}`
  await writeFile(paths, buffer)


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