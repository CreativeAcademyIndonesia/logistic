import { query } from "../database/db_connection";

export default async function handler(req, res) {
    const { t } = req.query // t as table count as column -> Shipping line -> Nama Mitra
    let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : `
        SELECT
        DATE_FORMAT(tanggal, '%Y') AS tahun,
        CASE DATE_FORMAT(tanggal, '%m')
            WHEN '01' THEN 'Jan'
            WHEN '02' THEN 'Feb'
            WHEN '03' THEN 'Mar'
            WHEN '04' THEN 'Apr'
            WHEN '05' THEN 'May'
            WHEN '06' THEN 'Jun'
            WHEN '07' THEN 'Jul'
            WHEN '08' THEN 'Aug'
            WHEN '09' THEN 'Sep'
            WHEN '10' THEN 'Oct'
            WHEN '11' THEN 'Nov'
            WHEN '12' THEN 'Dec'
        END AS bulan,
        COUNT(*) AS jumlah_transaksi
    FROM ${t}
    WHERE DATE_FORMAT(tanggal, '%Y') = YEAR(CURRENT_DATE())
    GROUP BY DATE_FORMAT(tanggal, '%Y'), DATE_FORMAT(tanggal, '%m')
    ORDER BY tahun, bulan;

        `,
        values : []
      })
      res.status(200).json(data)
    }
  }