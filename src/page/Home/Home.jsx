/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { client } from '../../utils/sanityClient';
import { userQuery } from '../../utils/data';
import { logo } from '../../assets';

import Pins from '../Pins/Pins';
import { Sidebar, UserProfile } from '../../components';
import { fetchUserData } from '../../utils/fetchUserData';

const Home = () => {
  const scrollRef = useRef(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);
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
      <div className="flex-initial hidden h-screen md:flex">
        <Sidebar user={user && user} />
      </div>
      <div className="flex flex-row md:hidden">
        <div className="flex flex-row items-center justify-between w-full p-2 shadow-md">
          <HiMenu className="cursor-pointer" fontSize={40} onClick={() => setToggleSidebar(true)} />
          <Link to="/">
            <img className="w-28" src={logo} alt="logo" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img className="w-28" src={user?.image} alt={user?.username} />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed z-10 w-4/5 h-screen overflow-y-auto bg-white shadow-md animate-slide-in">
            <div className="absolute flex items-center justify-end w-full p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
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
