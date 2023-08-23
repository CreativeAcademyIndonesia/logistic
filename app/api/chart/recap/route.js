import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const params = new URL(request.url)
  const t = params.searchParams.get('t')
  const c = params.searchParams.get('c')
  const data = await query({
      query : `
      SELECT 
        DATE_FORMAT(${c}, '%Y') AS tahun,
        DATE_FORMAT(${c}, '%m') AS bulan,
        COUNT(*) AS jumlah_transaksi 
      FROM ${t} 
      WHERE DATE_FORMAT(${c}, '%Y') = YEAR(CURRENT_DATE()) 
      GROUP BY tahun, bulan
      ORDER BY tahun, bulan;
      `,
      values : []
    })
  return NextResponse.json(data)
}
