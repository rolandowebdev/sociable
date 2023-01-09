import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationUser from './DestinationUser';
import DeletePin from './DeletePin';
import DownloadPin from './DownloadPin';
import SavePin from './SavePin';

import { urlFor } from '../../utils/sanityClient';
import { fetchUserData } from '../../utils/fetchUserData';

const WrapperPin = ({ _id, image, save, destination, postedBy, about }) => {
  const [postHovered, setPostHovered] = useState(false);
  const navigate = useNavigate();
  const user = fetchUserData(); // fetching all user
  return (
    <button type="button" className="cursor-zoom-in" onClick={() => navigate(`/pin-detail/${_id}`)}>
      <div
        className="relative overflow-hidden transition-all duration-500 ease-in-out rounded-md cursor-zoom-in hover:shadow-lg"
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}>
        {/* background */}
        <img className="w-full rounded-md" src={urlFor(image).width(250).url()} alt="user-post" />
        {/* overlay */}
        {postHovered && (
          <div className="absolute top-0 z-50 flex flex-col justify-between w-full h-full p-1 pt-2 pb-2 pr-2">
            <div className="flex justify-between">
              <DownloadPin image={image} />
              <SavePin _id={_id} save={save} user={user} />
            </div>
            <div className="flex items-center justify-between">
              {destination && <DestinationUser destination={destination} />}
              {postedBy?._id === user?.sub && <DeletePin _id={_id} />}
            </div>
          </div>
        )}
      </div>
      <p className="mt-2 mb-[6px] text-start text-sm font-semibold">
        {about?.length > 25 ? `${about?.slice(0, 25)}...` : about}
      </p>
    </button>
  );
};

export default WrapperPin;
