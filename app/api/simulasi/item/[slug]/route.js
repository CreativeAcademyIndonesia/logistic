import { query } from "@/app/api/database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request, {params}){
  const item = params.slug
  const data = await query({
    query : `SELECT DISTINCT ${item} FROM simulasi;`,
    values : []
  })
  return NextResponse.json(data)
}