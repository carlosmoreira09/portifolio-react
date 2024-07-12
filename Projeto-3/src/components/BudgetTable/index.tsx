
export function BudgetTable({ data }: { data: any[]}) {

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
        {  data.map((row: any) => (
          <tr className="text-center">
            <td>{row.date}</td>
            <td>{row.category}</td>
            <td>{row.description}</td>
            <td>{row.date}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
