import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const params = new URL(request.url)
  const asal = params.searchParams.get("asal")
  const tujuan = params.searchParams.get("tujuan")
  const data = await query({
    query : `SELECT * FROM simulasi WHERE Kota_Asal = '${asal}' AND Kota_Tujuan = '${tujuan}'`,
    values : []
  })
  return NextResponse.json(data)
}