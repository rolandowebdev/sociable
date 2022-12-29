import { urlFor } from '../../utils/sanityClient';

const PostImage = ({ pinDetail }) => {
  return (
    <div className="flex-1">
      <img
        className="rounded-b-lg rounded-t-3xl"
        src={pinDetail?.image && urlFor(pinDetail?.image).url()}
        alt="user-post"
      />
    </div>
  );
};

export default PostImage;
