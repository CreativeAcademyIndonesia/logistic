import { query } from "../database/db_connection"
export default async function handler(req, res) {
    const { productId } = req.query
    if(req.method == 'DELETE'){
        const deleteProduct = await query({
          query : `DELETE FROM products WHERE id='${productId}'`, 
          values : []
        })

        let message = ''
        if(deleteProduct.affectedRows > 0 ) {
            message = 'SUCCESS'
        }else{
            message = 'ERROR'
        }
  
        res.status(200).json({message})
    }else if(req.method == 'PATCH') {
        let title = req.body.title
        let price = req.body.price
        const updateProduct = await query({
            query : `UPDATE products SET title ='${title}', price='${price}' WHERE id = ${productId}`,
            values : []
          })
  
          console.log(updateProduct)
        //   let message = ''
        //   if(deleteProduct.affectedRows > 0 ) {
        //       message = 'SUCCESS'
        //   }else{
        //       message = 'ERROR'
        //   }
    }
  }