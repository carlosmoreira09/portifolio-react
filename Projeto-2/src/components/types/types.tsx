export type clan = {
  id: string
  name: string
  images: string
  characters: cardInfo[]
}
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
export type SearchBarProps = {
  filterText: string
  nPages: number
  currentPage: number
  setPage: (page: number) => void
  onFilterTextChange: (page: string) => void
}

 export const apiUrl = {
  clan: 'https://narutodb.xyz/api/clan',
  char: 'https://narutodb.xyz/api/character?page=1&limit=2000',
}
