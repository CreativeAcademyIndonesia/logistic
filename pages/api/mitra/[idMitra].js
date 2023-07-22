import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idMitra } = req.query
    if(req.method == 'DELETE'){
        const result = await query({
          query : `DELETE FROM mitra WHERE Id='${idMitra}'`, 
          values : []
        })

        let message = ''
        if(result.affectedRows > 0 ) {
            message = 'SUCCESS'
        }else{
            message = 'ERROR'
        }
        res.status(200).json({message})

    }else if(req.method == 'PATCH') {
      const {namaMitra, 
        alamatMitra, 
        pemilikOwner, 
        nPWPMitra, 
        contacPerson, 
        jangkaWaktuKerjaSama} = req.body
      const result = await query({
          query : `UPDATE mitra SET 
          Nama_Mitra = '${namaMitra}', 
          Alamat_Mitra = '${alamatMitra}', 
          Pemilik_Owner = '${pemilikOwner}', 
          NPWP_Mitra = '${nPWPMitra}', 
          Contac_Person = '${contacPerson}', 
          Jangka_Waktu_Kerja_Sama = '${jangkaWaktuKerjaSama}'
          WHERE Id = ${idMitra}`,
          values : []
        })

        let message = ''
        if(result.affectedRows > 0 ) {
            message = 'SUCCESS'
        }else{
            message = 'ERROR'
        }
      res.status(200).json({message})
    }
  }