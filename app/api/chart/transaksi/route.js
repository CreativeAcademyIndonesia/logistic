import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const params = new URL(request.url)
  const t = params.searchParams.get('t')
  const count = params.searchParams.get('count')
  const data = await query({
    query : `
      SELECT EXTRACT(YEAR FROM tanggal) as tahun, EXTRACT(MONTH FROM tanggal) as bulan, ${count}, COUNT(${count}) as transaksi
      FROM ${t}
      WHERE EXTRACT(YEAR FROM tanggal) = EXTRACT(YEAR FROM CURRENT_DATE)
      GROUP BY EXTRACT(YEAR FROM tanggal), EXTRACT(MONTH FROM tanggal), ${count}
      ORDER BY tahun, bulan, transaksi DESC;
    `,
    values : []
  })

  return NextResponse.json(data)
}