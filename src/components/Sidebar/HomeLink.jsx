import { RiHomeFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const HomeLink = ({ linkStatus, handleCloseSidebar }) => {
  return (
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? linkStatus.isActiveStyle : linkStatus.isNotActiveStyle
      }
      onClick={handleCloseSidebar}>
      <RiHomeFill />
      Home
    </NavLink>
  );
};

export default HomeLink;
