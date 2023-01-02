import UserPin from './UserPin';
import WrapperPin from './WrapperPin';

const Pin = ({ pin: { _id, destination, image, postedBy, save, about } }) => {
  if (!image) return null;
  return (
    <div className="my-3">
      <WrapperPin
        _id={_id}
        destination={destination}
        image={image}
        postedBy={postedBy}
        save={save}
        about={about}
      />
      <UserPin postedBy={postedBy} />
    </div>
  );
};

export default Pin;
