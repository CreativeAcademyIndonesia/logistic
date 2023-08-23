import { query } from "../database/db_connection"
import { NextResponse } from "next/server"
import moment from "moment";

// export async function GET(request) {
//     const params = new URL(request.url)
//     let date = params.searchParams.get('date')
//     if(date == '' || !date) date = moment(new Date()).format('YYYY-MM')
//   const data = await query({
//     query : `SELECT * FROM mitra WHERE tanggal >= '${date}-01' AND tanggal < '${date}-31' ORDER BY Id DESC;`,
//     values : []
//   })
//   return NextResponse.json(data)
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
      query: `SELECT * FROM mitra WHERE tanggal >= '${startDate}' AND tanggal < '${endDate}' ORDER BY Id DESC;`,
      values: []
  });

  return NextResponse.json(data);
}

export async function POST(request){
  const {namaMitra, 
    alamatMitra, 
    pemilikOwner, 
    nPWPMitra, 
    contacPerson, 
    jangkaWaktuKerjaSama} = await request.json()

  const result = await query({
    query : `INSERT INTO mitra (Nama_Mitra, Alamat_Mitra, Pemilik_Owner, NPWP_Mitra, Contac_Person, Jangka_Waktu_Kerja_Sama) VALUES ( ?, ?, ?, ?, ?, ?);`, 
    values : [namaMitra, 
        alamatMitra, 
        pemilikOwner, 
        nPWPMitra, 
        contacPerson, 
        jangkaWaktuKerjaSama]
  })

  let message =''
  if(result.insertId){
    message = 'SUCCESS'
  }else{
    message = 'ERROR'
  }
  return NextResponse.json({message})
}