'use client'

interface ViewUserButtonProps {
  userId: number,
}
const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`userId : ${userId}`);
  return (
    <div>
      <button className="bg-yellow-300 text-indigo-950 py-2 px-4 rounded-lg my-4" onClick={handleClick}>Lihat User</button>
    </div>
  )
}

export default ViewUserButton
