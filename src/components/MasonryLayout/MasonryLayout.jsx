import Masonry from 'react-masonry-css';
import { Pin } from '..';

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 4,
  1000: 3,
  500: 1
};

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {pins?.map((pin) => (
        <Pin className="w-max" key={pin._id} pin={pin} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
