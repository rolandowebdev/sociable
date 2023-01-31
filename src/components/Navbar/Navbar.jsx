import Menu from './Menu';
import SearchInput from './SearchInput';

function Navbar({ searchTerm, setSearchTerm, user }) {
  if (!user) return null;
  return (
    <div className="flex w-full gap-3 py-5">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Menu user={user} />
    </div>
  );
}

export default Navbar;
