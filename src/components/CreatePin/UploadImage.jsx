import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import InputPin from './Input';
import { Loading } from '..';

const UploadImage = ({ loading, wrongImageType, imageAsset, uploadImage, setImageAsset }) => {
  return (
    <div className="bg-secondaryColor p-3 flex flex-0.7 w-full rounded-md">
      <div className="flex flex-col items-center justify-center w-full p-3 border-2 border-gray-300 border-dotted h-420">
        {loading && <Loading center />}
        {wrongImageType && <p className="font-semibold text-rose-600">Wrong image type!</p>}
        {!imageAsset ? (
          <label>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">
                  <AiOutlineCloudUpload />
                </p>
                <p className="font-semibold">Click to upload</p>
              </div>
              <p className="mt-32 text-sm text-gray-400">
                Use high-quality JPG, SVG, PNG, GIF less than 20 MB
              </p>
            </div>
            <InputPin action={uploadImage} type="file" name="upload-image" otherClass="w-0 h-0" />
          </label>
        ) : (
          <div className="relative h-full">
            <img className="w-full h-full" src={imageAsset?.url} alt="uploaded-pic" />
            <button
              type="button"
              className="absolute p-3 text-xl transition-all duration-500 ease-in-out bg-white rounded-full outline-none cursor-pointer bottom-3 right-3 hover:shadow-md"
              onClick={() => setImageAsset(null)}>
              <MdDelete />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
