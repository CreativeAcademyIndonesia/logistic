import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idPenerimaan } = req.query
    if(req.method == 'DELETE'){
        const result = await query({
          query : `DELETE FROM penerimaan WHERE Id='${idPenerimaan}'`, 
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
      const {namaPengirim, noHPPengirim, nomorKTPPengirim, nomorNPWPPengirim, jenisBarang, layanan, alamatPengirim, dooringFrom, dooringTo, alamatDoorng, namaPenerima, noHPPenerima, noKTPPenerima, shippingLine, namaKapal, noContainer, noBL} = req.body
      const result = await query({
          query : `UPDATE penerimaan SET 
          Nama_Pengirim = '${namaPengirim}',
          No_HP_Pengirim = '${noHPPengirim}',
          Nomor_KTP_Pengirim = '${nomorKTPPengirim}',
          Nomor_NPWP_Pengirim = '${nomorNPWPPengirim}',
          Jenis_Barang = '${jenisBarang}',
          Layanan = '${layanan}',
          Alamat_Pengirim = '${alamatPengirim}',
          Dooring_From = '${dooringFrom}',
          Dooring_To = '${dooringTo}',
          Alamat_Doorng = '${alamatDoorng}',
          Nama_Penerima = '${namaPenerima}',
          No_HP_Penerima = '${noHPPenerima}',
          No_KTP_Penerima = '${noKTPPenerima}',
          Shipping_Line = '${shippingLine}',
          Nama_Kapal = '${namaKapal}',
          No_Container = '${noContainer}',
          No_BL = '${noBL}' 
          WHERE Id = ${idPenerimaan}`,
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