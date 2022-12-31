import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';

const CommentList = ({ pinDetail, user }) => {
  const [likeMessage, setLikeMessage] = useState(false);
  const commentLength = pinDetail?.comments?.length;

  return (
    <>
      <h2 className="mt-6 mb-4 font-semibold text-md">
        {commentLength || 0} {commentLength > 1 ? 'Comments' : 'Comment'}
      </h2>
      {pinDetail?.comments?.map((comment) => (
        <div key={comment?._key} className="flex gap-2 mb-5 rounded-lg bg-red last:mb-0">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={comment?.postedBy?.image}
            alt="user-profile"
          />
          <div className="flex flex-col gap-[2px]">
            <div className="flex gap-1 text-sm">
              <Link to={`/user-profile/${user._id}`} className="mr-1 font-semibold hover:underline">
                {comment?.postedBy?.username}
              </Link>
              <p>{comment?.comment}</p>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <p className="mr-5">6mo</p>
              <p className="mr-3">Reply</p>
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                type="button"
                onClick={() => setLikeMessage(!likeMessage)}>
                {likeMessage ? (
                  <BsSuitHeartFill color="#ef4444" size={12} />
                ) : (
                  <BsSuitHeart size={12} />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
