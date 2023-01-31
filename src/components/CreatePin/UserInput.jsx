import ChooseCategory from './ChooseCategory';
import InputPin from './Input';
import UploadButton from './UploadButton';

function UserInput({
  user,
  title,
  setTitle,
  about,
  setAbout,
  destination,
  setDestination,
  uploadPin,
  setCategory
}) {
  return (
    <div className="flex flex-col flex-1.1 w-full gap-6 mt-5 lg:pl-5">
      {user && (
        <div className="flex items-center gap-2 rounded-lg">
          <img className="w-10 h-10 rounded-full" src={user?.image} alt="user-profile" />
          <p className="font-semibold capitalize">{user?.username}</p>
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
      <ChooseCategory setCategory={setCategory} />
      <UploadButton uploadPin={uploadPin} />
    </div>
  );
}

export default UserInput;
