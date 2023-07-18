"use client"
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function Home() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const res = await signIn('credentials', {
      username : username,
      password : password,
      redirect : false
    })
    console.log(res)
  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 bg-blue-400'>
        <form onSubmit={handleSubmit}>
            <h1>Silahkan Login</h1>
            <input 
            className='text-slate-700'
            value={username}
            onChange={(e)=>{
              setUserName(e.target.value)
            }}
            type='text' 
            name='username' 
            placeholder='username' />
            <input 
            className='text-slate-700'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type='password' 
            name='password' 
            placeholder='Password' />
            <button>Login</button>
        </form>
    </div>
  )
}
