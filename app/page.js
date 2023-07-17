"use client"

import Image from 'next/image'
import {signIn} from 'next-auth/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-400">
      <button onClick={()=>signIn()}>Login</button>
    </main>
  )
}
