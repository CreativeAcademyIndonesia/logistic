import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : "SELECT * FROM mitra",
        values : []
      })
      res.status(200).json(data)
    }else if(req.method == "POST"){
      const {namaMitra, 
        alamatMitra, 
        pemilikOwner, 
        nPWPMitra, 
        contacPerson, 
        jangkaWaktuKerjaSama} = req.body

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
      res.status(200).json({message})
    }
  }

