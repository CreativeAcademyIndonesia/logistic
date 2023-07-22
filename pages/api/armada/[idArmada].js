import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idArmada } = req.query
    if(req.method == 'DELETE'){
        const result = await query({
          query : `DELETE FROM armada WHERE Id='${idArmada}'`, 
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
      const {namaPemilikTruck,
        sopirTruck,
        dGTruck,
        noSTNK,
        alamatSTNK,
        noHPPemilikTruck,
        noHPSopirTruck,
        masaBerlakuSTNK,
        tanggalPASMasuk,
        tanggalPASAkhir} = req.body
      const result = await query({
          query : `UPDATE armada SET 
          Nama_Pemilik_Truck = '${namaPemilikTruck}',
          Sopir_Truck = '${sopirTruck}',
          DG_Truck = '${dGTruck}',
          No_STNK = '${noSTNK}',
          Alamat_STNK = '${alamatSTNK}',
          No_HP_Pemilik_Truck = '${noHPPemilikTruck}',
          No_HP_Sopir_Truck = '${noHPSopirTruck}',
          Masa_Berlaku_STNK = '${masaBerlakuSTNK}',
          Tanggal_PAS_Masuk = '${tanggalPASMasuk}',
          Tanggal_PAS_Akhir = '${tanggalPASAkhir}' 
          WHERE Id = ${idArmada}`,
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