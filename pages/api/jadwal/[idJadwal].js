import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idJadwal } = req.query
    if(req.method == 'DELETE'){
        const result = await query({
          query : `DELETE FROM jadwal WHERE Id='${idJadwal}'`, 
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
      const {namaKapal,
        noVoyage,
        tanggalClossing,
        rutedanTujuan,
        rutePanjang,
        dateRangeETD,
        dateRangeETA} = req.body
      const result = await query({
          query : `UPDATE jadwal SET 
          Nama_Kapal = '${namaKapal}',
          No_Voyage = '${noVoyage}',
          Tanggal_Clossing = '${tanggalClossing}',
          Rute_dan_Tujuan = '${rutedanTujuan}',
          Rute_Panjang = '${rutePanjang}',
          Date_RangeETD = '${dateRangeETD}',
          Date_RangeETA = '${dateRangeETA}' 
          WHERE Id = ${idJadwal}`,
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