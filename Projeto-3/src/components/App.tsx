import { BudgetTable } from './BudgetTable'
import { useEffect, useState } from 'react'
import { BudgetForm } from './BudgetForm'
import { BudgetTotalCosts } from './BudgetTotalCosts'
import { BudgetChart } from './BudgetChart'
import { data } from 'autoprefixer'
import { EventPhaseEnum } from 'happy-dom'

export type Expense = {
  date: string,
  description: string,
  category: string,
  quantity: number
}
const Expenses: Expense[] = [
    {
      date: new Date().toDateString(),
      description: 'Teste',
      category: 'Restaurant',
      quantity: 1
    },
    {
      date: new Date().toDateString(),
      description: 'Teste',
      category: 'Cinema',
      quantity: 1
    },
    {
      date: new Date().toDateString(),
      description: 'Teste',
      category: 'Shopping',
      quantity: 1
    },
    {
      date: new Date().toDateString(),
      description: 'Teste',
      category: 'Lunch',
      quantity: 3
    },
    {
      date: new Date().toDateString(),
      description: 'Teste',
      category: 'Fuel',
      quantity: 2
    }
]
function App() {
  const [budgetData, setBudgetData] = useState<Expense[]>([])
  const [addNewRow, setAddNewRow] = useState<Expense | null>(null)
  const [expense, setNewExpense] = useState<Expense>()

  if(expense) {
    Expenses.push(expense)
    console.log(expense)
  }
  useEffect(() => {
    setBudgetData(Expenses)
    if(expense) {
      Expenses.push(expense)
      console.log(expense)
    }
  }, [])
  function Title({ title }: { title: string }) {
    return (
      <p className="mt-5 w-max p-2 rounded-full text-2xl font-bold tracking-widest text-blue-900 shadow"> {title}</p>
    )
  }

  return (
    <>
      <div className="relative top-16 left-1/3">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Budget</span> Control</h1>
      </div>
      <div className="static w-full grid grid-cols-2 gap-2 mt-16 ">
        <div className="grid">
          <div className="place-self-center">
            <Title title="Chart" />
          </div>
          <div className="mt-3 place-self-center">
            <BudgetChart />
          </div>
        </div>
        <div className="grid">
          <div className="place-self-center">
            <Title title="Total Costs" />
          </div>
          <div className="mt-3 place-self-center w-full">
            <BudgetTotalCosts data={Expenses} />
          </div>
        </div>
        <hr className=" border-gray-300 col-span-2" />

        <div className="col-span-2 place-self-start">
          <BudgetForm setNewExpense={setNewExpense} />
        </div>
        <div className="col-span-2">
          <div className="flex justify-center">
            <Title title="Outgoing" />
          </div>
          <div className="mt-5">
            <BudgetTable data={budgetData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
