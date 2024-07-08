import React, { useId } from 'react'
export function List({ data, type }: { data: string[]; type: string }) {
  const id = useId()
  return (
    <ul className="list-disc text-sm">
      {!data ? type : data?.map((jutsu) => <li key={parseInt(id)}>{jutsu}</li>)}
    </ul>
  )
}
