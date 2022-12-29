import { MasonryLayout, Spinner } from '..';

const AnotherPins = ({ pins }) => {
  return (
    <>
      {pins?.length > 0 && (
        <h2 className="mt-8 mb-4 text-2xl font-bold text-center">More like this</h2>
      )}
      {pins ? <MasonryLayout pins={pins} /> : <Spinner message="Loading more pins" />}
    </>
  );
};

export default AnotherPins;
