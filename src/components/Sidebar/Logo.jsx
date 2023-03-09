import { Link } from 'react-router-dom'

export const Logo = ({ handleCloseSidebar }) => (
  <Link
    to="/"
    className="flex items-center gap-2 px-5 pt-1 mt-6 text-3xl font-extrabold tracking-wide text-transparent uppercase bg-primary w-190 bg-clip-text"
    onClick={handleCloseSidebar}>
    Sociable
  </Link>
)
