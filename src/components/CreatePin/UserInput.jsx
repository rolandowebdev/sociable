import InputPin from './Input';

const UserInput = ({ title, setTitle, user, about, setAbout, destination, setDestination }) => {
  return (
    <>
      {user && (
        <div className="flex items-center gap-2 my-2 bg-white rounded-lg">
          <img className="w-10 h-10 rounded-full" src={user?.image} alt="user-profile" />
          <p className="font-bold">{user?.username}</p>
        </div>
      )}
      <InputPin
        value={title}
        action={(e) => setTitle(e.target.value)}
        placeholder="Add your title here"
      />
      <InputPin
        value={about}
        action={(e) => setAbout(e.target.value)}
        placeholder="What is your pin about"
      />
      <InputPin
        value={destination}
        action={(e) => setDestination(e.target.value)}
        placeholder="Add a destination link"
      />
    </>
  );
};

export default UserInput;
