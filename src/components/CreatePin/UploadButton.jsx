import { Oval } from 'react-loader-spinner'

export const UploadButton = ({ uploadPin, fields }) => (
  <button
    className="py-2 mt-2 flex justify-center items-center font-semibold text-white bg-primary rounded-md outline-none hover:shadow-md hover:bg-lightPrimary w-28"
    type="button"
    onClick={uploadPin}>
    {fields ? (
      <Oval
        color="#fff"
        strokeWidth={5}
        secondaryColor="#d4d4d4"
        height={22}
        width={22}
      />
    ) : (
      'upload'
    )}
  </button>
)
