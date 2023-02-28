import { googleLogout } from '@react-oauth/google'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from '../../utils/data'
import { client } from '../../utils/sanityClient'
import { Loading } from '../Loading'
import { Banner } from './Banner'
import { PinWrapper } from './PinWrapper'
import { TabBar } from './TabBar'

export const UserProfile = () => {
  const navigate = useNavigate()
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [pins, setPins] = useState(null)
  const [text, setText] = useState('Created')

  useEffect(() => {
    const query = userQuery(userId)
    client.fetch(query).then((data) => {
      setUser(data[0])
    })
  }, [userId])

  useEffect(() => {
    if (text === 'Created') {
      const createdPinsQuery = userCreatedPinsQuery(userId)
      client.fetch(createdPinsQuery).then((data) => {
        setPins(data)
      })
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId)
      client.fetch(savedPinsQuery).then((data) => {
        setPins(data)
      })
    }
  }, [text, userId])

  const logout = () => {
    localStorage.clear()
    googleLogout()
    navigate('/login')
  }

  if (!user) return <Loading center message="Loading Profile..." />

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
  )
}
