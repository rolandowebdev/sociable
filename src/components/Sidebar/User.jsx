import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex items-center gap-2 p-2 px-5 py-4 bg-white rounded-lg shadow-lg">
          <img className="w-10 h-10 rounded-full" src={user?.image} alt={user?.username} />
          <p className="text-sm font-bold text-gray-500 uppercase">{user?.username}</p>
        </Link>
      )}
    </>
  );
};

export default User;
