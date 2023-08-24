import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const params = new URL(request.url)
  const t = params.searchParams.get('t')
  const count = params.searchParams.get('count')
  const c = params.searchParams.get('c')
  const y = params.searchParams.get('y')
  const data = await query({
    query : `
      SELECT EXTRACT(YEAR FROM ${c}) as tahun, EXTRACT(MONTH FROM ${c}) as bulan, ${count}, COUNT(${count}) as transaksi
      FROM ${t}
      WHERE EXTRACT(YEAR FROM ${c}) = ${y}
      GROUP BY EXTRACT(YEAR FROM ${c}), EXTRACT(MONTH FROM ${c}), ${count}
      ORDER BY tahun, bulan, transaksi DESC;
    `,
    // query : `
    //   SELECT EXTRACT(YEAR FROM ${c}) as tahun, EXTRACT(MONTH FROM ${c}) as bulan, ${count}, COUNT(${count}) as transaksi
    //   FROM ${t}
    //   WHERE EXTRACT(YEAR FROM ${c}) = ${y}
    //   GROUP BY EXTRACT(YEAR FROM ${c}), EXTRACT(MONTH FROM ${c}), ${count}
    //   ORDER BY tahun, bulan, transaksi DESC;
    // `,
    values : []
  })
  return NextResponse.json(data)
}