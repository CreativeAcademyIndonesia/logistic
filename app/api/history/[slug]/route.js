import { NextResponse } from "next/server"
import { query } from "../../database/db_connection"

export async function GET(request, {params}){
  const idHistory = params.slug
  const data = await query({
    query : `
    SELECT pengiriman.No_Container, history.ID_Pengiriman, history.tanggal, history.status, history.deskripsi
    FROM pengiriman
    LEFT JOIN history
    ON pengiriman.ID_Pengiriman=history.ID_Pengiriman
    WHERE pengiriman.No_Container = "${idHistory}"
    ORDER BY pengiriman.No_Container;
    `,
    values : []
  })
  return NextResponse.json(data)
}

export async function DELETE(request, {params}){
  const idHistory = params.slug
  const result = await query({
    query : `DELETE FROM history WHERE Id='${idHistory}'`, 
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
  const idHistory = params.slug
  const {tanggal, status, deskripsi} = await request.json()
    const result = await query({
        query : `UPDATE history SET 
        tanggal ='${tanggal}', status ='${status}', deskripsi ='${deskripsi}'
        WHERE id = ${idHistory}`,
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
