import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Menu = ({ user }) => {
  return (
    <div className="flex gap-3">
      <Link to={`user-profile/${user?._id}`} className="hidden md:block">
        <img className="h-12 rounded-lg w-14" src={user?.image} alt={user?.username} />
      </Link>
      <Link
        to="create-pin"
        className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-slate-900 md:w-14 md:h-12">
        <IoMdAdd />
      </Link>
    </div>
  );
};

export default Menu;
