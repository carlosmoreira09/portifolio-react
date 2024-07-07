import { Player } from '../CardComponent'

export default function Title({ playerName }: { playerName: Player }) {
  return <p className="p-1">{playerName.name}</p>
}
