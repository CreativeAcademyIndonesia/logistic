import { query } from "@/app/api/database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
  const item = request.snug
    const data = await query({
      query : `SELECT DISTINCT ${item} FROM jadwal;`,
      values : []
    })
  return NextResponse.json(data)
}

export default async function handler(req, res) {
}

