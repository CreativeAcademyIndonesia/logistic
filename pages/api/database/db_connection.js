
import mysql from "mysql2/promise"

export async function query({query, values = [] }){
    // create the connection to database
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        // password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });

    try{
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end()
        console.log('ok')
        return results
    }catch(error){
        console.log('err')
        throw Error(error.message)
        return {error}

    }
  
}