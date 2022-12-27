import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';

import { client, urlFor } from '../../utils/sanityClient';
import { pinDetailQuery, pinDetailMorePinQuery } from '../../utils/data';

import { MasonryLayout, Spinner } from '..';

const PinDetail = ({ user }) => {
  const { pinId } = useParams();
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);

  const fetchPinDetail = () => {
    let query = pinDetailQuery(pinId);
    if (query) {
      client.fetch(query).then((data) => {
        setPinDetail(data[0]);
        if (data[0]) {
          query = pinDetailMorePinQuery(data[0]);
          client.fetch(query).then((response) => setPins(response));
        }
      });
    }
  };

  const addComment = () => {
    if (comment) {
      setAddingComment(true);
      client
        .patch(pinId)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [
          {
            comment,
            _key: uuidv4(),
            postedBy: {
              _type: 'postedBy',
              _ref: user._id
            }
          }
        ])
        .commit()
        .then(() => {
          fetchPinDetail();
          setComment('');
          setAddingComment(false);
        });
    }
  };

  useEffect(() => {
    fetchPinDetail();
  }, [pinId]);

  if (!pinDetail) return <Spinner message="Loading pin..." />;

  return (
    <div
      className="flex flex-row m-auto bg-white xl:flex-col"
      style={{ maxWidth: '800px', borderRadius: '32px' }}>
      <div className="flex items-center justify-center flex-initial md:items-start">
        <img
          className="rounded-b-lg rounded-t-3xl"
          src={pinDetail?.image && urlFor(pinDetail?.image).url()}
          alt="user-post"
        />
      </div>
      <div className="flex-1 w-full p-5 xl:min-w-620 ">
        <div className="flex items-center justify-between">
          <a
            className="flex items-center justify-center w-10 h-10 text-left text-black bg-white rounded-full outline-none opacity-75 hover:opacity-100 hover:shadow-md"
            href={`${pinDetail?.image?.asset?.url}?dl=`}
            onClick={(e) => e.stopPropagation()}
            download>
            <MdDownloadForOffline className="text-3xl" />
          </a>
          <a href={pinDetail?.destination} target="_blank" rel="noreferrer">
            {pinDetail?.destination?.length > 20
              ? pinDetail?.destination?.slice(8)
              : pinDetail?.destination}
          </a>
        </div>
        <h1 className="mt-3 text-4xl font-bold break-words">{pinDetail?.title}</h1>
        <p className="mt-3">{pinDetail?.about}</p>
        <Link
          to={`user-profile/${pinDetail?.postedBy?._id}`}
          className="flex items-center gap-2 mt-5 bg-white rounded-lg">
          <img
            className="object-cover w-6 h-6 rounded-full"
            src={pinDetail?.postedBy?.image}
            alt="user-profile"
          />
          <p className="text-sm font-semibold capitalize">{pinDetail?.postedBy?.userName}</p>
        </Link>
        <h2 className="my-5 text-2xl">Comments</h2>
        <div className="overflow-y-auto max-h-370 ">
          {pinDetail?.comments?.map((comment) => (
            <div key={comment?._key} className="flex items-center gap-2 bg-white rounded-lg mt-5i">
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
        <div className="flex flex-wrap gap-3 mt-6">
          <Link to={`user-profile/${pinDetail?.postedBy?._id}`}>
            <img
              className="object-cover w-10 h-10 rounded-md cursor-pointer"
              src={pinDetail?.postedBy?.image}
              alt="user-profile"
            />
          </Link>
          <input
            className="flex-1 p-2 border-2 border-gray-100 outline-none rounded-2xl focus:border-gray-300"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button
            className="px-6 py-2 text-base font-semibold text-white bg-red-500 rounded-full outline-none"
            type="button"
            onClick={addComment}>
            {addingComment ? 'Posting the comment...' : 'Post!'}
          </button>
        </div>
      </div>
      {pins?.length > 0 ? (
        <>
          <h2 className="mt-8 mb-4 text-2xl font-bold text-center">More like this</h2>
          <MasonryLayout pins={pins} />
        </>
      ) : (
        <Spinner message="Loading more pins..." />
      )}
    </div>
  );
};

export default PinDetail;
