import { useNavigate, Link } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

import { AiOutlineLogout } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';

const Menu = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    googleLogout();
    navigate('/login');
  };

  return (
    <div className="flex gap-3 w-52">
      <Link className="flex-1 overflow-hidden rounded-md" to={`user-profile/${user?._id}`}>
        <img className="h-full" src={user?.image} alt={user?.username} />
      </Link>
      <Link
        to="create-pin"
        className="flex items-center justify-center flex-1 h-12 text-white border-2 border-red-500 border-solid rounded-md">
        <IoMdCreate color="red" fontSize={21} />
      </Link>
      <button
        className="flex items-center justify-center flex-1 h-12 border-2 border-red-500 border-solid rounded-md"
        type="button"
        onClick={logout}>
        <AiOutlineLogout color="red" fontSize={21} />
      </button>
    </div>
  );
};

export default Menu;
