import { query } from "./database/db_connection";

export default async function handler(req, res) {
    if(req.method == "GET"){
      const products = await query({
        query : "SELECT * FROM pengiriman",
        values : []
      })
      res.status(200).json(products)
    }
    // else if(req.method == "POST"){
    //   const title = req.body.title
    //   const price = req.body.price
    //   let message =''
    //   const addProduct = await query({
    //     query : `INSERT INTO products (title, price) VALUES (?, ?)`, 
    //     values : [title, price]
    //   })
    //   if(addProduct.insertId){
    //     message = 'SUCCESS'
    //   }else{
    //     message = 'ERROR'
    //   }

    //   let products = {
    //     id : addProduct.insertId, 
    //     title, 
    //     price
    //   }
    //   res.status(200).json({message, products})
    // }else if(req.method == 'DELETE'){
    //   const deleteProduct = await query({
    //     query : `DELETE FROM products WHERE id='${req.params.id}'`, 
    //     values : []
    //   })

    //   console.log(deleteProduct)

    //   res.status(200).json({message, products})
    // }
  }