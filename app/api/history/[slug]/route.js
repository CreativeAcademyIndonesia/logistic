import { NextResponse } from "next/server"
import { query } from "../../database/db_connection"

export async function GET(request, {params}){
  const idHistory = params.slug
  const req = new URL(request.url)
  let type = req.searchParams.get('type')
  let data = []
  if(type == 'pengiriman'){
    data = await query({
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
  }else if(type == 'penerimaan'){
    data = await query({
      query : `
      SELECT penerimaan.No_Container, historypenerimaan.ID_Penerimaan, historypenerimaan.tanggal, historypenerimaan.status, historypenerimaan.deskripsi
      FROM penerimaan
      LEFT JOIN historypenerimaan
      ON penerimaan.ID_Penerimaan=historypenerimaan.ID_Penerimaan
      WHERE penerimaan.No_Container = "${idHistory}"
      ORDER BY penerimaan.No_Container;
      `,
      values : []
    })
  }

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
