import { urlFor } from '../../utils/sanityClient';

const PostImage = ({ pinDetail }) => {
  return (
    <div className="flex-1">
      <img
        className="rounded-md"
        src={pinDetail?.image && urlFor(pinDetail?.image).url()}
        alt="user-post"
      />
    </div>
  );
};

export default PostImage;
