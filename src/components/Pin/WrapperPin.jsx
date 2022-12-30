import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationUser from './DestinationUser';
import DeletePin from './DeletePin';
import DownloadPin from './DownloadPin';
import SavePin from './SavePin';

import { urlFor } from '../../utils/sanityClient';
import { fetchUserData } from '../../utils/fetchUserData';

const WrapperPin = ({ _id, image, save, destination, postedBy }) => {
  const navigate = useNavigate();
  const [postHovered, setPostHovered] = useState(false);

  const user = fetchUserData(); // fetching all user
  return (
    <div
      className="relative w-auto overflow-hidden transition-all duration-500 ease-in-out rounded-lg cursor-zoom-in hover:shadow-lg"
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      onKeyDown={() => setPostHovered(true)}
      onClick={() => navigate(`/pin-detail/${_id}`)}>
      {/* background */}
      <img className="w-full rounded-lg" src={urlFor(image).width(250).url()} alt="user-post" />
      {/* overlay */}
      {postHovered && (
        <div className="absolute top-0 z-50 flex flex-col justify-between w-full h-full p-1 pt-2 pb-2 pr-2">
          <div className="flex justify-between">
            <DownloadPin image={image} />
            <SavePin _id={_id} save={save} user={user} />
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            {destination && <DestinationUser destination={destination} />}
            {postedBy?._id === user?.sub && <DeletePin _id={_id} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapperPin;