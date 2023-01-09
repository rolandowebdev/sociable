import MasonryLayout from '../MasonryLayout/MasonryLayout';

const PinWrapper = ({ pins }) => {
  if (pins?.length === 0) {
    return (
      <div className="flex items-center justify-center w-full mt-2 font-bold text-1xl">
        No Pins Found!
      </div>
    );
  }
  return (
    <div className="px-10">
      <MasonryLayout pins={pins} />
    </div>
  );
};

export default PinWrapper;
