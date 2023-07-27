import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
const path = require('path');
import fs from 'fs/promises';

export async function DELETE(request, {params}) {
  const idPenerimaan  = params.slug
    const deletePenerimaan = await query({
      query : `DELETE FROM penerimaan WHERE ID_Penerimaan='${idPenerimaan}'`, 
      values : []
    })

    let message = ''
    if(deletePenerimaan.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
  return NextResponse.json({message})
}

export async function PATCH(request, {params}){
  const idPenerimaan  = params.slug
  const data = await request.formData()
  const jsondata = data.get('data')
  const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl, oldfile, oldfilepdf} = await JSON.parse(jsondata)

  const file = data.get('file')
  const filepdf = data.get('filepdf')
  let pathspdf = ''
  let paths = ''

  let filename = uuidv4();
  console.log(file)
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

  const updatePenerimaan = await query({
    query : `UPDATE penerimaan SET 
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
    Pdf = '${filenamepdf}'
    WHERE ID_Penerimaan = ${idPenerimaan}`,
    values : []
  })

  let message = ''
  if(updatePenerimaan.affectedRows > 0 ) {
      message = 'SUCCESS'
  }else{
      message = 'ERROR'
  }
  return NextResponse.json({message})
}