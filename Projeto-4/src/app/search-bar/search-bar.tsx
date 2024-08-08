"use client"
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'

export default function SearchBar() {
  const [search, setSearch] = useState('');
  return (
    <div className="grid grid-cols-3 px-6">
      <div className="flex flex-row items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 44">
        <g fill="none" fillRule="evenodd">
          <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
          <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
        </g>
      </svg>
        <Input type="text" className={`rounded-full`} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
    </div>
      <ul className="flex flex-row items-center justify-center gap-6 md:gap-8">
        <li>Lauches</li>
        <li>Lauches</li>
        <li>Lauches</li>
        <li>Lauches</li>
        <li>Lauches</li>

      </ul>
      <div className="flex flex-row items-center justify-end gap-4 p-2">
        <Button type="submit">Subscribe</Button>
        <Button type="submit">Sign in</Button>

      </div>
    </div>
  )
}