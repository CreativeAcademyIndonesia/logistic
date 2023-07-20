"use client"
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
const AddProduct = () => {
    const [modal, setModal] = useState(false)
    const [price, setPrice] = useState("")
    const [title, setTitle] = useState("")
    const buttonRef = useRef()
    const router = useRouter()

    function openModal(){
        setModal(!modal)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch (`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}:3000/api/products`, {
            method : "POST", 
            headers : {
                'Content-Type' : 'application/json'
            }, 
            body : JSON.stringify({
                title, 
                price
            })
        })

        const response = await res.json()
        console.log(response)

        setTitle('')
        setPrice('')
        router.refresh()
        buttonRef.current.click();
        setModal(false)
    }
    return (
        <div>
            <button onClick={openModal} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                Add
            </button>

            <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[90] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                                </h3>
                                <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                                <span className="sr-only">Close</span>
                                x
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto">
                                    <input 
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    type="text" 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-slate-600" 
                                    placeholder='title'/>
                                    <input 
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}
                                    type="text" 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-slate-600" 
                                    placeholder='price'/>

                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal" ref={buttonRef}>
                                Close
                                </button>
                                <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" onClick={openModal}>
                                Save changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
