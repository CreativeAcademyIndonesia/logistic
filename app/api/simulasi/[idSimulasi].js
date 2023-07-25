import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idSimulasi } = req.query
    if(req.method == 'DELETE'){
        const result = await query({
          query : `DELETE FROM simulasi WHERE Id='${idSimulasi}'`, 
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
      const {kotaAsal, kotaTujuan, harga} = req.body
      const result = await query({
          query : `UPDATE simulasi SET 
          Kota_Asal = '${kotaAsal}', Kota_Tujuan = '${kotaTujuan}', Harga = '${harga}'
          WHERE id = ${idSimulasi}`,
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