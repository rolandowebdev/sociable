import { AiOutlineLogout } from 'react-icons/ai';

function Banner({ user, userId, logout }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="object-cover w-full shadow-lg h-370 2xl:h-510"
        src="https://source.unsplash.com/1600x900/?nature,photography,technology"
        alt="banner-pic"
      />
      <div className="-mt-10 border-[4px] rounded-full shadow-2xl border-red-400 h-30 aspect-square">
        <img className="object-cover m-[5px] rounded-full" src={user?.image} alt="user-pic" />
      </div>
      <h1 className="mt-3 text-3xl font-bold text-center">{user?.username}</h1>
      <div className="absolute z-10 p-2 top-1 right-2">
        {userId === user?._id && (
          <button
            className="p-2 text-red-500 duration-200 bg-white rounded-full hover:shadow-md hover:bg-red-500 hover:text-white"
            type="button"
            onClick={logout}>
            <AiOutlineLogout fontSize={21} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner;
