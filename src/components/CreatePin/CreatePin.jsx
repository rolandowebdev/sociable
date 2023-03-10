import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../utils/sanityClient'
import { UploadImage } from './UploadImage'
import { UserInput } from './UserInput'

export const CreatePin = ({ user }) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [destination, setDestination] = useState('')
  const [fields, setFields] = useState(false)
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)

  const uploadPin = () => {
    if (title && about && destination && imageAsset?._id && category) {
      const doc = {
        _type: 'pin',
        title,
        about,
        destination,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id,
          },
        },
        userId: user._id,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id,
        },
        category,
      }
      client.create(doc).then(() => {
        navigate('/')
      })
    } else {
      setFields(true)
      setTimeout(() => {
        setFields(false)
      }, 2000)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-3">
      {fields && (
        <p className="mb-5 text-left text-lightPrimary transition-all duration-150 ease-in">
          Please fill in all fields!
        </p>
      )}
      <div className="flex flex-col w-full gap-5 lg:flex-row">
        <UploadImage imageAsset={imageAsset} setImageAsset={setImageAsset} />
        <UserInput
          title={title}
          about={about}
          destination={destination}
          setAbout={setAbout}
          setDestination={setDestination}
          setTitle={setTitle}
          user={user}
          uploadPin={uploadPin}
          setCategory={setCategory}
          fields={fields}
        />
      </div>
    </div>
  )
}
