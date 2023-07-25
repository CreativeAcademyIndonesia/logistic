import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const params = new URL(request.url)
  const t = params.searchParams.get('t')
  const data = await query({
      query : `
      SELECT
      DATE_FORMAT(tanggal, '%Y') AS tahun,
      CASE DATE_FORMAT(tanggal, '%m')
          WHEN '01' THEN 'Jan'
          WHEN '02' THEN 'Feb'
          WHEN '03' THEN 'Mar'
          WHEN '04' THEN 'Apr'
          WHEN '05' THEN 'May'
          WHEN '06' THEN 'Jun'
          WHEN '07' THEN 'Jul'
          WHEN '08' THEN 'Aug'
          WHEN '09' THEN 'Sep'
          WHEN '10' THEN 'Oct'
          WHEN '11' THEN 'Nov'
          WHEN '12' THEN 'Dec'
      END AS bulan,
      COUNT(*) AS jumlah_transaksi
  FROM ${t}
  WHERE DATE_FORMAT(tanggal, '%Y') = YEAR(CURRENT_DATE())
  GROUP BY DATE_FORMAT(tanggal, '%Y'), DATE_FORMAT(tanggal, '%m')
  ORDER BY tahun, bulan;

      `,
      values : []
    })

  return NextResponse.json(data)
}
