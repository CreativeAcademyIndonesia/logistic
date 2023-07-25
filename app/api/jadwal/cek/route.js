import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function GET(request){
    const params = new URL(request.url) 
    const namaKapal = params.searchParams.get("namaKapal")
    const tanggalETD = params.searchParams.get("tanggalETD")
    const ruteTujuan = params.searchParams.get("ruteTujuan")
    const rutePanjang = params.searchParams.get("rutePanjang")
    const data = await query({
        query : `
        SELECT * FROM jadwal 
            WHERE Nama_Kapal LIKE '%${namaKapal}%' 
            AND Date_RangeETD = '${tanggalETD}' 
            AND Rute_dan_Tujuan = '${ruteTujuan}' 
            AND Rute_Panjang = '${rutePanjang}';
        `,
        values : []
    })
    return NextResponse.json(data)
}