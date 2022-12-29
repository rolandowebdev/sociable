import Menu from './Menu';
import SearchInput from './SearchInput';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  if (!user) return null;
  return (
    <div className="flex w-full gap-2 py-5 md:gap-5">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Menu user={user} />
    </div>
  );
};

export default Navbar;
