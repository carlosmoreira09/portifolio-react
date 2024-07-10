import { useId } from 'react'

export function BudgetTable({ data }: { data: any[]}) {
  const rows: any[] = [];

  function addRow(category: string, quantity: number, date: Date, description: string) {
    const id: string = useId();
   return (
     <tr key={id} className="text-center">
       <td>{date.getDate()}</td>
       <td>{description}</td>
       <td>{category}</td>
       <td>{quantity}</td>
     </tr>
   )
  }

  data.map((row: any) => {
    rows.push(addRow(row.category, row.quantity,row.date,row.description));
  })

  return (
    <>

      <table className="w-full">
        <thead>
        <tr>
          <th>
            Date
          </th>
          <th>
            Description
          </th>
          <th>
            Category
          </th>
          <th>
            Quantity
          </th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </>
  )
}
