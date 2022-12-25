/* eslint-disable no-unused-vars */
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Login } from './components';
import { Home } from './page';

const App = () => {
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
