'use client'
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import logovertical from "../public/logovertical.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faChevronCircleDown, faChevronDown, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function NavbarMenu() {
    const [isMutate, setIsMutate] = useState(false)
    const {data : session} = useSession()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useRef(null)
    function toggleHandler(){
        toggle.current.classList.contains('open') && toggle.current.classList.replace('open', 'hidden')
    }

    if(!session?.user) {
        return (
            <header className=" flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 fixed">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <div className="w-60">
                            <Image 
                                src={logovertical}
                                className="h-full"
                                alt="logo"
                                priority 
                            />
                        </div>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu" aria-label="Toggle navigation">
                                <FontAwesomeIcon
                                    icon={faBarsStaggered}
                                    className="text-slate-400 text-base"
                                />
                            </button>
                        </div>
                    </div>
                    <div id="navbar-with-mega-menu" ref={toggle} className='hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block hidden'>
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <Link onClick={toggleHandler} href={"/#home"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Beranda</Link>
                        <Link onClick={toggleHandler} href={"/#services"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Service</Link>
                        <Link onClick={toggleHandler} href={"/profile"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                        <Link onClick={toggleHandler} href={"/#kontak"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</Link>
    
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                        <button id="hs-mega-menu-basic-dr" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
                            Layanan
                            <FontAwesomeIcon 
                                icon={faChevronDown}
                                className="text-xs pl-1"
                            />
                        </button>
    
                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden" >
                            <Link onClick={toggleHandler}  href="/cekpengiriman" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                            Cek Pengiriman
                            </Link>
    
                            <Link onClick={toggleHandler}  href="/jadwalkapal" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                            Jadwal Kapal
                            </Link>
                            <Link onClick={toggleHandler}  href="/#simulasipengiriman" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                            Simulasi Pengiriman
                            </Link>
                        </div>
                        </div>
    
                            <div className="flex gap-2">
                                {
                                    isMutate ? (
                                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 w-full sm:w-auto">
                                            <FontAwesomeIcon 
                                            icon={faCircleNotch}
                                            className='animate-spin '
                                            />
                                            Please Wait...
                                        </button>
                                    ) :(
                                        <button onClick={
                                            ()=>{
                                                signIn() 
                                                setIsMutate(true)
                                            }
                                            } type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 w-full sm:w-auto">
                                        Login
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    </nav>
                </header>
        )
    }
  }
  