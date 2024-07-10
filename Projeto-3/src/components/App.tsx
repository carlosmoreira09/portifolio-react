import { BudgetTable } from './BudgetTable'
import { useEffect, useState } from 'react'
import { BudgetForm } from './BudgetForm'
import { BudgetTotalCosts } from './BudgetTotalCosts'
import { BudgetChart } from './BudgetChart'
function App() {
  const [budgetData, setBudgetData] = useState<any[]>([])
  const [category, setCategory] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const data = [
    {
      date: new Date(),
      description: 'Teste',
      category: 'Restaurant',
      quantity: 1
    },
    {
      date: new Date(),
      description: 'Teste',
      category: 'Cinema',
      quantity: 1
    },
    {
      date: new Date(),
      description: 'Teste',
      category: 'Shopping',
      quantity: 1
    },
    {
      date: new Date(),
      description: 'Teste',
      category: 'Lunch',
      quantity: 3
    },
    {
      date: new Date(),
      description: 'Teste',
      category: 'Fuel',
      quantity: 2
    },
  ]
  useEffect(() => {
    setBudgetData(data)
  }, [])
  function Title({ title }: { title: string }) {
    return (
      <p className="mt-5 w-max p-2 rounded-full text-2xl font-bold tracking-widest text-blue-900 shadow"> {title}</p>
    )
  }
  return (
    <>
      <div className="relative top-20 left-1/3">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Budget</span> Control</h1>
      </div>
      <div className="static w-full grid grid-cols-2 gap-2 mt-36 ">
        <div className="relative">
          <div className="absolute top-56 right-1/2">
            <Title title="Chart" />
          </div>
          <div className="place-self-center">
            <BudgetChart />
          </div>
        </div>
        <div className="place-items-center">
          <div className="">
            <Title title="Total Costs" />
          </div>
          <div className="place-self-center">
            {/*<BudgetTotalCosts data={budgetData} />*/}
          </div>
        </div>
        <hr className=" border-gray-300 col-span-2" />

        <div className="col-span-2 place-self-start">
          <BudgetForm addExpense={setCategory} />
        </div>
        <div className="col-span-2">
          <hr className=" border-gray-300 m-5" />
          <div className="mt-5 flex justify-center">
            <Title title="Outgoing" />
          </div>
          <div className="mt-10">
            <BudgetTable data={budgetData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
