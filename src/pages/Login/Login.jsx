import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../utils/sanityClient'

export const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

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
    <div className="flex h-screen">
      <div className="flex-1">
        <img
          className="object-cover h-full w-full"
          src="/assets/sociable.webp"
          alt="sociable banner"
        />
      </div>
      <div className="flex flex-1 bg-pattern flex-col items-center justify-center">
        <div className="text-3xl mb-3 font-extrabold tracking-wide text-white uppercase">
          Sociable
        </div>
        <div className="shadow-2xl">
          {error ? (
            <p className="text-gray-500 text-lg">Login failed, try again...</p>
          ) : (
            <GoogleLogin
              onSuccess={(credentialResponse) =>
                responseGoogle(credentialResponse)
              }
              onError={() => setError(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
