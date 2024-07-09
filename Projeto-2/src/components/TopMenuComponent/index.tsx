import React, { useEffect, useState } from 'react'
import { clan } from '../types/types'

export function TopMenu({ setClan, filterClan, clearFilterClan }: { setClan : any, filterClan : string, clearFilterClan : any }) {
  const [data, setData] = useState<clan[]>([])
  useEffect(() => {
    fetch('https://narutodb.xyz/api/clan?page=1&limit=100')
      .then((response) => response.json())
      .then((data) => {
        setData(data.clans)
      })
  }, [])
  let filtered: clan[] = [];
  if (filterClan !== '') {
    data?.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterClan.toLowerCase()) === -1) {
        return
      }
      filtered.push(product)
    })
  } else {
    filtered = data;
  }

  return (
    <>
    <div className="grid grid-rows-2 grid-cols-1 gap-1">
      <h1 className="text-2xl font-bold tracking-wider text-center">Select an Clan</h1>
      <button
        className="mt-2 place-self-center w-1/6 rounded-full bg-blue-700 p-2 text-sm font-semibold text-white"
        onClick={clearFilterClan}>
        Clear Filter</button>
    </div>
    <div className="px-6 pb-2 pt-4">
      {filtered?.map((type,index) => (
        <button
          key={index}
          className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          onClick={event => setClan(type.name)}>
          {type.name}
        </button>
      ))}
    </div>
    </>
  )
}
