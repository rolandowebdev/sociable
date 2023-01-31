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

function MasonryLayout({ pins }) {
  return (
    <Masonry className="flex gap-5 animate-slide-fwd" breakpointCols={breakpointObj}>
      {pins?.map((pin) => (
        <Pin key={pin?._id} pin={pin} className="w-max" />
      ))}
    </Masonry>
  );
}

export default MasonryLayout;
