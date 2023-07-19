"use client"
import React from 'react';
import { useRouter } from 'next/navigation';


const DeleteProduct = (prodcut) => {
    const router = useRouter()

    async function handleDelete(id) {
        const res = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}:3000/api/products/${id}`, {
            method : "DELETE"
        })
        const response = await res.json()
        console.log(response)
        if(response.message == "success") return; 
        router.refresh()
    }

    
    return (
        <button 
            type="button" 
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" 
            onClick={()=> handleDelete(prodcut.id)}
            >
            Delete {prodcut.id}
        </button>
    );
}

export default DeleteProduct;
