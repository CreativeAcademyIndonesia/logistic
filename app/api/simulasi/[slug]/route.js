import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function DELETE(request, {params}){
  const idSimulasi = params.slug
  const result = await query({
    query : `DELETE FROM simulasi WHERE Id='${idSimulasi}'`, 
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
  const idSimulasi = params.slug
  console.log(idSimulasi)
  const {kotaAsal, kotaTujuan, harga} = await request.json()
  const result = await query({
      query : `UPDATE simulasi SET 
      Kota_Asal = '${kotaAsal}', Kota_Tujuan = '${kotaTujuan}', Harga = '${harga}'
      WHERE id = ${idSimulasi}`,
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
