import { GoogleOAuthProvider } from '@react-oauth/google'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home, Login } from './pages'
import { fetchUserData } from './utils/fetchUserData'

export const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUserData()
    if (!user) navigate('/login', { replace: true })
  }, [])

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}
