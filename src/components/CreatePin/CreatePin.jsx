/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

import { client } from '../../utils/sanityClient';

import { Spinner } from '..';
import ChooseCategory from './ChooseCategory';
import SaveButton from './SaveButton';
import InputPin from './Input';
import UploadImage from './UploadImage';
import UserInput from './UserInput';

const CreatePin = ({ user }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);

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

  const savePin = () => {
    if (title && about && destination && imageAsset?._id && category) {
      const doc = {
        _type: 'pin',
        title,
        about,
        destination,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id
          }
        },
        userId: user._id,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id
        },
        category
      };
      client.create(doc).then(() => {
        navigate('/');
      });
    } else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 lg:h-4/5 ">
      {fields && (
        <p className="mb-5 text-left text-red-500 transition-all duration-150 ease-in">
          Please fill all the fields!
        </p>
      )}
      <div className="flex flex-col items-center justify-center w-full p-3 bg-white lg:flex-row lg:p-5 lg:w-4/5">
        <UploadImage
          loading={loading}
          wrongImageType={wrongImageType}
          imageAsset={imageAsset}
          uploadImage={uploadImage}
          setImageAsset={setImageAsset}
        />
        <div className="flex flex-col flex-1 w-full gap-6 mt-5 lg:pl-5">
          <UserInput
            title={title}
            about={about}
            destination={destination}
            setAbout={setAbout}
            setDestination={setDestination}
            setTitle={setTitle}
            user={user}
          />
          <div className="flex flex-col">
            <ChooseCategory setCategory={setCategory} />
            <SaveButton savePin={savePin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
