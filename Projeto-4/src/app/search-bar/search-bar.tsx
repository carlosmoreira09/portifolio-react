"use client"
import { useState } from 'react'

import { Button } from '@/components/ui/button'


export default function SearchBar() {
  const [search, setSearch] = useState('');
  return (
    <header className="grid grid-cols-3 px-6 border-b h-16">
      <div className="flex flex-row items-center justify-items-start gap-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 44">
          <g fill="none" fillRule="evenodd">
            <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
            <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
          </g>
        </svg>
        <form className="">
          <label htmlFor="default-search"
                 className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text"
                   className={`p-2 ps-10 w-56 h-8 text-sm text-gray-900 rounded-full bg-gray-100 focus:ring-blue-500 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                   placeholder="Search"
                   onChange={(e) => setSearch(e.target.value)} required/>
          </div>
        </form>

      </div>
      <ul className="flex flex-row items-center justify-center gap-6 md:gap-8">
        <li className={`font-light text-gray-600 text-base`}>Launches</li>
        <li className={`font-light text-gray-600 text-base`}>Products</li>
        <li className={`font-light text-gray-600 text-base`}>News</li>
        <li className={`font-light text-gray-600 text-base`}>Community</li>
        <li className={`font-light text-gray-600 text-base`}>Advertise</li>
      </ul>
      <div className="flex flex-row items-center justify-end gap-4 p-2">
        <li className={`flex justify-center bg-orange-50/100 text-pink-500 w-24 py-1.5 list-none rounded text-base`}>Subscribe</li>
        <li className={`flex justify-center bg-red-400/100 text-white w-20 py-1.5 list-none rounded text-base`}><button type="submit">Sign in</button></li>

      </div>
    </header>
  )
}