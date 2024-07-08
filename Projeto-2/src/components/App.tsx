import { CardComponent, cardInfo } from './CardComponent'
import { SearchBar } from './SearchBar'
import { TopMenu } from './TopMenuComponent'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState<cardInfo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(12)
  useEffect(() => {
    fetch('https://narutodb.xyz/api/character?page=1&limit=2000')
      .then((response) => response.json())
      .then((data) => {
        setData(data.characters)
      })
  }, [])
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <div className="justify-items-center">
          <SearchBar
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <TopMenu />
        <div className="place-self-center">
          <CardComponent data={currentRecords}></CardComponent>
        </div>
      </div>
    </>
  )
}

export default App
