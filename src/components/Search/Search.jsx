import { useEffect, useState } from 'react'
import { feedQuery, searchQuery } from '../../utils/data'
import { client } from '../../utils/sanityClient'
import { Loading } from '../Loading'
import { MasonryLayout } from '../MasonryLayout'
import { PinNotFound } from '../PinNotFound'

export const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchTerm) {
      setLoading(true)
      const query = searchQuery(searchTerm.toLowerCase())
      client.fetch(query).then((data) => {
        setPins(data)
        setLoading(false)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [searchTerm])

  return (
    <>
      {loading && <Loading message="Searching or Pins..." />}
      {!pins?.length && searchTerm && !loading ? (
        <PinNotFound />
      ) : (
        <MasonryLayout pins={pins} />
      )}
    </>
  )
}
