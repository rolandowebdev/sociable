import { Link } from 'react-router-dom';

const PostInfo = ({ pinDetail }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div>
        <h1 className="text-4xl font-bold break-words ">{pinDetail?.title}</h1>
        <p className="mt-2">{pinDetail?.about}</p>
      </div>
      <div className="flex flex-col">
        <p className="mb-1 text-sm text-center">Posted by :</p>
        <Link
          to={`user-profile/${pinDetail?.postedBy?._id}`}
          className="flex items-center gap-1 bg-white rounded-lg">
          <p className="text-sm font-semibold capitalize duration-150 hover:underline hover:text-sky-600">
            {pinDetail?.postedBy?.username}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostInfo;
