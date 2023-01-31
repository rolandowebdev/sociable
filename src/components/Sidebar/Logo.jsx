import { Link } from 'react-router-dom';

function Logo({ handleCloseSidebar }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 px-5 pt-1 mt-6 text-3xl font-extrabold tracking-wide text-transparent uppercase bg-red-500 w-190 bg-clip-text"
      onClick={handleCloseSidebar}>
      Sociable
    </Link>
  );
}

export default Logo;
