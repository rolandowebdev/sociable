import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { logo } from '../../assets';
import { Sidebar } from '../../components';

const MobileSidebar = ({ user }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="flex flex-row md:hidden">
      <div className="flex flex-row items-center justify-between w-full p-2 shadow-md">
        <HiMenu className="cursor-pointer" fontSize={40} onClick={() => setToggleSidebar(true)} />
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img className="w-28" src={user?.image} alt={user?.username} />
        </Link>
      </div>
      {toggleSidebar && (
        <div className="fixed z-10 w-4/5 h-screen overflow-y-auto bg-white shadow-md animate-slide-in">
          <div className="absolute flex items-center justify-end w-full p-2">
            <AiFillCloseCircle
              fontSize={30}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          <Sidebar user={user && user} closeToggle={setToggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
