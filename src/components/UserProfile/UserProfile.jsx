import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

import { AiOutlineLogout } from 'react-icons/ai';

import { userQuery, userCreatedPinsQuery, userSavedPinsQuery } from '../../utils/data';
import { client } from '../../utils/sanityClient';

import { MasonryLayout, Spinner } from '..';

const randomImage = 'https://source.unsplash.com/1600*900/?nature,photography,technology';

const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles =
  'bg-primary mr-4 text-slate-900 font-bold p-2 rounded-full w-20 outline-none';

const UserProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created');

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (text === 'Created') {
      const createdPinsQuery = userCreatedPinsQuery(userId);
      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);
      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);

  const logout = () => {
    googleLogout();
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return <Spinner message="Loading profile..." />;

  return (
    <div className="relative items-center justify-center h-full pb-2">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-full shadow-lg h-370 2xl:h-510"
              src={randomImage}
              alt="banner-pic"
            />
            <img
              className="object-cover w-20 h-20 -mt-10 rounded-full shadow-xl"
              src={user?.image}
              alt="user-pic"
            />
            <h1 className="mt-3 text-3xl font-bold text-center">{user?.username}</h1>
            <div className="absolute top-0 right-0 z-10 p-2">
              {userId === user?._id && (
                <button
                  className="p-2 mx-2 mr-1 bg-white rounded-full"
                  type="button"
                  onClick={logout}>
                  <AiOutlineLogout color="red" fontSize={21} />
                </button>
              )}
            </div>
          </div>
          <div className="text-center mb-7">
            <button
              className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn('created');
              }}>
              Created
            </button>
            <button
              className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn('saved');
              }}>
              Saved
            </button>
          </div>
          {pins?.length ? (
            <div className="px-2">
              <MasonryLayout pins={pins} />
            </div>
          ) : (
            <p className="text-2xl font-bold text-center text-slate-800">No Pins Found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
