import React, { useEffect, useState } from 'react'
import { cardInfo } from '../CardComponent'

export type clan = {
  id: string
  name: string
  images: string
  characters: never[]
}

export function SearchBar() {
  const [data, setData] = useState<clan[]>([])
  useEffect(() => {
    fetch('https://narutodb.xyz/api/character')
      .then((response) => response.json())
      .then((data) => {
        setData(data.characters)
      })
  }, [])
  return (
    <>
      <div className="px-6 pb-2 pt-4">
        {data?.map((type) => (
          <span
            key={type.id + type.name}
            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
                  {type.name}
                </span>
        ))}
    </>
  )
}
