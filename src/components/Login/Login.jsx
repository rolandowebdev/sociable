import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import { client } from '../../utils/sanityClient';
import { shareVideo, logo } from '../../assets';

const Login = () => {
  const user = false;
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const decoded = jwtDecode(response.credential); // jwtDecode use for convert JsonWebToken
    localStorage.setItem('user', JSON.stringify(decoded)); // save data into local storage

    const { name, picture, sub } = decoded;

    const doc = {
      _id: sub,
      _type: 'user',
      username: name,
      image: picture
    };

    // TODO: Make the data user into sanity if data doesn't exist
    client.createIfNotExists(doc).then(() => navigate('/', { replace: true }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-full">
        <video
          className="object-cover w-full h-full"
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2xl">
          {user ? (
            <div>Logged in</div>
          ) : (
            <GoogleLogin
              onSuccess={(credentialResponse) => responseGoogle(credentialResponse)}
              onError={() => console.log('Login Failed')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
