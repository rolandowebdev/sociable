import { Link } from 'react-router-dom'

export const PostInfo = ({ pinDetail: { title, about, postedBy }, user }) => (
  <div className="flex items-center justify-between gap-3 mt-6">
    <div>
      <h1 className="text-4xl font-bold break-words ">
        {title?.length > 30 ? `${title?.slice(0, 30)}...` : title}
      </h1>
      <p className="mt-1">
        {about?.length > 32 ? `${about?.slice(0, 32)}...` : about}
      </p>
    </div>
    <div className="flex flex-col">
      <p className="mb-1 text-sm text-center">Posted by :</p>
      <Link
        to={`/user-profile/${user._id}`}
        className="flex items-center gap-1 bg-white rounded-lg">
        <p className="text-sm font-semibold capitalize duration-150 w-max hover:underline hover:text-red-500">
          {postedBy?.username}
        </p>
      </Link>
    </div>
  </div>
)
