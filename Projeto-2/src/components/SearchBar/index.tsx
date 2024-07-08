
export function SearchBar() {

  return (
    <>
      <div className="m-5">
        <fieldset className="border border-solid border-gray-300 p-3">
          <legend className="text-sm">Search an Naruto Character:</legend>
          <input
            className="block h-10 w-10/12 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 shadow-md focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            type="text"
          />
        </fieldset>
      </div>
    </>
  )
}
