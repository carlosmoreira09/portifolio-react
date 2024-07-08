import React, { useEffect, useState } from 'react'
import { List } from '../ListComponent'

export type cardInfo = {
  id: string
  name: string
  images: string
  debut: NonNullable<unknown>
  personal: never
  family: never
  jutsu: string[]
  natureType: string[]
  uniqueTraits: string[]
  voiceActors: never
}

export function CardComponent({ data }: { data: cardInfo[] }) {
  return (
    <>
      <div className="ml-5 grid w-full grid-cols-3 gap-1">
        {data.map((character) => (
          <div
            key={character.id}
            className="h-max max-w-sm overflow-hidden rounded shadow-lg"
          >
            <img
              className="w-full"
              src={character.images}
              alt={character.name}
            />
            <div className="px-6 py-4">
              <p className="mb-2 text-xl font-bold">{character.name}</p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold">Jutsu:</p>
                  <List type="No Jutsu" data={character.jutsu} />
                </div>
                <div>
                  <p className="text-xs font-bold">Natural Type:</p>
                  <List type="No Nature Type" data={character.natureType} />
                </div>
              </div>
            </div>
            <div className="px-6 pb-2 pt-4">
              {character.uniqueTraits?.map((type) => (
                <span
                  key={character.id + character.name}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
