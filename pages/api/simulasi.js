import { query } from "./database/db_connection";

export default async function handler(req, res) {
    // let message = ''
    // if(req.method == "GET"){
    //   console.log(req.query)
    //   const data = await query({
    //     query : `SELECT * FROM simulasi WHERE Kota_Asal = '${req.query.asal}' AND Kota_Tujuan = '${req.query.tujuan}'`,
    //     values : []
    //   })
    //   res.status(200).json(data)
    let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : `SELECT * FROM simulasi`,
        values : []
      })
      res.status(200).json(data)

    }else if(req.method == "POST"){
      const {
        kotaAsal, kotaTujuan, harga} = req.body

      const result = await query({
        query : `INSERT INTO simulasi (
          Kota_Asal, Kota_Tujuan, Harga ) VALUES ( ?, ?, ?);`, 
        values : [
          kotaAsal, kotaTujuan, harga]
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



