import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Feed, Navbar, PinDetail, Search, CreatePin } from '../../components';

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="px-2 md:px-5">
      <div className="flex items-center px-5">
        <Navbar user={user && user} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full px-2 md:px-5">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user} />} />
          <Route path="/create-pin" element={<CreatePin user={user && user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
