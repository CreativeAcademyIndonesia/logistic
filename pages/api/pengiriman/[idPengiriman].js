import { query } from "../database/db_connection"

export default async function handler(req, 
  res) {
    const { idPengiriman } = req.query
    if(req.method == 'DELETE'){
        const deletePengiriman = await query({
          query : `DELETE FROM pengiriman WHERE ID_Pengiriman='${idPengiriman}'`, 
          values : []
        })

        let message = ''
        if(deletePengiriman.affectedRows > 0 ) {
            message = 'SUCCESS'
        }else{
            message = 'ERROR'
        }
        res.status(200).json({message})

    }else if(req.method == 'PATCH') {
      const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = req.body
      const updatePengiriman = await query({
          query : `UPDATE pengiriman SET 
          Nama_Pengirim = '${namaPengirim}',
          No_Hp_Pengirim = '${noHpPengirim}',
          No_Ktp_Pengirim = '${noKtpPengirim}',
          No_Npwp_Pengirim = '${noNpwpPengirim}',
          Jenis_Barang = '${jenisBarang}',
          Layanan = '${layanan}',
          Alamat_Pengirim = '${alamatPengirim}',
          dari = '${from}',
          ke = '${to}',
          Alamat_Tujuan = '${alamatTujuan}',
          Nama_Penerima = '${namaPenerima}',
          No_Hp_Penerima = '${noHpPenerima}',
          No_Ktp_Penerima = '${noKtpPenerima}',
          Shipping_Line = '${shipingLine}',
          Nama_Kapal = '${namaKapal}',
          No_Container = '${noContainer}',
          No_Bl = '${noBl}'
          WHERE ID_Pengiriman = ${idPengiriman}`,
          values : []
        })

        let message = ''
        if(updatePengiriman.affectedRows > 0 ) {
            message = 'SUCCESS'
        }else{
            message = 'ERROR'
        }
      res.status(200).json({message: 'ok'})
    }
  }