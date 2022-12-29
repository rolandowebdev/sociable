import { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Login } from './components';
import { Home } from './page';
import { fetchUserData } from './utils/fetchUserData';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUserData();
    if (!user) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
