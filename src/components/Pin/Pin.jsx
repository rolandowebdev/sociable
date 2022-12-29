import UserPin from './UserPin';
import WrapperPin from './WrapperPin';

const Pin = ({ pin: { postedBy, image, _id, destination, save } }) => {
  if (!image) return null;
  return (
    <div className="m-2">
      <WrapperPin
        _id={_id}
        destination={destination}
        image={image}
        postedBy={postedBy}
        save={save}
      />
      <UserPin postedBy={postedBy} />
    </div>
  );
};

export default Pin;
