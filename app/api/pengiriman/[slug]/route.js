import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
const path = require('path');
import fs from 'fs/promises';

export async function DELETE(request, {params}){
  const idPengiriman = params.slug
  const deletePengiriman = await query({
    query : `DELETE FROM pengiriman WHERE ID_Pengiriman='${idPengiriman}'`, 
    values : []
  })

  let message = ''
  if(deletePengiriman.affectedRows > 0 ) {
      message = 'SUCCESS'
  }else{
      message = 'ERROR'
  }
  // return NextResponse.json({message})
  return new Response({message}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}

export async function PATCH(request, {params}) {
  const idPengiriman = params.slug
  const data = await request.formData()
  const jsondata = data.get('data')
  const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl, oldfile, oldfilepdf, tglStuffing, petugasStuffing, keterangan} = await JSON.parse(jsondata)

  const file = data.get('file')
  const filepdf = data.get('filepdf')
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
    filename = oldfile
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
    filenamepdf = oldfilepdf
  }

  const updatePengiriman = await query({
    query : `UPDATE pengiriman SET 
    Nama_Pengirim = '${namaPengirim}',
    No_Hp_Pengirim = '${noHpPengirim}',
    No_Ktp_Pengirim = '${noKtpPengirim}',
    No_Npwp_Pengirim = '${noNpwpPengirim}',
    Jenis_Barang = '${jenisBarang}',
    Layanan = '${layanan}',
    Alamat_Pengirim = '${alamatPengirim}',
    dari = '${from}',
    ke = '${to}',
    Alamat_Tujuan = '${alamatTujuan}',
    Nama_Penerima = '${namaPenerima}',
    No_Hp_Penerima = '${noHpPenerima}',
    No_Ktp_Penerima = '${noKtpPenerima}',
    Shipping_Line = '${shipingLine}',
    Nama_Kapal = '${namaKapal}',
    No_Container = '${noContainer}',
    No_Bl = '${noBl}',
    Image = '${filename}',
    Pdf = '${filenamepdf}',
    Tgl_Stuffing = '${tglStuffing}',
    Petugas_Stuffing = '${petugasStuffing}',
    Keterangan = '${keterangan}'
    WHERE ID_Pengiriman = ${idPengiriman}`,
    values : []
  })
  // const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = await request.json()
  // const updatePengiriman = await query({
  //     query : `UPDATE pengiriman SET 
  //     Nama_Pengirim = '${namaPengirim}',
  //     No_Hp_Pengirim = '${noHpPengirim}',
  //     No_Ktp_Pengirim = '${noKtpPengirim}',
  //     No_Npwp_Pengirim = '${noNpwpPengirim}',
  //     Jenis_Barang = '${jenisBarang}',
  //     Layanan = '${layanan}',
  //     Alamat_Pengirim = '${alamatPengirim}',
  //     dari = '${from}',
  //     ke = '${to}',
  //     Alamat_Tujuan = '${alamatTujuan}',
  //     Nama_Penerima = '${namaPenerima}',
  //     No_Hp_Penerima = '${noHpPenerima}',
  //     No_Ktp_Penerima = '${noKtpPenerima}',
  //     Shipping_Line = '${shipingLine}',
  //     Nama_Kapal = '${namaKapal}',
  //     No_Container = '${noContainer}',
  //     No_Bl = '${noBl}'
  //     WHERE ID_Pengiriman = ${idPengiriman}`,
  //     values : []
  //   })

    let message = ''
    if(updatePengiriman.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }

  return NextResponse.json({message})
}