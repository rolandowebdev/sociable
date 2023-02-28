import { RiHomeFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export const HomeLink = ({ linkStatus, handleCloseSidebar }) => (
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? linkStatus.isActiveStyle : linkStatus.isNotActiveStyle
    }
    onClick={handleCloseSidebar}>
    <RiHomeFill />
    Home
  </NavLink>
)
