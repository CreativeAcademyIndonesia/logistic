import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"
import moment from "moment";

export async function GET() {
  const data = await query({
    query : "SELECT * FROM jadwal ORDER BY Id DESC LIMIT 10",
    values : []
  })
  if(data){
    return NextResponse.json(data)
  }else{
    return NextResponse.json({message : 'error'})
  }
}