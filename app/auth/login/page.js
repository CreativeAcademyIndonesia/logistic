"use client"
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, useSession  } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const { status } = useSession();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [denied, setDenied] = useState(false)
  const [isMutate, setIsMutate] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setIsMutate(true)
    setDenied(false)
    const res = await signIn('credentials', {
      username : username,
      password : password,
      redirect : false
    })

    if (status === "unauthenticated") {
      setIsMutate(false)
      setDenied(true)
    } else if (status === "authenticated") {
      void router.push("/dashboard");
    }

  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 bg-white'>
      
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">login Sebagai Admin</h5>
              <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
                  <input 
                  value={username}
                  onChange={(e)=>{
                    setUserName(e.target.value)
                  }}
                  type='text' 
                  placeholder='username'
                  name="username" 
                  id="username" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                  <input 
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              {
                !isMutate ? (
                  <button type="submit" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login as Admin</button>
                ) : (
                  <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">  
                    <FontAwesomeIcon 
                    icon={faCircleNotch}
                    className='animate-spin '
                    />
                  </button>
                )
              }

          </form>
          {
            denied && (
              <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Maaf Akses Ditolak </span>
              </div>
            )
          }
      </div>
    </div>
  )
}
