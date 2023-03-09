import { BsUpload } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Menu = ({ user }) => (
  <div className="flex gap-3">
    <Link
      to="create-pin"
      className="flex text-[15px] items-center px-3 justify-center text-lightPrimary border-2 border-lightPrimary hover:bg-primary hover:text-white duration-200 rounded-md">
      <BsUpload size={20} />
    </Link>
    <Link
      className="w-12 overflow-hidden bg-black rounded-md"
      to={`user-profile/${user?._id}`}>
      <img className="w-full h-full" src={user?.image} alt={user?.username} />
    </Link>
  </div>
)
