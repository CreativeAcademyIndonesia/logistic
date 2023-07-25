import { NextResponse } from "next/server";
import { query } from "../../database/db_connection";

export async function DELETE(request, {params}){
    const res = params.slug
    const result = await query({
        query : `DELETE FROM armada WHERE Id='${res}'`, 
        values : []
    })

    let message = ''
    if(result.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
    return NextResponse.json(message)
}

export async function PATCH(request, {params}){
    const res = params.slug
    const {namaPemilikTruck,
    sopirTruck,
    dGTruck,
    noSTNK,
    alamatSTNK,
    noHPPemilikTruck,
    noHPSopirTruck,
    masaBerlakuSTNK,
    tanggalPASMasuk,
    tanggalPASAkhir} = await request.json()
    const result = await query({
        query : `UPDATE armada SET 
        Nama_Pemilik_Truck = '${namaPemilikTruck}',
        Sopir_Truck = '${sopirTruck}',
        DG_Truck = '${dGTruck}',
        No_STNK = '${noSTNK}',
        Alamat_STNK = '${alamatSTNK}',
        No_HP_Pemilik_Truck = '${noHPPemilikTruck}',
        No_HP_Sopir_Truck = '${noHPSopirTruck}',
        Masa_Berlaku_STNK = '${masaBerlakuSTNK}',
        Tanggal_PAS_Masuk = '${tanggalPASMasuk}',
        Tanggal_PAS_Akhir = '${tanggalPASAkhir}' 
        WHERE Id = ${res}`,
        values : []
    })

    let message = ''
    if(result.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
    return NextResponse.json(message)
}