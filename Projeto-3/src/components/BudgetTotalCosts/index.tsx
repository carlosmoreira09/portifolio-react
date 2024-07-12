import { useId } from 'react'

export function BudgetTotalCosts({ data }: { data: any[]}) {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
        <tr className="text-center">
          <th>
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
        <tbody className="text-center">
        { data.map((row: any) => (
          <tr className="text-center">
            <td>{row.date}</td>
            <td>{row.category}</td>
            <td>{row.description}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
