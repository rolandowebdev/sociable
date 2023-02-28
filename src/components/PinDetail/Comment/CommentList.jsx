import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Comment } from './Comment'

export const CommentList = ({ pinDetail: { comments }, user }) => {
  const [showComment, setShowComment] = useState(true)

  const commentLength = comments?.length
  return (
    <>
      <div className="flex items-center gap-2 mt-6 mb-2 text-lg">
        <h2 className="font-bold ">
          {commentLength || 0} {commentLength > 1 ? 'Comments' : 'Comment'}
        </h2>
        <button
          onClick={() => setShowComment(!showComment)}
          className="p-2 rounded-full group hover:bg-gray-300"
          type="button">
          <IoIosArrowDown className={`${!showComment && '-rotate-90'}`} />
        </button>
      </div>
      {showComment &&
        comments?.map((comment) => (
          <Comment key={comment?._key} comment={comment} user={user} />
        ))}
    </>
  )
}
