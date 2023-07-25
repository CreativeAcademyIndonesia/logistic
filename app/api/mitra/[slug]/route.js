import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function DELETE(request, {params}){
  const idMitra = params.slug
      const result = await query({
        query : `DELETE FROM mitra WHERE Id='${idMitra}'`, 
        values : []
      })

      let message = ''
      if(result.affectedRows > 0 ) {
          message = 'SUCCESS'
      }else{
          message = 'ERROR'
      }
  return NextResponse.json(message)
}

export async function PATCH(request, {params}){
  const idMitra = params.slug
  const {namaMitra, 
    alamatMitra, 
    pemilikOwner, 
    nPWPMitra, 
    contacPerson, 
    jangkaWaktuKerjaSama} = await request.json()
  const result = await query({
      query : `UPDATE mitra SET 
      Nama_Mitra = '${namaMitra}', 
      Alamat_Mitra = '${alamatMitra}', 
      Pemilik_Owner = '${pemilikOwner}', 
      NPWP_Mitra = '${nPWPMitra}', 
      Contac_Person = '${contacPerson}', 
      Jangka_Waktu_Kerja_Sama = '${jangkaWaktuKerjaSama}'
      WHERE Id = ${idMitra}`,
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