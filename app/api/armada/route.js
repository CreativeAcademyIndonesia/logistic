import { NextResponse } from "next/server";
import { query } from "../database/db_connection";

export async function GET(request) {
    let message = ''
    const data = await query({
        query : "SELECT * FROM armada",
        values : []
    })
    return NextResponse.json(data);
}

export async function POST(request) {
    const {namaPemilikTruck,
    sopirTruck,
    dGTruck,
    noSTNK,
    alamatSTNK,
    noHPPemilikTruck,
    noHPSopirTruck,
    masaBerlakuSTNK,
    tanggalPASMasuk,
    tanggalPASAkhir, 
    status} = await request.json()

    const result = await query({
    query : `INSERT INTO armada (
        Nama_Pemilik_Truck,
        Sopir_Truck,
        DG_Truck,
        No_STNK,
        Alamat_STNK,
        No_HP_Pemilik_Truck,
        No_HP_Sopir_Truck,
        Masa_Berlaku_STNK,
        Tanggal_PAS_Masuk,
        Tanggal_PAS_Akhir,
        Status) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
    values : [
        namaPemilikTruck,
        sopirTruck,
        dGTruck,
        noSTNK,
        alamatSTNK,
        noHPPemilikTruck,
        noHPSopirTruck,
        masaBerlakuSTNK,
        tanggalPASMasuk,
        tanggalPASAkhir, 
        status]
    })

    let message =''
    if(result.insertId){
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
    return NextResponse.json({message});
}
    