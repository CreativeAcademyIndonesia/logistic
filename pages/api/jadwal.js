import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : "SELECT * FROM jadwal",
        values : []
      })
      res.status(200).json(data)
    }else if(req.method == "POST"){
      const {
        namaKapal,
        noVoyage,
        tanggalClossing,
        rutedanTujuan,
        rutePanjang,
        dateRangeETD,
        dateRangeETA} = req.body

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
      res.status(200).json({message})
    }
  }





