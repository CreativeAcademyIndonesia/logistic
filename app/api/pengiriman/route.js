import { query } from "../database/db_connection"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
const path = require('path');
import fs from 'fs/promises';
import moment from "moment";

// export async function GET(request) {
//     const params = new URL(request.url)
//     let date = params.searchParams.get('date')
//     if(date == '' || !date) date = moment(new Date()).format('YYYY-MM')
//   const data = await query({
//     query : `SELECT * FROM pengiriman WHERE Tgl_Stuffing >= '${date}-01' AND Tgl_Stuffing < '${date}-31' ORDER BY ID_Pengiriman DESC;`,
//     values : []
//   })
//   return NextResponse.json(data)
// }

export async function GET(request) {
  const params = new URL(request.url);
  let date = params.searchParams.get('date');

  if (!date || date === '') {
      date = moment(new Date()).format('YYYY-MM');
  }

  const year = date.split('-')[0];
  const month = date.split('-')[1];
  
  let nextMonth = parseInt(month) + 1;
  let nextYear = year;

  if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = parseInt(year) + 1;
  }

  const startDate = `${year}-${month}-01`;
  const endDate = `${nextYear}-${String(nextMonth).padStart(2, '0')}-01`;

  console.log(startDate, endDate);

  const data = await query({
      query: `SELECT * FROM pengiriman WHERE Tgl_Stuffing >= '${startDate}' AND Tgl_Stuffing < '${endDate}' ORDER BY ID_Pengiriman DESC;`,
      values: []
  });

  return NextResponse.json(data);
}

export async function POST(request){
  const data = await request.formData()
  const file = data.get('file')
  const filepdf = data.get('filepdf')
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
  const tglStuffing = data.get('tglStuffing')
  const petugasStuffing = data.get('petugasStuffing')
  const keterangan = data.get('keterangan')
  let pathspdf = ''
  let paths = ''
  
  let filename = uuidv4();
  if(typeof file  === 'object' ){
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileExt = path.extname(file.name)
    filename = filename + fileExt
    paths = `${process.env.ROUTE_PATH}/storage/${filename}`
    await writeFile(paths, buffer)
  }else{
    filename = ''
  }
  
  let filenamepdf = uuidv4();
  if(typeof filepdf  === 'object' ){
    const bytespdf = await filepdf.arrayBuffer()
    const bufferpdf = Buffer.from(bytespdf)
    const fileExtpdv = path.extname(filepdf.name)
    filenamepdf = filenamepdf + fileExtpdv
    pathspdf = `${process.env.ROUTE_PATH}/storage/${filenamepdf}`
    await writeFile(pathspdf, bufferpdf)
  }else{
    filenamepdf = ''
  }

  const result = await query({
    query : `INSERT INTO pengiriman (Nama_Pengirim, No_Hp_Pengirim, No_Ktp_Pengirim, No_Npwp_Pengirim, Jenis_Barang, Layanan, Alamat_Pengirim, dari, ke, Alamat_Tujuan, Nama_Penerima, No_Hp_Penerima, No_Ktp_Penerima, Shipping_Line, Nama_Kapal, No_Container, No_Bl, Image, Pdf, Tgl_Stuffing, Petugas_Stuffing, Keterangan) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
    values : [namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl, filename, filenamepdf, tglStuffing, petugasStuffing, keterangan]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}