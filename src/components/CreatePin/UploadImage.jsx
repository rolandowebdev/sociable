import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { client } from '../../utils/sanityClient';

import InputPin from './Input';

const UploadImage = ({ imageAsset, setImageAsset }) => {
  const [wrongImageType, setWrongImageType] = useState(false);
  const [loading, setLoading] = useState(false);

  // TODO: uploading asset to Sanity
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0]; // select first image from user
    if (
      selectedFile.type === 'image/png' ||
      selectedFile.type === 'image/svg' ||
      selectedFile.type === 'image/gif' ||
      selectedFile.type === 'image/jpeg' ||
      selectedFile.type === 'image/tiff'
    ) {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload('image', selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Image upload error', error);
        });
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  if (loading)
    return (
      <div className="flex items-center flex-col justify-center w-full flex-0.8">
        <ProgressBar barColor="#DC2626" borderColor="#EF4444" />
        <p className="px-2 -mt-5 text-center text-md">Upload image...</p>
      </div>
    );

  return (
    <div className="bg-gray-100 p-3 w-full flex-0.8 rounded-md">
      <div className="flex flex-col items-center justify-center w-full p-3 border-2 border-gray-300 border-dotted h-420">
        {wrongImageType && <p className="font-semibold text-rose-600">Wrong image type!</p>}
        {!imageAsset ? (
          <label>
            <div className="flex flex-col items-center justify-center h-full">
              <AiOutlineCloudUpload size={35} />
              <p className="mt-1 font-semibold">Click to upload</p>
              <p className="mt-8 text-sm text-gray-400">
                Use high-quality JPG, SVG, PNG, GIF less than 20 MB
              </p>
            </div>
            <InputPin action={uploadImage} type="file" name="upload-image" otherClass="w-0 h-0" />
          </label>
        ) : (
          <div className="relative h-full">
            <img className="w-full h-full" src={imageAsset?.url} alt="upload-img" />
            <button
              type="button"
              className="absolute p-3 text-xl bg-white rounded-full outline-none cursor-pointer hove bottom-3 right-3 hover:shadow-md hover:text-red-600"
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
