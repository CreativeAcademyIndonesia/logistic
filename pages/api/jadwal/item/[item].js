import { query } from "../../database/db_connection";

export default async function handler(req, res) {
    const {item} = req.query
    let message = ''
    if(req.method == "GET"){
      const data = await query({
        query : `SELECT DISTINCT ${item} FROM jadwal;`,
        values : []
      })
      res.status(200).json(data)
  }
}

