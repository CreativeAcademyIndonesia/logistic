import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
    const params = new URL(request.url) 
    const namaKapal = params.searchParams.get("namaKapal") || null
    const tanggalETD = params.searchParams.get("tanggalETD") || null
    const ruteTujuan = params.searchParams.get("ruteTujuan") || null
    const rutePanjang = params.searchParams.get("rutePanjang") || null
    const data = await query({
        query : `
        SELECT * FROM jadwal 
        WHERE Nama_Kapal LIKE '%${namaKapal}%'
        ${tanggalETD !== null ? `AND Date_RangeETD = '${tanggalETD}'` : '' }
        ${ruteTujuan !== null ? `AND Rute_dan_Tujuan = '${ruteTujuan}'` : '' }
        ${rutePanjang !== null ? `AND Rute_Panjang = '${rutePanjang}'` : '' }
        ;`,
        values : []
    })
    return NextResponse.json(data)
}