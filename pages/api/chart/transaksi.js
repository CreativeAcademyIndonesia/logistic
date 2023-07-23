import { query } from "../database/db_connection";

export default async function handler(req, res) {
    const { t, count } = req.query // t as table count as column -> Shipping line -> Nama Mitra
    let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : `
        SELECT EXTRACT(YEAR FROM tanggal) as tahun, EXTRACT(MONTH FROM tanggal) as bulan, ${count}, COUNT(${count}) as transaksi
        FROM ${t}
        WHERE EXTRACT(YEAR FROM tanggal) = EXTRACT(YEAR FROM CURRENT_DATE)
        GROUP BY EXTRACT(YEAR FROM tanggal), EXTRACT(MONTH FROM tanggal), ${count}
        ORDER BY tahun, bulan, transaksi DESC;
        `,
        values : []
      })
      res.status(200).json(data)
    }
  }