export function SearchBar({
  nPages,
  currentPage,
  setCurrentPage
}: {
  nPages: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}) {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  const home = () => {
    setCurrentPage(1)
  }
  const lastPage = () => {
    setCurrentPage(nPages)
  }
  return (
    <>
      <div className="m-5">
        <fieldset className="border border-solid border-gray-300 p-3">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div
              className="relative z-0 flex w-full justify-between -space-x-px rounded-md"
              aria-label="Pagination"
            >
              <button
                type="button"
                onClick={home}
                className="5xl:text-xl relative mr-3 inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed sm:rounded-none sm:rounded-l-md"
                data-id="pagination-prev"
                disabled={currentPage === 1}
              >
                {' '}
                Home{' '}
              </button>
              <button
                type="button"
                onClick={goToPrevPage}
                className="5xl:text-xl relative inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed sm:rounded-none sm:rounded-l-md"
                data-id="pagination-prev"
                disabled={currentPage === 1}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="size-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous Page
              </button>
              <legend className="w-8/12 p-2 text-sm">
                Search an Naruto Character:
                <input
                  className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 shadow-md focus:border-blue-600 focus:ring-blue-600 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  type="text"
                />
              </legend>
              <button
                onClick={goToNextPage}
                type="button"
                className="5xl:text-xl relative inline-flex items-center rounded-md border border-gray-300 bg-white   p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed sm:rounded-none sm:rounded-r-md"
                data-id="pagination-next"
                disabled={currentPage === nPages}
              >
                Next Page
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="size-5"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                onClick={lastPage}
                className="5xl:text-xl relative inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed sm:rounded-none sm:rounded-l-md"
                data-id="pagination-prev"
                disabled={currentPage === nPages}
              >
                {' '}
                Last Page{' '}
              </button>
            </div>
          </div>
          <p className="flex justify-center">
            {' '}
            Showing page {currentPage} of {nPages}.
          </p>
        </fieldset>
      </div>
    </>
  )
}
