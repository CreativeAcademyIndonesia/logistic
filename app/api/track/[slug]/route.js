import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const data = await query({
      query: `SELECT * FROM history WHERE ID_Pengiriman = '${params.slug}' `,
      values: []
  });
  return NextResponse.json(data);
}

export async function DELETE(request, {params}){
    const result = await query({
      query : `DELETE FROM history WHERE id='${params.slug}'`, 
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
  const id = params.slug
  const {tanggal, 
    status, 
    deskripsi} = await request.json()
    const result = await query({
      query: `UPDATE history SET 
        tanggal = '${tanggal}',
        status = '${status}',
        deskripsi = '${deskripsi}'
        WHERE id = '${id}'`,
      values: []
    })

    let message = ''
    if(result.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }

  return NextResponse.json({message})
}