import { categories } from '../../utils/categories';

import Categories from './Categories';
import HomeLink from './HomeLink';
import Logo from './Logo';

const linkStatus = {
  isNotActiveStyle:
    'flex items-center px-5 gap-3 text-gray-500 hover:text-slate-900 hover:font-semibold transition-all duration-200 ease-in-out capitalize',
  isActiveStyle:
    'flex items-center px-5 gap-3 font-bold border-r-2 border-red-500 transition-all duration-200 ease-in-out capitalize text-red-500'
};

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => closeToggle && closeToggle(false);
  return (
    <div className="flex flex-col justify-between h-full overflow-y-scroll bg-white shadow-lg min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Logo />
        <div className="flex flex-col gap-5 my-6">
          <HomeLink handleCloseSidebar={handleCloseSidebar} linkStatus={linkStatus} />
          <Categories
            categories={categories}
            handleCloseSidebar={handleCloseSidebar}
            linkStatus={linkStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
