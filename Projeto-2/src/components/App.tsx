import { CardComponent, cardInfo } from './CardComponent'
import { SearchBar } from './SearchBar'
import { TopMenu } from './TopMenuComponent'
import { useEffect, useState, useCallback } from 'react'

function App() {
  const [data, setData] = useState<cardInfo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(12)
  const [filterText, setFilterText] = useState('')
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)
  useEffect(() => {
    fetch('https://narutodb.xyz/api/character?page=1&limit=2000')
      .then((response) => response.json())
      .then((data) => {
        setData(data.characters)
      })
  }, [data])

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <div className="justify-items-center">
          <SearchBar
            filterText={filterText}
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onFilterTextChange={setFilterText}
          />
        </div>
        <TopMenu />
        <div className="place-self-center">
          <CardComponent
            fullData={data}
            data={currentRecords}
            filterText={filterText}
          ></CardComponent>
        </div>
      </div>
    </>
  )
}

export default App
