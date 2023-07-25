import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request, {params}){
  console.log(params)
  // const data = await query({
  //     query : `
  //     SELECT pengiriman.No_Container, history.ID_Pengiriman, history.tanggal, history.status, history.deskripsi
  //     FROM pengiriman
  //     LEFT JOIN history
  //     ON pengiriman.ID_Pengiriman=history.ID_Pengiriman
  //     WHERE pengiriman.No_Container = ${idHistory}
  //     ORDER BY pengiriman.No_Container;
  //     `,
  //     values : []
  // })

  return NextResponse.json({data : 'null'})
}
