const UploadButton = ({ uploadPin }) => {
  return (
    <button
      className="py-2 mt-2 font-semibold text-white bg-red-500 rounded-md outline-none hover:shadow-md hover:bg-red-600 w-28"
      type="button"
      onClick={uploadPin}>
      Upload
    </button>
  );
};

export default UploadButton;
