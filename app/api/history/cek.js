import { query } from "../database/db_connection"

export default async function handler(req, res) {
    const { idHistory } = req.query
    if(req.method == 'GET'){ // for tracing pengiriman
        const data = await query({
          query : `
          SELECT pengiriman.No_Container, history.ID_Pengiriman, history.tanggal, history.status, history.deskripsi
          FROM pengiriman
          LEFT JOIN history
          ON pengiriman.ID_Pengiriman=history.ID_Pengiriman
          WHERE pengiriman.No_Container = ${idHistory}
          ORDER BY pengiriman.No_Container;
          `,
          values : []
        })
        res.status(200).json(data)
      }
  }