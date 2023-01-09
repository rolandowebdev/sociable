import { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { client } from '../../utils/sanityClient';
import { userQuery } from '../../utils/data';
import { fetchUserData } from '../../utils/fetchUserData';

import { UserProfile } from '../../components';

import MobileSidebar from './MobileSidebar';
import Pins from '../Pins/Pins';
import DesktopSidebar from './DesktopSidebar';

const Home = () => {
  const scrollRef = useRef(null);
  const [user, setUser] = useState(null);

  const userInfo = fetchUserData();

  // TODO: fetch data user from local storage
  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  // TODO: makes the scrollRef default to the first time the page renders
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-screen duration-75 ease-out bg-white md:flex-row transition-height">
      <DesktopSidebar user={user && user} />
      <MobileSidebar />
      <div className="flex-1 h-screen pb-2 overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
