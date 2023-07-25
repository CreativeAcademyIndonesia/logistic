import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function DELETE(request, {params}){
  const idJadwal = params.slug
  const result = await query({
    query : `DELETE FROM jadwal WHERE Id='${idJadwal}'`, 
    values : []
  })

  let message = ''
  if(result.affectedRows > 0 ) {
      message = 'SUCCESS'
  }else{
      message = 'ERROR'
  }
  return NextResponse.json({message})
}

export async function PATCH(request, {params}){
  const idJadwal = params.slug
  const {namaKapal,
    noVoyage,
    tanggalClossing,
    rutedanTujuan,
    rutePanjang,
    dateRangeETD,
    dateRangeETA} = await request.json()
  const result = await query({
      query : `UPDATE jadwal SET 
      Nama_Kapal = '${namaKapal}',
      No_Voyage = '${noVoyage}',
      Tanggal_Clossing = '${tanggalClossing}',
      Rute_dan_Tujuan = '${rutedanTujuan}',
      Rute_Panjang = '${rutePanjang}',
      Date_RangeETD = '${dateRangeETD}',
      Date_RangeETA = '${dateRangeETA}' 
      WHERE Id = ${idJadwal}`,
      values : []
    })

    let message = ''
    if(result.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
    return NextResponse.json({message})
}