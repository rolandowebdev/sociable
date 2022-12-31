import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-start w-full px-2 border-2 border-transparent rounded-md bg-gray-50 focus-within:border-gray-300">
      <IoMdSearch className="ml-1 text-gray-400" fontSize={21} />
      <input
        className="w-full p-2 outline-none bg-inherit"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pins..."
        onFocus={() => navigate('/search')}
        onBlur={() => navigate('/')}
      />
    </div>
  );
};

export default SearchInput;
