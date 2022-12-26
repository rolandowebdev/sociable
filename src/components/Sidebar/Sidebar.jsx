import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';

import { logo, categories } from '../../assets';

const linkStatus = {
  isNotActiveStyle:
    'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize',
  isActiveStyle:
    'flex items-center px-5 gap-3 font-bold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'
};

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between h-full overflow-y-scroll bg-white shadow-lg min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex items-center gap-2 px-5 pt-1 my-6 w-190"
          onClick={handleCloseSidebar}>
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? linkStatus.isActiveStyle : linkStatus.isNotActiveStyle
            }
            onClick={handleCloseSidebar}>
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="px-5 mt-2 text-base font-bold text-gray-500 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? linkStatus.isActiveStyle : linkStatus.isNotActiveStyle
              }
              key={category?.name}
              to={`/category/${category?.link}`}
              onClick={handleCloseSidebar}>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex items-center gap-2 p-2 px-5 py-4 bg-white rounded-lg shadow-lg">
          <img className="w-10 h-10 rounded-full" src={user?.image} alt={user?.username} />
          <p className="text-sm font-bold text-gray-500 uppercase">{user?.username}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
