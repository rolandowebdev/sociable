import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { feedQuery, searchQuery } from '../../utils/data'
import { client } from '../../utils/sanityClient'
import { Loading } from '../Loading'
import { MasonryLayout } from '../MasonryLayout'
import { PinNotFound } from '../PinNotFound'

export const Feed = () => {
  const [pins, setPins] = useState(null)
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    if (categoryId) {
      const categoryQuery = searchQuery(categoryId)
      client
        .fetch(categoryQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      client
        .fetch(feedQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  }, [categoryId])

  if (loading) return <Loading center message="Pins Loading..." />
  if (!pins?.length) return <PinNotFound />

  return pins && <MasonryLayout pins={pins} />
}
