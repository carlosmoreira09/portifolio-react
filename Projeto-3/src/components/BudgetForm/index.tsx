import { useState} from 'react'
import { Expense } from '../App'
export function BudgetForm({ setNewExpense }: { setNewExpense: any }) {
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    setQuantity(event.target.quantity.value)
    setCategory(event.target.category.value)
    setPrice(event.target.price.value)
    setDate(event.target.date.value)
    setDescription(event.target.description.value)
    const addExpense: Expense = {
      category: category,
      quantity: parseInt(quantity),
      date: 'teste',
      description: description
    }
    console.log(addExpense)
    setNewExpense(addExpense)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3 grid-flow-col place-items-center p-2">
        <div className="my-auto">
          <p
            className="w-max p-2 rounded text-xl font-bold tracking-widest text-blue-900 shadow-blue-400 shadow">Add
            New</p>
        </div>
        <div
          className="border border-solid border-gray-300 w-max">
          <div className="grid grid-cols-5 gap-2 h-14 place-items-center p-3">
            <div className="">
              <input
                onChange={(e) => console.log(new Date(e.target.value))}
                className="py-3 px-5 h-8 block w-full bg-gray-50 border border-gray-300 rounded-full text-sm shadow-md  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="date"
                name="date"
                placeholder="Data"
              />
            </div>
            <div className="">
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="py-3 px-5 h-8 block w-full bg-gray-50 border border-gray-300 rounded-full text-sm shadow-md  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="text"
                name="price"
                placeholder="Value"
              />
            </div>
            <div>
              <input
                onChange={(e) => setDescription(e.target.value)}
                className="py-3 px-5 h-8 block w-full bg-gray-50 border border-gray-300 rounded-full text-sm shadow-md  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>


            <div>
              <input
                onChange={(e) => setCategory(e.target.value)}
                className="py-3 px-5 h-8 block w-full bg-gray-50 border border-gray-300 rounded-full text-sm shadow-md  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="text"
                name="category"
                placeholder="Category"
              />
            </div>

            <div>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                className="py-3 px-5 h-8 block w-full bg-gray-50 border border-gray-300 rounded-full text-sm shadow-md  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="number"
                name="quantity"
                placeholder="quantity"
              />
            </div>
          </div>
        </div>
        <div className="place-self-start ml-2 my-auto">
          <button
            className="font-medium border border-blue-600 rounded-xl text-blue-600 dark:text-blue-500 hover:underline hover:bg-blue-300 hover:text-white"
            type="submit">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </form>

    </>
  )
}
