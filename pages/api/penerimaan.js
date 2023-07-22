import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : "SELECT * FROM penerimaan",
        values : []
      })
      res.status(200).json(data)
    }else if(req.method == "POST"){
      const {namaPengirim, noHPPengirim, nomorKTPPengirim, nomorNPWPPengirim, jenisBarang, layanan, alamatPengirim, dooringFrom, dooringTo, alamatDoorng, namaPenerima, noHPPenerima, noKTPPenerima, shippingLine, namaKapal, noContainer, noBL} = req.body

      const result = await query({
        query : `INSERT INTO penerimaan (Nama_Pengirim, No_HP_Pengirim, Nomor_KTP_Pengirim, Nomor_NPWP_Pengirim, Jenis_Barang, Layanan, Alamat_Pengirim, Dooring_From, Dooring_To, Alamat_Doorng, Nama_Penerima, No_HP_Penerima, No_KTP_Penerima, Shipping_Line, Nama_Kapal, No_Container, No_BL) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
        values : [namaPengirim, noHPPengirim, nomorKTPPengirim, nomorNPWPPengirim, jenisBarang, layanan, alamatPengirim, dooringFrom, dooringTo, alamatDoorng, namaPenerima, noHPPenerima, noKTPPenerima, shippingLine, namaKapal, noContainer, noBL]
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