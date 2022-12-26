import { urlFor } from '../../utils/sanityClient';

const Pin = ({ pin: { image } }) => {
  return (
    <div>
      <img className="w-full rounded-lg" src={urlFor(image).width(250).url()} alt="user-post" />
    </div>
  );
};

export default Pin;
