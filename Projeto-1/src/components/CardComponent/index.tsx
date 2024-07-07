import { ChangeEvent, useState } from 'react'
import Title from '../PlayerComponent'
import CardResult from '../CardResultComponent'
import ButtonComponent from '../ButtonComponent'

export type Player = {
  value: number
  name: string
}
export type Options = 'Rock' | 'Paper' | 'Scissor'
export type PlayersOptions = {
  value: Options
  name: Options
}

export default function Card() {
  const [playerID, setPlayerID] = useState(0)
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')
  const [playerWin, setPlayerWin] = useState('')
  const [scoreP1Win, setScoreP1Win] = useState(0)
  const [scoreP1Loss, setScoreP1Loss] = useState(0)
  const [scoreDraw, setScoreDraw] = useState(0)
  const [scoreP2Win, setScoreP2Win] = useState(0)
  const [scoreP2Loss, setScoreP2Loss] = useState(0)
  const options: PlayersOptions[] = [
    { value: 'Rock', name: 'Rock' },
    { value: 'Paper', name: 'Paper' },
    { value: 'Scissor', name: 'Scissor' }
  ]
  const optionTemplate = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  ))
  const players: Player[] = [
    { value: 0, name: 'Player 1' },
    { value: 1, name: 'Player 2' }
  ]

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    if (playerID === 0) {
      setPlayerOne(e.target.value)
      setPlayerID(1)
    }
    if (playerID === 1) {
      setPlayerTwo(e.target.value)
      setPlayerID(0)
    }
  }
  function SelectOption() {
    return (
      <select onChange={(e) => handleSelect(e)} className="p-1">
        {optionTemplate}
      </select>
    )
  }
  function reset() {
    setScoreDraw(0)
    setScoreP1Win(0)
    setScoreP1Loss(0)
    setScoreDraw(0)
    setScoreP2Win(0)
    setScoreP2Loss(0)
    setPlayerWin('')
    setPlayerOne('')
    setPlayerTwo('')
    setPlayerID(0)
  }
  function playerOneWin() {
    setScoreP1Win(scoreP1Win + 1)
    setScoreP2Loss(scoreP2Loss + 1)
  }
  function playerTwoWin() {
    setScoreP2Win(scoreP2Win + 1)
    setScoreP1Loss(scoreP1Loss + 1)
  }
  function draw() {
    setScoreDraw(scoreDraw + 1)
  }
  function submit() {
    if (playerOne && playerTwo) {
      if (playerOne === 'Rock' && playerTwo === 'Scissor') {
        setPlayerWin(players[0].name)
        playerOneWin()
      }
      if (playerOne === 'Paper' && playerTwo === 'Scissor') {
        setPlayerWin(players[1].name)
        playerTwoWin()
      }
      if (playerOne === 'Scissor' && playerTwo === 'Scissor') {
        draw()
      }
      if (playerOne === 'Rock' && playerTwo === 'Paper') {
        setPlayerWin(players[0].name)
        playerOneWin()
      }
      if (playerOne === 'Paper' && playerTwo === 'Paper') {
        draw()
      }
      if (playerOne === 'Scissor' && playerTwo === 'Paper') {
        setPlayerWin(players[1].name)
        playerTwoWin()
      }
      if (playerOne === 'Rock' && playerTwo === 'Rock') {
        draw()
      }
      if (playerOne === 'Paper' && playerTwo === 'Rock') {
        setPlayerWin(players[0].name)
        playerOneWin()
      }
      if (playerOne === 'Scissor' && playerTwo === 'Rock') {
        setPlayerWin(players[1].name)
        playerTwoWin()
      }
    }
  }
  return (
    <>
      <div className="w-1/2 grid-cols-2 gap-4 p-5">
        <div className="grid grid-flow-row grid-cols-2 gap-4 border border-amber-950 bg-amber-100 p-5">
          <div className="col-span-1">
            <div className="grid grid-cols-1">
              <div className="m-2">
                <Title playerName={players[playerID]}></Title>
              </div>
              <div className="m-2">
                <SelectOption />
              </div>
              <div className="m-4">
                <ButtonComponent buttonName="Submit" onClick={submit} />
                <ButtonComponent buttonName="reset" onClick={reset} />
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-amber-950 bg-amber-100">
            <p className="flex justify-center">Vencedor: {playerWin} </p>
          </div>
        </div>
        <div>
          <CardResult
            scoreP1Win={scoreP1Win}
            scoreP1Loss={scoreP1Loss}
            scoreP1Draw={scoreDraw}
            scoreP2Win={scoreP2Win}
            scoreP2Loss={scoreP2Loss}
            scoreP2Draw={scoreDraw}
          ></CardResult>
        </div>
      </div>
    </>
  )
}
