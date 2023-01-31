import { Link } from 'react-router-dom';

function UserPin({ postedBy }) {
  return (
    <Link to={`user-profile/${postedBy?._id}`} className="flex items-center gap-[6px]">
      <img className="object-cover w-8 h-8 rounded-full" src={postedBy?.image} alt="user-profile" />
      <p className="text-[15px] capitalize hover:underline">{postedBy?.username}</p>
    </Link>
  );
}

export default UserPin;
