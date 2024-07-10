import { useId } from 'react'

export function BudgetTotalCosts({ data }: { data: any[]}) {
  const rowsCosts: any[] = [];

  function addRow(category: string, quantity: number, date: Date, description: string) {
    const index: string = useId();
    return (
      <tr key={index}>
        <td className="text-center">{date.getDate()}</td>
        <td>{description}</td>
        <td>{category}</td>
      </tr>
    )
  }

  data.map((row: any) => {
    rowsCosts.push(addRow(row.category, row.quantity,row.date,row.description));
  })

  return (
    <>
      <table className="table-auto">
        <thead>
        <tr className="text-center">
          <th className="text-center">
            Category
          </th>
          <th>
            Total
          </th>
          <th>
            Balance Impact
          </th>
        </tr>
        </thead>
        <tbody>
        {rowsCosts}
        </tbody>
      </table>
    </>
  )
}
