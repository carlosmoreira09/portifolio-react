import { CardComponent } from './CardComponent'
import { SearchBar } from './SearchBar'
import { TopMenu } from './TopMenuComponent'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(12)
  const [filterText, setFilterText] = useState('')
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)
  const [clan,setClan] = useState<string>('')
  const [baseUrl, setBaseUrl] = useState<string>('https://narutodb.xyz/api/character?page=1&limit=2000')
  const [filterClan, setFilterClan] = useState<string>('')
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.characters)
      })
  }, [baseUrl])
  function setClanOption(value: string) {
    setBaseUrl('https://narutodb.xyz/api/clan/search?name=' + value)
  }

  function clearFilterClan() {

  }
  return (
    <>
      <div className="grid w-full grid-cols-1">
        <div className="justify-items-center">
          <SearchBar
            filterText={filterText}
            nPages={nPages}
            currentPage={currentPage}
            setPage={setCurrentPage}
            onFilterTextChange={setFilterText}
          />
        </div>
        <TopMenu
          clearFilterClan={clearFilterClan}
        setClan={setClanOption}
        filterClan={filterClan}/>
      <hr />
        <div className="place-self-center">
          <CardComponent
            fullData={data}
            filterData={currentRecords}
            filterText={filterText}
          ></CardComponent>
        </div>
      </div>
    </>
  )
}

export default App
