import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import { client } from '../../utils/sanityClient';

function Login() {
  const navigate = useNavigate();
  const user = false;

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
          src="/share.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-blackOverlay">
        <div className="p-5 text-3xl font-extrabold tracking-wide text-transparent uppercase bg-red-500 shadow-xl bg-clip-text">
          Sociable
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
}

export default Login;
