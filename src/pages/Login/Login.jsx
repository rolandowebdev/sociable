import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import share from '../../assets/share.mp4'
import { client } from '../../utils/sanityClient'

export const Login = () => {
  const navigate = useNavigate()
  const user = false

  const responseGoogle = (response) => {
    const decoded = jwtDecode(response.credential)
    localStorage.setItem('user', JSON.stringify(decoded))
    const { name, picture, sub } = decoded

    const doc = {
      _id: sub,
      _type: 'user',
      username: name,
      image: picture,
    }

    client.createIfNotExists(doc).then(() => navigate('/', { replace: true }))
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-full">
        <video
          className="object-cover w-full h-full"
          src={share}
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
              onSuccess={(credentialResponse) =>
                responseGoogle(credentialResponse)
              }
              onError={() => console.log('Login Failed')}
            />
          )}
        </div>
      </div>
    </div>
  )
}
