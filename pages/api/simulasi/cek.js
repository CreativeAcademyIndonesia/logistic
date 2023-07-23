import { query } from "../database/db_connection";

export default async function handler(req, res) {
    let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : `SELECT * FROM simulasi WHERE Kota_Asal = '${req.query.asal}' AND Kota_Tujuan = '${req.query.tujuan}'`,
        values : []
      })
      res.status(200).json(data)
    }
}
