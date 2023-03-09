import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreatePin, Feed, Navbar, PinDetail, Search } from '../../components'

export const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="px-5 md:px-10">
      <div className="flex items-center">
        <Navbar
          user={user && user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user && user} />}
          />
          <Route
            path="/create-pin"
            element={<CreatePin user={user && user} />}
          />
          <Route path="/search" element={<Search searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </div>
  )
}
