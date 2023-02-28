import { urlFor } from '../../utils/sanityClient'

export const PostImage = ({ pinDetail: { image } }) => (
  <div className="flex-1">
    <img
      className="rounded-md"
      src={image && urlFor(image).url()}
      alt="user-post"
    />
  </div>
)
