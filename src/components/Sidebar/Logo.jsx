import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const Logo = ({ handleCloseSidebar }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 px-5 pt-1 my-6 w-190"
      onClick={handleCloseSidebar}>
      <img src={logo} alt="logo" className="w-full" />
    </Link>
  );
};

export default Logo;
