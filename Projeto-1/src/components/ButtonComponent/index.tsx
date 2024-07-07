export default function ButtonComponent({
  buttonName,
  onClick
}: {
  buttonName: string
  onClick?: () => void
}) {
  return (
    <>
      <button
        className="m-2 rounded bg-amber-950 p-2 text-amber-50 hover:bg-amber-800"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  )
}
