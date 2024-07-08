import { CardComponent } from './CardComponent'
import { SearchBar } from './SearchBar'

function App() {
  return (
    <>
      <div className="grid w-10/12 grid-cols-1">
        <div className="justify-items-center">
          <SearchBar />
        </div>
        <div className="place-self-center">
          <CardComponent></CardComponent>
        </div>
      </div>
    </>
  )
}

export default App
