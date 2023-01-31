import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { googleLogout } from '@react-oauth/google';

import { userQuery, userCreatedPinsQuery, userSavedPinsQuery } from '../../utils/data';
import { client } from '../../utils/sanityClient';

import { Loading } from '..';
import Banner from './Banner';
import TabBar from './TabBar';
import PinWrapper from './PinWrapper';

function UserProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState('Created');

  // TODO: get user data
  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  // TODO: get pins from saved or created
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

  // TODO: logout user google account
  const logout = () => {
    localStorage.clear();
    googleLogout();
    navigate('/login');
  };

  if (!user) return <Loading center message="Loading Profile..." />;

  return (
    <div className="relative items-center justify-center h-full pb-2">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <Banner user={user} userId={userId} logout={logout} />
          <TabBar setText={setText} />
          <PinWrapper pins={pins} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
