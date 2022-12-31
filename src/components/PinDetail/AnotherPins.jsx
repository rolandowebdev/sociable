import { MasonryLayout, Spinner } from '..';

const AnotherPins = ({ pins }) => {
  if (!pins) return <Spinner message="Loading more pins" />;
  return (
    <>
      <h2 className="mt-8 mb-3 text-2xl font-bold text-center">More like this</h2>
      <MasonryLayout pins={pins} />
    </>
  );
};

export default AnotherPins;
