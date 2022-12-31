import React from 'react';

const CommentList = ({ pinDetail }) => {
  const commentLength = pinDetail?.comments?.length;
  return (
    <>
      <h2 className="mt-6 mb-2 font-semibold text-md">{commentLength || 0} Comments</h2>
      <div className="mt-3 overflow-y-auto">
        {pinDetail?.comments?.map((comment) => (
          <div key={comment?._key} className="flex items-center gap-2 mb-3 bg-white rounded-lg">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src={comment?.postedBy?.image}
              alt="user-profile"
            />
            <div className="flex flex-col">
              <p className="font-bold">{comment?.postedBy?.username}</p>
              <p>{comment?.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
