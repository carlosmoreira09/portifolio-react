import React, { useEffect, useState } from 'react'

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
export type clan = {
  id: string
  name: string
  images: string
  characters: never[]
}

export function CardComponent() {
  const [data, setData] = useState<cardInfo[]>([])

  useEffect(() => {
    fetch('https://narutodb.xyz/api/character?page=1&limit=100')
      .then((response) => response.json())
      .then((data) => {
        setData(data.characters)
      })
  }, [])

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
              <p className="mb-2 text-xl font-bold">Jutsu:</p>
              <ul className="list-disc">
                {!character.jutsu
                  ? 'Sem Jutsu'
                  : character.jutsu?.map((jutsu) => <li>{jutsu}</li>)}
              </ul>
            </div>
            <div className="px-6 pb-2 pt-4">
              {character.natureType?.map((type) => (
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
