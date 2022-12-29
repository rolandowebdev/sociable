import { Link } from 'react-router-dom';

const UserPin = ({ postedBy }) => {
  return (
    <Link to={`user-profile/${postedBy?._id}`} className="flex items-center gap-2 mt-2">
      <img className="object-cover w-6 h-6 rounded-full" src={postedBy?.image} alt="user-profile" />
      <p className="text-sm font-semibold capitalize">{postedBy?.username}</p>
    </Link>
  );
};

export default UserPin;
