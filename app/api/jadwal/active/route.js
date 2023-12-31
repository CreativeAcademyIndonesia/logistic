import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"
import moment from "moment";

export async function GET() {
  const data = await query({
    query : "SELECT * FROM jadwal ORDER BY Tanggal_Clossing DESC LIMIT 5",
    values : []
  })
  return NextResponse.json(data)

}