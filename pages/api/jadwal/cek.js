import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { namaKapal, tanggalETD, ruteTujuan, rutePanjang } = req.query
    if(req.method == 'GET'){
        const data = await query({
            query : `
            SELECT * FROM jadwal 
                WHERE Nama_Kapal LIKE '%${namaKapal}%' 
                AND Date_RangeETD = '${tanggalETD}' 
                AND Rute_dan_Tujuan = '${ruteTujuan}' 
                AND Rute_Panjang = '${rutePanjang}';
            `,
            values : []
        })
        res.status(200).json(data)
    }
  }