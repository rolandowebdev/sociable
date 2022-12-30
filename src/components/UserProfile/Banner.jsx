import { AiOutlineLogout } from 'react-icons/ai';

const Banner = ({ user, userID, logout }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="object-cover w-full shadow-lg h-370 2xl:h-510"
        src={process.env.REACT_APP_RANDOM_IMAGE}
        alt="banner-pic"
      />
      <img
        className="object-cover w-20 h-20 -mt-10 rounded-full shadow-xl"
        src={user?.image}
        alt="user-pic"
      />
      <h1 className="mt-3 text-3xl font-bold text-center">{user?.username}</h1>
      <div className="absolute top-0 right-0 z-10 p-2">
        {userID === user?._id && (
          <button className="p-2 mx-2 mr-1 bg-white rounded-full" type="button" onClick={logout}>
            <AiOutlineLogout color="red" fontSize={21} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
