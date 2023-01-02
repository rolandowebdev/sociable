const SaveButton = ({ savePin }) => {
  return (
    <button
      className="py-2 mt-2 font-semibold text-white bg-red-500 rounded-md outline-none w-28"
      type="button"
      onClick={savePin}>
      Save Pin
    </button>
  );
};

export default SaveButton;
