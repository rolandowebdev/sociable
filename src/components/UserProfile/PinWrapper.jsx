import MasonryLayout from '../MasonryLayout/MasonryLayout';

const PinWrapper = ({ pins }) => {
  return (
    <>
      {pins?.length ? (
        <div className="px-2">
          <MasonryLayout pins={pins} />
        </div>
      ) : (
        <p className="text-2xl font-bold text-center text-slate-800">No Pins Found!</p>
      )}
    </>
  );
};

export default PinWrapper;
