import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../utils/sanityClient'

export const SavePin = ({ save, user, _id }) => {
  const [savingPost, setSavingPost] = useState(false)

  const alreadySaved = !!save?.filter(
    (item) => item?.postedBy?._id === user?.sub
  )?.length

  const savePin = (id) => {
    if (!alreadySaved) {
      setSavingPost(true)
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [
          {
            _key: uuidv4(),
            userId: user?.sub,
            postedBy: {
              _type: 'postedBy',
              _ref: user?.sub,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload()
          setSavingPost(false)
        })
    }
  }

  if (alreadySaved) {
    return (
      <button className="text-xs save-btn" type="button">
        {save?.length} Saved
      </button>
    )
  }

  return (
    <button
      className="text-xs save-btn"
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        savePin(_id)
      }}>
      {!savingPost && save?.length} {savingPost ? 'Saving...' : 'Save'}
    </button>
  )
}
