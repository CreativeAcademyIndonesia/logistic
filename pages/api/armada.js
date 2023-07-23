import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : "SELECT * FROM armada",
        values : []
      })
      res.status(200).json(data)
    }else if(req.method == "POST"){
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
        status} = req.body

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
      res.status(200).json({message})
    }
  }


