import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { urlFor, client } from '../../utils/sanityClient';
import { fetchUserData } from '../../utils/fetchUserData';

const Pin = ({ pin: { postedBy, image, _id, destination, save } }) => {
  const [postHovered, setPostHovered] = useState(false);

  const navigate = useNavigate();
  const user = fetchUserData(); // fetching all user

  /**
   * How the filter function work's here :
   * userId is -> 1 | array of user -> [2,3,1] -> [1].length -> result : 1.
   * * id from postedBy is the same with userId because user post the image with userId
   * * (!!) <- this mark will return boolean
   */

  const alreadySaved = !!save?.filter((item) => item?.postedBy?._id === user?.sub)?.length;

  const savePin = (id) => {
    if (!alreadySaved) {
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [
          {
            _key: uuidv4(),
            userId: user?.sub,
            postedBy: {
              _type: 'postedBy',
              _ref: user?.sub
            }
          }
        ])
        .commit() // send data into sanity
        .then(() => {
          window.location.reload();
        });
    }
  };

  const deletePin = (id) => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  };

  if (!image) return null;

  return (
    <div className="m-2">
      <div
        className="relative w-auto overflow-hidden transition-all duration-500 ease-in-out rounded-lg cursor-zoom-in hover:shadow-lg"
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onKeyDown={() => setPostHovered(true)}
        onClick={() => navigate(`/pin-detail/${_id}`)}>
        <img className="w-full rounded-lg" src={urlFor(image).width(250).url()} alt="user-post" />
        {postHovered && (
          <div
            className="absolute top-0 z-50 flex flex-col justify-between w-full h-full p-1 pt-2 pb-2 pr-2"
            style={{ height: '100%' }}>
            <div className="flex justify-between">
              {/* download action */}
              <div className="flex gap-2 mx-1">
                <a
                  className="flex items-center justify-center text-left bg-white rounded-full outline-none opacity-75 text-slate-900 w-7 h-7 hover:opacity-100 hover:shadow-md"
                  href={`${image?.asset?.url}?dl=`}
                  onClick={(e) => e.stopPropagation()}
                  download>
                  <MdDownloadForOffline className="text-sm" />
                </a>
              </div>
              {/* saved action */}
              {alreadySaved ? (
                <button className="text-xs save-btn" type="button">
                  {save.length} Saved
                </button>
              ) : (
                <button
                  className="text-xs save-btn"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    savePin(_id);
                  }}>
                  Save
                </button>
              )}
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              {destination && (
                <a
                  className="flex items-center gap-2 p-2 pl-4 pr-4 text-[10px] font-bold text-slate-900 bg-white rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
                  href={destination}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <BsFillArrowUpRightCircleFill className="text-xs" />
                  {destination?.length > 15 ? `${destination?.slice(0, 15)}...` : destination}
                </a>
              )}
              {postedBy?._id === user?.sub && (
                <button
                  className="p-2 text-base font-bold bg-white outline-none text-slate-900 opacity-70 hover:opacity-100 rounded-3xl hover:shadow-md"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePin(_id);
                  }}>
                  <AiTwotoneDelete className="text-xs" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Link to={`user-profile/${postedBy?._id}`} className="flex items-center gap-2 mt-2">
        <img
          className="object-cover w-6 h-6 rounded-full"
          src={postedBy?.image}
          alt="user-profile"
        />
        <p className="text-sm font-semibold capitalize">{postedBy?.username}</p>
      </Link>
    </div>
  );
};

export default Pin;
