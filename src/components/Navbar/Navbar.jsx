import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch, IoMdAdd } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex w-full gap-2 py-5 md:gap-5">
      <div className="flex items-center justify-start w-full px-2 border-none rounded-md outline-none bg-gray-50 focus-within:outline-gray-500">
        <IoMdSearch className="ml-1 " fontSize={21} />
        <input
          className="w-full p-2 outline-none bg-gray-50"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          onFocus={() => navigate('/search')}
        />
      </div>
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
    </div>
  );
};

export default Navbar;
