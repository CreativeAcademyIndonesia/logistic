import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : "SELECT * FROM history",
        values : []
      })
      res.status(200).json(data)
    }else if(req.method == "POST"){
      const {
        iDPengiriman, tanggal, status, deskripsi} = req.body

      const result = await query({
        query : `INSERT INTO history (
          ID_Pengiriman, tanggal, status, deskripsi ) VALUES ( ?, ?, ?, ?);`, 
        values : [
          iDPengiriman, tanggal, status, deskripsi]
      })

      let message =''
      if(result.insertId){
        message = 'SUCCESS'
      }else{
        message = 'ERROR'
      }
      res.status(200).json({message : 'message'})
    }
  }


