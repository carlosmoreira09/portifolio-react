
export function List({ data, type }: { data: string[]; type: string }) {
  return (
    <>
      <p className="text-xs font-bold">
        {type.match('Jutsu') ? 'Jutsu' : 'Natural Type'}:
      </p>
      <ul className="list-disc text-sm">
        {!data
          ? type
          : data?.map((jutsu) => <li key={jutsu}>{jutsu}</li>)}
      </ul>
    </>
  )
}
