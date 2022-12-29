import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-start w-full px-2 border-none rounded-md outline-none bg-gray-50 focus-within:outline-gray-300">
      <IoMdSearch className="ml-1 " fontSize={21} />
      <input
        className="w-full p-2 outline-none bg-gray-50"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        onFocus={() => navigate('/search')}
        onBlur={() => navigate('/')}
      />
    </div>
  );
};

export default SearchInput;
