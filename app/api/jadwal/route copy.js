import { query } from "../database/db_connection"
import { NextResponse } from "next/server"
import moment from "moment";

export async function GET(request) {
    const params = new URL(request.url)
    let date = params.searchParams.get('date')
    // if(date == '' || !date) date = moment(new Date()).format('YYYY-MM')
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
    const data = await query({
    query : `SELECT * FROM jadwal WHERE tanggal >= '${startDate}' AND tanggal < '${endDate}' ORDER BY Id DESC;`,
    // query : "SELECT * FROM jadwal ORDER BY Id DESC LIMIT 10",
    values : []
  })
  return NextResponse.json(data)
}

export async function POST(request){
  const {
    namaKapal,
    noVoyage,
    tanggalClossing,
    rutedanTujuan,
    rutePanjang,
    dateRangeETD,
    dateRangeETA} = await request.json()

  const result = await query({
    query : `INSERT INTO jadwal (
      Nama_Kapal,
      No_Voyage,
      Tanggal_Clossing,
      Rute_dan_Tujuan,
      Rute_Panjang,
      Date_RangeETD,
      Date_RangeETA) VALUES ( ?, ?, ?, ?, ?, ?, ?);`, 
    values : [
      namaKapal,
      noVoyage,
      tanggalClossing,
      rutedanTujuan,
      rutePanjang,
      dateRangeETD,
      dateRangeETA]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }

  return NextResponse.json({message})
}

