import { NextResponse } from "next/server";
import { query } from "../database/db_connection";
import moment from "moment";

// export async function GET(request) {
//     const params = new URL(request.url)
//     let date = params.searchParams.get('date')
//     if(date == '' || !date) date = moment(new Date()).format('YYYY-MM')
//     let message = ''
//     const data = await query({
//         query : `SELECT * FROM armada WHERE tanggal >= '${date}-01' AND tanggal < '${date}-31' ORDER BY Id DESC;`,
//         values : []
//     })
//     return NextResponse.json(data);
// }

export async function GET(request) {
    const params = new URL(request.url);
    let date = params.searchParams.get('date');

    if (!date || date === '') {
        date = moment(new Date()).format('YYYY-MM');
    }

    const year = date.split('-')[0];
    const month = date.split('-')[1];
    
    let nextMonth = parseInt(month) + 1;
    let nextYear = year;

    if (nextMonth > 12) {
        nextMonth = 1;
        nextYear = parseInt(year) + 1;
    }

    const startDate = `${year}-${month}-01`;
    const endDate = `${nextYear}-${String(nextMonth).padStart(2, '0')}-01`;

    console.log(startDate, endDate);

    const data = await query({
        query: `SELECT * FROM armada WHERE tanggal >= '${startDate}' AND tanggal < '${endDate}' ORDER BY Id DESC;`,
        values: []
    });

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
    