import { query } from "./database/db_connection";

export default async function handler(req, res) {
  let message = ''
    if(req.method == "GET"){
      const products = await query({
        query : "SELECT * FROM pengiriman",
        values : []
      })
      res.status(200).json(products)
    }else if(req.method == "POST"){
      const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = req.body
      let message =''

      const addPengiriman = await query({
        query : `INSERT INTO pengiriman (Nama_Pengirim, No_Hp_Pengirim, No_Ktp_Pengirim, No_Npwp_Pengirim, Jenis_Barang, Layanan, Alamat_Pengirim, dari, ke, Alamat_Tujuan, Nama_Penerima, No_Hp_Penerima, No_Ktp_Penerima, Shipping_Line, Nama_Kapal, No_Container, No_Bl) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
        values : [namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl]
      })

      if(addPengiriman.insertId){
        message = 'SUCCESS'
      }else{
        message = 'ERROR'
      }
      res.status(200).json({message : 'message'})

    }
  }