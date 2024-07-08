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

export function CardComponent({
  data,
  filterText,
  fullData
}: {
  data: cardInfo[] | undefined
  filterText: string
  fullData: cardInfo[]
}) {
  let filtered: cardInfo[] = []

  if (filterText !== '') {
    fullData?.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return
      }
      filtered.push(product)
    })
  } else {
    if (data) {
      filtered = data
    }
  }
  return (
    <>
      <div className="grid w-full grid-cols-3 gap-5 p-5 md:grid-cols-4">
        {!filtered
          ? 'Sem Dados'
          : filtered.map((character) => (
              <div
                key={character.id}
                className="h-auto w-full overflow-hidden rounded shadow-lg shadow-gray-300"
              >
                <img
                  className="w-full"
                  src={character.images}
                  alt={character.name}
                />
                <div className="px-6 py-4">
                  <p className="mb-2 text-xl font-bold">{character.name}</p>
                  <hr />
                  <div className="mt-2 grid grid-cols-2 gap-5">
                    <div>
                      <List type="No Jutsu" data={character.jutsu} />
                    </div>
                    <div>
                      <List type="No Nature Type" data={character.natureType} />
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-2 pt-4">
                  {character.uniqueTraits?.map((type, index) => (
                    <span
                      key={index}
                      className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      Unique Traits: {type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </>
  )
}
