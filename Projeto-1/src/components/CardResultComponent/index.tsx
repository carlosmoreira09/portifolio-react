export default function CardResult({
  scoreP1Win,
  scoreP1Loss,
  scoreP1Draw,
  scoreP2Win,
  scoreP2Loss,
  scoreP2Draw
}: {
  scoreP1Win: number
  scoreP1Loss: number
  scoreP1Draw: number
  scoreP2Win: number
  scoreP2Loss: number
  scoreP2Draw: number
}) {
  return (
    <div className="size-full border border-amber-950 bg-amber-100">
      <div className="grid grid-cols-1">
        <table>
          <thead>
            <tr>
              <th className="text-left"> Jogador</th>
              <th className="text-left"> Vitorias</th>
              <th className="text-left"> Derrotas</th>
              <th className="text-left"> Empates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player 1</td>
              <td>{scoreP1Win}</td>
              <td>{scoreP1Loss}</td>
              <td>{scoreP1Draw}</td>
            </tr>
            <tr>
              <td>Player 2</td>
              <td>{scoreP2Win}</td>
              <td>{scoreP2Loss}</td>
              <td>{scoreP2Draw}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
